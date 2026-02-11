const express = require('express');
const { createProxyMiddleware } = require('http-proxy-middleware');
const path = require('path');
const app = express();

// Debug logging to verify incoming request path from Nginx
app.use((req, res, next) => {
  console.log(`[Incoming Request] ${req.method} ${req.url}`);
  next();
});

const proxyOptions = {
  target: 'http://www.amassdubai.com',
  changeOrigin: true,
  secure: false,
  cookieDomainRewrite: "",
  cookiePathRewrite: {
    "/india_kyc": "/kyc-proxy"
  },
  pathRewrite: {
    '^/': '/india_kyc/'
  },
  headers: {
    'Referer': 'http://www.amassdubai.com/india_kyc/',
    'Origin': 'http://www.amassdubai.com'
  },
  onProxyRes: (proxyRes, req, res) => {
    // Remove security headers that block iframes
    delete proxyRes.headers['x-frame-options'];
    delete proxyRes.headers['content-security-policy'];
    delete proxyRes.headers['content-security-policy-report-only'];
    
    // Allow unsafe-eval/inline for the legacy PHP site
    proxyRes.headers['content-security-policy'] = "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;";

    // Rewrite redirects so they stay within the proxy
    if (proxyRes.headers['location']) {
      let location = proxyRes.headers['location'];
      location = location.replace('http://www.amassdubai.com/india_kyc', '/kyc-proxy');
      location = location.replace('http://amassdubai.com/india_kyc', '/kyc-proxy');
      location = location.replace('/india_kyc', '/kyc-proxy');
      proxyRes.headers['location'] = location;
    }
  },
  onError: (err, req, res) => {
    console.error('Proxy Error:', err);
    res.status(500).send('Proxy Error');
  }
};

// 1. Configure the Proxy to be handled first
app.use('/kyc-proxy', createProxyMiddleware(proxyOptions));

// 2. Serve static files from the Vite build output (dist folder)
app.use(express.static(path.join(__dirname, 'dist')));

// 3. Handle React Routing (SPA Fallback)
app.get('*', (req, res) => {
  res.sendFile(path.join(__dirname, 'dist', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Production server running on port ${PORT}`);
});