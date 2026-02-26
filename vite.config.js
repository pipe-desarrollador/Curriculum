import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
// En GitHub Pages: base debe ser '/nombre-repo/' (ej: '/Curriculum/')
// VITE_BASE_PATH se define en el workflow de GitHub Actions
export default defineConfig({
  plugins: [react(), tailwindcss()],
  base: process.env.VITE_BASE_PATH || './',
})
