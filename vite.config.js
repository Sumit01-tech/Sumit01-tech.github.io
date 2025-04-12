import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base: '/Portfolio-Website/',  // Adjust this to reflect the subfolder for your project
  build: {
    outDir: 'dist',  // Ensure the build outputs to the 'dist' folder
  },
});
