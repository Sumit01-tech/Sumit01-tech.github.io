// vite.config.js
import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'

const isGithubPages = process.env.DEPLOY_TARGET === 'GH_PAGES';

export default defineConfig({
  base: isGithubPages ? "/Portfolio-Website/" : "/",
  plugins: [react()],
})
