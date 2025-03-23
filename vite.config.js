import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
<<<<<<< HEAD
import tailwindcss from '@tailwindcss/vite'

// https://vite.dev/config/
export default defineConfig({
  plugins: [
    react(),
    tailwindcss(),
  ],
=======

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
>>>>>>> 699ec49da5c7ced94287737dc7af1741a9c7bf5e
})
