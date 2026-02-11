import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    proxy: {
      '/kyc-proxy': {
        target: 'http://www.amassdubai.com',
        changeOrigin: true,
        secure: false,
        rewrite: (path) => path.replace(/^\/kyc-proxy/, '/india_kyc'),
        configure: (proxy, _options) => {
          proxy.on('proxyRes', (proxyRes, req, _res) => {
            // Remove security headers that block iframes
            delete proxyRes.headers['x-frame-options'];
            delete proxyRes.headers['content-security-policy'];
            
            // Set permissive CSP to allow scripts and eval
            proxyRes.headers['content-security-policy'] = "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; script-src * 'unsafe-inline' 'unsafe-eval'; style-src * 'unsafe-inline'; img-src * data: blob: 'unsafe-inline'; font-src * data:;";

            // Handle redirects
            if (proxyRes.headers['location']) {
              let location = proxyRes.headers['location'];
              location = location.replace('http://www.amassdubai.com/india_kyc', '/kyc-proxy');
              location = location.replace('https://www.amassdubai.com/india_kyc', '/kyc-proxy');
              proxyRes.headers['location'] = location;
            }
          });
        }
      }
    },
  },
  plugins: [
    react(),
    mode === 'development' && componentTagger(),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));