import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react-swc';
import path from 'path';

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      '@': path.resolve(__dirname, './src'),
    },
  },
  server: {
    port: 5173,
    host: true, // Listen on all addresses
    proxy: {
      '/kyc-proxy': {
        target: 'http://www.amassdubai.com',
        changeOrigin: true,
        secure: false,
        logLevel: 'debug',
        cookieDomainRewrite: "",
        rewrite: (path) => {
          const newPath = path.replace(/^\/kyc-proxy/, '/india_kyc');
          console.log(`[Vite Proxy] ${path} -> ${newPath}`);
          return newPath;
        },
        headers: {
          'Referer': 'http://www.amassdubai.com/india_kyc/',
          'Origin': 'http://www.amassdubai.com'
        },
        configure: (proxy, _options) => {
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            delete proxyRes.headers['x-frame-options'];
            delete proxyRes.headers['content-security-policy'];
            delete proxyRes.headers['content-security-policy-report-only'];
            proxyRes.headers['content-security-policy'] = "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;";

            if (proxyRes.headers['location']) {
              let location = proxyRes.headers['location'];
              location = location.replace('http://www.amassdubai.com/india_kyc', '/kyc-proxy');
              location = location.replace('http://amassdubai.com/india_kyc', '/kyc-proxy');
              location = location.replace(/^\/india_kyc/, '/kyc-proxy');
              
              if (location === '/index.php' || location === '/') {
                location = '/kyc-proxy/';
              }

              proxyRes.headers['location'] = location;
            }
          });
        },
      },
    },
  },
});
