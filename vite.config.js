vite.config.js 


import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react' // Or vue, etc.
import ghPages from 'vite-plugin-gh-pages' // Import the plugin

export default defineConfig({
  plugins: [react(), ghPages()],
  base: '/ecovation/', // 👈 IMPORTANT: Replace 'your-repo-name' with your actual GitHub repo name
})