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
      '/kyc-proxy': {
        target: 'http://www.amassdubai.com',
        changeOrigin: true,
        secure: false,
        cookieDomainRewrite: "",
        cookiePathRewrite: {
          "/india_kyc": "/kyc-proxy"
        },
        rewrite: (path) => path.replace(/^\/kyc-proxy/, '/india_kyc'),
        configure: (proxy, _options) => {
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            delete proxyRes.headers['x-frame-options'];
            delete proxyRes.headers['content-security-policy'];
            delete proxyRes.headers['content-security-policy-report-only'];
            proxyRes.headers['content-security-policy'] = "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:;";

            // Rewrite redirects to keep them inside the proxy
            if (proxyRes.headers['location']) {
              proxyRes.headers['location'] = proxyRes.headers['location'].replace('/india_kyc', '/kyc-proxy');
            }
          });
        },
      },
    },
  },
});
