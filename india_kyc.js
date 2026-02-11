import { createProxyMiddleware } from 'http-proxy-middleware';

export const config = {
  api: {
    bodyParser: false,
    externalResolver: true,
  },
};

const proxy = createProxyMiddleware({
  target: 'http://www.amassdubai.com',
  changeOrigin: true,
  secure: false,
  logLevel: 'debug',
  headers: {
    'Referer': 'http://www.amassdubai.com/india_kyc/',
    'Origin': 'http://www.amassdubai.com',
    'User-Agent': 'Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/120.0.0.0 Safari/537.36'
  },
  pathRewrite: (path, req) => {
    // Vercel rewrites /india_kyc/abc to /api/india_kyc?path=abc
    const queryPath = req.query.path || '';
    const newPath = Array.isArray(queryPath) ? queryPath.join('/') : queryPath;
    const rewrittenPath = `/india_kyc/${newPath}`;
    console.log(`[Vercel Proxy] Rewriting path to: ${rewrittenPath}`);
    return rewrittenPath;
  },
  onProxyReq: (proxyReq, req, res) => {
    console.log(`[Vercel Proxy] Sending request to: http://www.amassdubai.com${proxyReq.path}`);
  },
  onProxyRes: (proxyRes, req, res) => {
    // Remove security headers that block iframes
    delete proxyRes.headers['x-frame-options'];
    delete proxyRes.headers['content-security-policy'];

    // Set permissive CSP
    proxyRes.headers['content-security-policy'] = "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; font-src * data:;";

    // Rewrite redirects
    if (proxyRes.headers['location']) {
      let location = proxyRes.headers['location'];
      location = location.replace('http://www.amassdubai.com/india_kyc', '/india_kyc');
      location = location.replace('https://www.amassdubai.com/india_kyc', '/india_kyc');
      if (location === '/index.php' || location === '/' || location === 'index.php') {
        location = '/india_kyc/index.php';
      }
      proxyRes.headers['location'] = location;
    }
  },
  onError: (err, req, res) => {
    console.error('Proxy error:', err);
    res.status(502).send('Proxy Error');
  }
});

export default function handler(req, res) {
  proxy(req, res, (err) => {
    if (err) {
      console.error('Proxy error:', err);
      res.status(500).send('Proxy Error');
    }
  });
}