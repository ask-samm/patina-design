// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';
import react from '@astrojs/react';
import vercel from '@astrojs/vercel';
import sitemap from '@astrojs/sitemap';
import inlineReviewVite from 'review-loop/vite';

// Custom wrapper: the official review-loop Astro integration uses
// `import 'review-loop/client'` which triggers a babel transform crash
// from the Astro 6 / Vite 7.3.1 version mismatch. This wrapper uses the
// Vite plugin directly and loads the client via a dynamic <script> tag.
function reviewLoop(options = {}) {
  return {
    name: 'review-loop',
    hooks: {
      'astro:config:setup': ({ command, injectScript, updateConfig }) => {
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

  integrations: [/* reviewLoop(), */ react(), sitemap()],
  adapter: vercel()
});