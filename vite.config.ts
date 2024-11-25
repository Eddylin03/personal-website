import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig({
  base: '/personal-website/',  // Replace with your repository name
  plugins: [react()],
  optimizeDeps: {
    exclude: ['lucide-react'],
  },
});