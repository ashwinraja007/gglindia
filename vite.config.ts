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
        target: 'http://www.amassdubai.com/india_kyc',
        changeOrigin: true,
        rewrite: (path) => path.replace(/^\/kyc-proxy/, ''),
      },
    },
  },
});