import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import { VitePWA } from "vite-plugin-pwa";

// https://vitejs.dev/config/
export default defineConfig({
  base: "/RagDev",
  plugins: [
    react(),
    VitePWA({
      registerType: "autoUpdate",
      manifest: {
        name: "RagDev",
        short_name: "RagDev",
        start_url: "/",
        display: "standalone",
        background_color: "#000000",
        theme_color: "#000000",
        icons: [
          {
            src: "/icon512_rounded.png",
            sizes: "192x192",
            type: "image/png",
          },
          {
            src: "/icon512_rounded.png",
            sizes: "512x512",
            type: "image/png",
          },
        ],
      },
    }),
  ],
});
