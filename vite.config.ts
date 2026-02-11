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
    proxy: {
      '/india_kyc': {
        target: 'http://www.amassdubai.com',
        changeOrigin: true,
        secure: false,
        logLevel: 'debug',
        cookieDomainRewrite: "",
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

            // Rewrite redirects to keep them inside the proxy
            if (proxyRes.headers['location']) {
              let location = proxyRes.headers['location'];
              // Handle absolute URLs by stripping the domain
              location = location.replace('http://www.amassdubai.com', '');
              location = location.replace('http://amassdubai.com', '');

              // Fix root redirects: if server redirects to /index.php, force it back to /india_kyc/index.php
              if (location === '/index.php') {
                location = '/india_kyc/index.php';
              }

              proxyRes.headers['location'] = location;
            }
          });
        },
      },
    },
  },
});
