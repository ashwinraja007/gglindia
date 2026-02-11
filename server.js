const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const app = express();

// Debug logging
app.use((req, res, next) => {
  console.log(`[${new Date().toISOString()}] ${req.method} ${req.url}`);
  next();
});

const proxyOptions = {
  target: 'http://www.amassdubai.com',
  changeOrigin: true,
  secure: false,
  logLevel: 'debug',
  cookieDomainRewrite: "",
  pathRewrite: (path, req) => {
    const newPath = '/india_kyc' + path;
    console.log(`[Path Rewrite] ${path} -> ${newPath}`);
    return newPath;
  },
  headers: {
    'Referer': 'http://www.amassdubai.com/india_kyc/',
    'Origin': 'http://www.amassdubai.com'
  },
  onProxyReq: (proxyReq, req, res) => {
    console.log(`[Proxy Request] -> http://www.amassdubai.com${proxyReq.path}`);
  },
  onProxyRes: (proxyRes, req, res) => {
    console.log(`[Proxy Response] Status: ${proxyRes.statusCode} for ${req.url}`);
    
    // Remove all security headers that block iframes
    delete proxyRes.headers['x-frame-options'];
    delete proxyRes.headers['content-security-policy'];
    delete proxyRes.headers['content-security-policy-report-only'];
    delete proxyRes.headers['x-content-type-options'];
    
    // Set permissive CSP
    proxyRes.headers['content-security-policy'] = "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; font-src * data:;";

    // Rewrite redirects
    if (proxyRes.headers['location']) {
      let location = proxyRes.headers['location'];
      console.log(`[Original Redirect] ${location}`);
      
      // Replace all variations of the target URL
      location = location.replace('http://www.amassdubai.com/india_kyc', '/kyc-proxy');
      location = location.replace('http://amassdubai.com/india_kyc', '/kyc-proxy');
      location = location.replace('https://www.amassdubai.com/india_kyc', '/kyc-proxy');
      location = location.replace('https://amassdubai.com/india_kyc', '/kyc-proxy');
      location = location.replace(/^\/india_kyc/, '/kyc-proxy');
      
      // Handle root redirects
      if (location === '/index.php' || location === '/') {
        location = '/kyc-proxy/';
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

// **CRITICAL: Proxy must be FIRST**
app.use('/kyc-proxy', createProxyMiddleware(proxyOptions));

// Serve static files (React build)
app.use(express.static(path.join(__dirname, 'dist')));

// SPA fallback - MUST exclude proxy paths
app.get('*', (req, res, next) => {
  // Skip SPA fallback for proxy paths
  if (req.path.startsWith('/kyc-proxy')) {
    console.log(`[Skipping SPA] ${req.path} is a proxy path`);
    return res.status(404).send('Proxy path not found');
  }
  
  console.log(`[SPA Fallback] Serving index.html for ${req.path}`);
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, '0.0.0.0', () => {
  console.log(`Server running on http://0.0.0.0:${PORT}`);
  console.log(`Proxy endpoint: http://0.0.0.0:${PORT}/kyc-proxy/`);
});
