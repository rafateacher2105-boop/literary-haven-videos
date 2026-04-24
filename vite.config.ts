import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";
import { componentTagger } from "lovable-tagger";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => ({
  server: {
    host: "::",
    port: 8080,
    hmr: {
      overlay: false,
    },
  },
  plugins: [
    react(),
    mode === "development" && componentTagger(),
    VitePWA({
      registerType: "autoUpdate",
      workbox: {
        skipWaiting: true,
        clientsClaim: true,
        cleanupOutdatedCaches: true,
        navigateFallbackDenylist: [/^\/~oauth/, /\.pdf$/i, /\.epub$/i],
        runtimeCaching: [
          {
            // HTML/navegação sempre da rede primeiro — garante versão nova ao reabrir
            urlPattern: ({ request }) => request.mode === "navigate",
            handler: "NetworkFirst",
            options: {
              cacheName: "html-cache",
              networkTimeoutSeconds: 5,
              expiration: {
                maxEntries: 20,
                maxAgeSeconds: 24 * 60 * 60,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.pdf$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "pdf-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60, // 30 days
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
          {
            urlPattern: /\.epub$/i,
            handler: "CacheFirst",
            options: {
              cacheName: "epub-cache",
              expiration: {
                maxEntries: 100,
                maxAgeSeconds: 30 * 24 * 60 * 60,
              },
              cacheableResponse: {
                statuses: [0, 200],
              },
            },
          },
        ],
      },
      manifest: {
        name: "Letras & Páginas — Blog Literário",
        short_name: "Letras & Páginas",
        description: "Resenhas, e-books gratuitos e indicações de leitura",
        theme_color: "#1a1a2e",
        background_color: "#1a1a2e",
        display: "standalone",
        start_url: "/",
        icons: [
          {
            src: "/favicon.ico",
            sizes: "64x64",
            type: "image/x-icon",
          },
        ],
      },
    }),
  ].filter(Boolean),
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
}));
