import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vitejs.dev/config/
export default defineConfig({
  // Served from https://antonysoumya.github.io/wedding-portfolio/
  base: '/wedding-portfolio/',
  plugins: [react()],
  server: {
    host: true,
    port: 5173,
  },
})
