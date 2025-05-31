import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      '/api': {
        target: 'https://backend-yuthish-3117.onrender.com',
        changeOrigin: true,
      }
    }
  },
  build: {
    outDir: 'dist', // Explicitly set output directory
    emptyOutDir: true // Clear the directory before building
  }
})