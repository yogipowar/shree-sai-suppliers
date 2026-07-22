import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// GitHub Pages project site: https://yogipowar.github.io/shree-sai-suppliers/
export default defineConfig({
  plugins: [react()],
  base: '/shree-sai-suppliers/',
})
