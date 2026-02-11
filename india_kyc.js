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
  pathRewrite: (path, req) => {
    // Reconstruct the path from the query param if Vercel passed it that way
    // or ensure we are requesting the correct path from the target
    if (req.query && req.query.path) {
      const queryPath = Array.isArray(req.query.path) ? req.query.path.join('/') : req.query.path;
      return '/india_kyc/' + queryPath;
    }
    // Fallback: if path starts with /api/india_kyc, strip /api
    return path.replace(/^\/api\/india_kyc/, '/india_kyc');
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
  }
});

export default function handler(req, res) {
  return proxy(req, res, (result) => {
    if (result instanceof Error) {
      throw result;
    }
  });
}