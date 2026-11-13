import { defineConfig } from 'vite';

export default defineConfig({
  base: '/pocket-pet-planet/',
  // The preview is shared through a Cloudflare quick tunnel with a random hostname.
  preview: { allowedHosts: true },
  server: { allowedHosts: true },
  build: { target: 'es2020', chunkSizeWarningLimit: 900 },
});
