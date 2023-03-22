import * as path from 'path';
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

import manifest from './manifest.json';

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [
    react(),
    VitePWA({
      manifest,
      injectRegister: 'auto',
      registerType: 'autoUpdate',
      includeAssets: ["favicon.svg", "favicon.ico", "robots.txt", "apple-touch-icon.png"],
      // switch to "true" to enable sw on development
      devOptions: {
        enabled: true,
      },
      workbox: {
        globPatterns: ["**/*.{js,css,html}", "**/*.{svg,png,jpg,gif}"],
      },
    }),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
});
