import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  // For GitHub Pages deployment, set base to your repo name:
  // base: '/the-wall-landing/',
  // For local development, use '/'
  base: process.env.NODE_ENV === 'production' ? '/the-wall-landing/' : '/',
})
