import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import tailwindcss from '@tailwindcss/postcss'

export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
})
// vite.config.js
export default {
  base: '/your-repo-name/', // Replace this with your actual repository name
  // ... other config
}