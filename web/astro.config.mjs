// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import inlineReviewVite from 'review-loop/vite';

/** @returns {import('astro').AstroIntegration} */
function reviewLoop(options = {}) {
  return {
    name: 'review-loop',
    hooks: {
      'astro:config:setup': (/** @type {any} */ { command, injectScript, updateConfig }) => {
        if (command !== 'dev') return;
        updateConfig({ vite: { plugins: [inlineReviewVite(options)] } });
        injectScript('page', `
          const s = document.createElement('script');
          s.type = 'module';
          s.src = '/__inline-review/client.js';
          document.body.appendChild(s);
        `);
      }
    }
  };
}

// https://astro.build/config
export default defineConfig({
  site: 'https://www.patinadesign.uk',
  vite: {
    plugins: [tailwindcss()]
  },

  integrations: [reviewLoop(), react(), sitemap()],
  adapter: vercel()
});