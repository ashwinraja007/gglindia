import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";

export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    headers: {
      // Remove CSP for development to allow HTTP iframe
      'Content-Security-Policy': mode === 'development' 
        ? "default-src * 'unsafe-inline' 'unsafe-eval' data: blob:; frame-src *;" 
        : undefined,
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
