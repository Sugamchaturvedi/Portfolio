import { defineConfig, Plugin } from 'vite'
import react from '@vitejs/plugin-react'
import { resolve } from 'path'
import fs from 'fs'

// Plugin to rewrite root and /index.html to /index7.html in dev and preview servers,
// and copy index7.html to index.html in dist for universal hosting compatibility
const htmlFallbackPlugin = (): Plugin => ({
  name: 'html-fallback-plugin',
  configureServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === '/' || req.url === '/index.html') {
        req.url = '/index7.html'
      }
      next()
    })
  },
  configurePreviewServer(server) {
    server.middlewares.use((req, _res, next) => {
      if (req.url === '/' || req.url === '/index.html') {
        req.url = '/index7.html'
      }
      next()
    })
  },
  closeBundle() {
    // Ensure both dist/index7.html and dist/index.html are present for hosting compatibility
    const distIndex7 = resolve(__dirname, 'dist/index7.html')
    const distIndex = resolve(__dirname, 'dist/index.html')
    if (fs.existsSync(distIndex7) && !fs.existsSync(distIndex)) {
      fs.copyFileSync(distIndex7, distIndex)
    }
  }
})

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), htmlFallbackPlugin()],
  base: './', // Ensures relative assets work on GitHub Pages, Vercel, and local sub-paths
  server: {
    port: 3000,
    open: false
  },
  build: {
    outDir: 'dist',
    assetsDir: 'assets',
    sourcemap: false,
    rollupOptions: {
      input: {
        main: resolve(__dirname, 'index7.html')
      }
    }
  }
})
