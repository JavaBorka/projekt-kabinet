import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  base: "/",
  build: {
    outDir: 'dist', // Build výstup se vytvoří v podsložce 'dist' uvnitř 'vite-project-kabinet'
  },
  plugins: [react()],
})