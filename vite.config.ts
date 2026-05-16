import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import legacy from "@vitejs/plugin-legacy"
import tailwindcss from '@tailwindcss/vite'
import path from "path"

export default defineConfig({
  build: {
    target: "es2015", // not "esnext" — esnext breaks MI Browser
  },
  plugins: [
    react(),
     legacy({
      targets: ["Android >= 6", "Chrome >= 70"],
      additionalLegacyPolyfills: ["regenerator-runtime/runtime"],
      renderLegacyChunks: true,
      modernPolyfills: true,
    }),
    tailwindcss(),
  ],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
    },
  },
})