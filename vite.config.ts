import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

// https://vitejs.dev/config/
export default defineConfig({
    build: {
        rollupOptions: {
          input: {
            main: path.resolve(__dirname, 'index.html'),
            nested: path.resolve(__dirname, 'nested/index.html'),
          },
        },
      },
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
