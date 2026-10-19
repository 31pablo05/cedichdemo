// @ts-check
import { defineConfig } from 'astro/config';

import react from '@astrojs/react';
import sitemap from '@astrojs/sitemap';
import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // PENDIENTE CLIENTE: reemplazar por el dominio definitivo cuando se conecte;
  // de esta URL depende que las vistas previas al compartir (WhatsApp, etc.) funcionen.
  site: 'https://cedichdemo.vercel.app',

  // URLs sin barra final, consistentes con la navegación interna
  trailingSlash: 'never',

  integrations: [
    react(),
    sitemap({
      filter: (page) => !page.includes('/404'),
    }),
  ],

  vite: {
    plugins: [tailwindcss()]
  }
});