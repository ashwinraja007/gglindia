import express from 'express';
import { createProxyMiddleware } from 'http-proxy-middleware';
import path from 'path';
import { fileURLToPath } from 'url';
import mysql from 'mysql2/promise';
import dotenv from 'dotenv';
import jwt from 'jsonwebtoken';

dotenv.config();

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const app = express();
app.use(express.json()); // Allow the server to parse JSON request bodies

// 1. Setup MySQL Database Connection Pool
const dbPool = mysql.createPool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  waitForConnections: true,
  connectionLimit: 10,
  queueLimit: 0
});

// Test Database Connection on startup
dbPool.getConnection()
  .then(conn => { console.log('[DB] MySQL Connected successfully'); conn.release(); })
  .catch(err => { console.error('[DB] MySQL Connection failed:', err.message); });

// Debug logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

const proxyOptions = {
  target: 'http://www.amassdubai.com', // Target the root domain to ensure paths map 1:1
  changeOrigin: true,
  secure: false,
  cookieDomainRewrite: "*", // Allow cookies to be set on localhost/current domain
  cookiePathRewrite: {
    "*": "/" // Ensure cookies are valid for the entire site
  },
  logLevel: 'debug',
  headers: {
    'Referer': 'http://www.amassdubai.com/india_kyc/',
    'Origin': 'http://www.amassdubai.com',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/122.0.0.0 Safari/537.36',
  },
  onProxyReq: (proxyReq, req, res) => {
    console.log(`[Proxy Request] -> ${new URL(proxyReq.path, proxyOptions.target).href}`);
    
    // Ensure AJAX requests are marked correctly, as some PHP frameworks check this
    if (req.headers['x-requested-with']) {
      proxyReq.setHeader('X-Requested-With', req.headers['x-requested-with']);
    }
  },
  onProxyRes: (proxyRes, req, res) => {
    console.log(`[Proxy Response] Status: ${proxyRes.statusCode} for ${req.url}`);
    
    // Remove all security headers that block iframes
    delete proxyRes.headers['x-frame-options'];
    delete proxyRes.headers['content-security-policy'];
    delete proxyRes.headers['content-security-policy-report-only'];
    delete proxyRes.headers['x-content-type-options'];
    
    // Set permissive CSP
    proxyRes.headers['content-security-policy'] = "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; font-src * data:; frame-ancestors *;";

    // Rewrite redirects
    if (proxyRes.headers['location']) {
      let location = proxyRes.headers['location'];
      console.log(`[Original Redirect] ${location}`);
      
      // Replace all variations of the target URL
      location = location.replace('http://www.amassdubai.com/india_kyc', '/india_kyc');
      location = location.replace('http://amassdubai.com/india_kyc', '/india_kyc');
      location = location.replace('https://www.amassdubai.com/india_kyc', '/india_kyc');
      location = location.replace('https://amassdubai.com/india_kyc', '/india_kyc');
      
      // Handle root redirects
      if (location === '/index.php' || location === '/' || location === 'index.php') {
        location = '/india_kyc/index.php';
      }
      
      console.log(`[Rewritten Redirect] ${location}`);
      proxyRes.headers['location'] = location;
    }
  },
  onError: (err, req, res) => {
    console.error('[Proxy Error]', err.message);
    res.status(502).json({
      error: 'Proxy Error',
      message: err.message,
      url: req.url
    });
  }
};

// Serve static files (React build) FIRST
// This ensures local assets (like /assets/index.css) are served correctly.
// If a file is not found here, it falls through to the proxy or SPA fallback.
app.use(express.static(path.join(__dirname, 'dist')));

// Proxy middleware for form and common asset paths
// We include common folders like /js, /css, /img because the external form likely references them at the root level.
const proxyPaths = ['/india_kyc', '/js', '/css', '/img', '/images', '/fonts', '/assets', '/vendor', '/lib'];
app.use(proxyPaths, createProxyMiddleware(proxyOptions));

// ==========================================
// CMS / Admin Panel API Endpoints
// ==========================================

// Admin Login Endpoint
app.post('/api/admin/login', (req, res) => {
  const { email, password } = req.body;
  if (email === 'info.india@ggl.sg' && password === 'GGLIndia@123') {
    // Generate a token valid for 2 hours
    const token = jwt.sign({ role: 'admin' }, process.env.JWT_SECRET, { expiresIn: '2h' });
    res.json({ token });
  } else {
    res.status(401).json({ error: 'Invalid credentials' });
  }
});

// JWT Authentication Middleware
const authenticateToken = (req, res, next) => {
  const authHeader = req.headers['authorization'];
  const token = authHeader && authHeader.split(' ')[1]; // Format: "Bearer <token>"
  if (!token) return res.status(401).json({ error: 'Access denied. No token provided.' });
  
  jwt.verify(token, process.env.JWT_SECRET, (err, user) => {
    if (err) return res.status(403).json({ error: 'Invalid or expired token.' });
    req.user = user;
    next();
  });
};

// Fetch content for a specific page
app.get('/api/content/:pageKey', async (req, res) => {
  try {
    const [rows] = await dbPool.query('SELECT content_data FROM page_content WHERE page_key = ?', [req.params.pageKey]);
    if (rows.length > 0) {
      res.json(rows[0].content_data);
    } else {
      res.status(404).json({ error: 'Page content not found' });
    }
  } catch (error) {
    res.status(500).json({ error: 'Database error fetching content' });
  }
});

// Save/Update content for a specific page (Protected Route)
app.put('/api/content/:pageKey', authenticateToken, async (req, res) => {
  try {
    const contentData = JSON.stringify(req.body); // stringify the incoming JSON payload
    await dbPool.query(
      'INSERT INTO page_content (page_key, content_data) VALUES (?, ?) ON DUPLICATE KEY UPDATE content_data = ?',
      [req.params.pageKey, contentData, contentData]
    );
    res.json({ success: true, message: 'Content saved successfully' });
  } catch (error) {
    res.status(500).json({ error: 'Database error saving content' });
  }
});

// SPA fallback - MUST exclude proxy paths
app.get('*', (req, res, next) => {
  // Skip SPA fallback for proxy paths
  if (proxyPaths.some(path => req.path.startsWith(path))) {
    console.log(`[Skipping SPA] ${req.path} is a proxy path (but failed to proxy?)`);
    return res.status(404).send('Proxy path not found');
  }
  
  console.log(`[SPA Fallback] Serving index.html for ${req.path}`);
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
  console.log(`Proxy endpoint: http://0.0.0.0:${PORT}/india_kyc/`);
});
