// @ts-check
import { defineConfig } from 'astro/config'

import svelte from '@astrojs/svelte';

import vercel from '@astrojs/vercel';

// https://astro.build/config
export default defineConfig({
  vite: {
    build: {
      assetsInlineLimit: 0
    }
  },

  scopedStyleStrategy: 'where',

  build: {
    inlineStylesheets: 'never'
  },

  integrations: [svelte()],
  adapter: vercel()
})