const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const app = express();

// Debug logging
app.use((req, res, next) => {
  console.log(`[Incoming Request] ${req.method} ${req.url}`);
  next();
});

const proxyOptions = {
  target: 'http://www.amassdubai.com',
  changeOrigin: true,
  secure: false,
  logLevel: 'debug',
  cookieDomainRewrite: "",
  // Don't rewrite cookie paths - keep them as the original server sends them
  // This preserves session cookies correctly
  pathRewrite: (path, req) => {
    // Path comes in as everything after '/kyc-proxy'
    // We need to prepend '/india_kyc' to match the target server
    const newPath = '/india_kyc' + path;
    console.log(`[Path Rewrite] ${path} -> ${newPath}`);
    return newPath;
  },
  headers: {
    'Referer': 'http://www.amassdubai.com/india_kyc/',
    'Origin': 'http://www.amassdubai.com'
  },
  onProxyReq: (proxyReq, req, res) => {
    console.log(`[Proxy Request] ${req.method} ${req.url} -> ${proxyReq.path}`);
  },
  onProxyRes: (proxyRes, req, res) => {
    console.log(`[Proxy Response] ${req.url} -> Status: ${proxyRes.statusCode}`);
    
    // Remove security headers that block iframes
    delete proxyRes.headers['x-frame-options'];
    delete proxyRes.headers['content-security-policy'];
    delete proxyRes.headers['content-security-policy-report-only'];
    
    // Allow unsafe-eval/inline for the legacy PHP site
    proxyRes.headers['content-security-policy'] = "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;";

    // Rewrite redirects so they stay within the proxy
    if (proxyRes.headers['location']) {
      let location = proxyRes.headers['location'];
      console.log(`[Original Redirect] ${location}`);
      
      // Handle absolute URLs
      location = location.replace('http://www.amassdubai.com/india_kyc', '/kyc-proxy');
      location = location.replace('http://amassdubai.com/india_kyc', '/kyc-proxy');
      location = location.replace('https://www.amassdubai.com/india_kyc', '/kyc-proxy');
      location = location.replace('https://amassdubai.com/india_kyc', '/kyc-proxy');
      
      // Handle relative URLs starting with /india_kyc
      location = location.replace(/^\/india_kyc/, '/kyc-proxy');
      
      // Handle root redirects (if the server redirects to /index.php or /)
      if (location === '/index.php' || location === '/') {
        location = '/kyc-proxy/';
      }
      
      console.log(`[Rewritten Redirect] ${location}`);
      proxyRes.headers['location'] = location;
    }
  },
  onError: (err, req, res) => {
    console.error('Proxy Error:', err.message);
    res.status(500).send(`Proxy Error: ${err.message}`);
  }
};

// 1. Proxy middleware - handles all /kyc-proxy/* requests
app.use('/kyc-proxy', createProxyMiddleware(proxyOptions));

// 2. Serve static files from the Vite build output (dist folder)
app.use(express.static(path.join(__dirname, 'dist')));

// 3. Handle React Routing (SPA Fallback)
// IMPORTANT: This should NOT match /kyc-proxy paths
app.get('*', (req, res) => {
  // Double-check we're not accidentally serving React for proxy paths
  if (req.path.startsWith('/kyc-proxy')) {
    return res.status(404).send('Not Found');
  }
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Production server running on port ${PORT}`);
});
