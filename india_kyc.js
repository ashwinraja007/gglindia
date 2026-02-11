import { createProxyMiddleware } from 'http-proxy-middleware';

// IMPORTANT: This file must be placed in the `api` directory (e.g., /workspaces/gglindia/api/india_kyc.js) to work on Vercel.

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
  logLevel: 'debug', // For Vercel logs
  pathRewrite: (path, req) => {
    // Vercel rewrites /india_kyc/abc to /api/india_kyc?path=abc
    // We need to reconstruct the original path for the target.
    const queryPath = req.query.path || '';
    const newPath = Array.isArray(queryPath) ? queryPath.join('/') : queryPath;
    const rewrittenPath = `/india_kyc/${newPath}`;
    return rewrittenPath;
  },
  onProxyRes: (proxyRes, req, res) => {
    // Remove security headers that block iframes
    delete proxyRes.headers['x-frame-options'];
    delete proxyRes.headers['content-security-policy'];

    // Set permissive CSP
    proxyRes.headers['content-security-policy'] = "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; font-src * data:;";

    // Rewrite redirects to point back to our domain
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

export default async function handler(req, res) {
  // http-proxy-middleware is not designed for Vercel's edge runtime,
  // so we need to wrap it in a promise to ensure it resolves correctly.
  await new Promise((resolve, reject) => {
    proxy(req, res, (result) => {
      if (result instanceof Error) {
        return reject(result);
      }
      return resolve();
    });
  });
}