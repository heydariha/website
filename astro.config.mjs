import { defineConfig } from 'astro/config';
import tailwindcss from '@tailwindcss/vite';

// Fully static output: Cloudflare Pages serves ./dist as-is.
// Add `site: 'https://your-domain.com'` once you have a domain.
export default defineConfig({
  output: 'static',
  vite: {
    plugins: [tailwindcss()],
  },
});
