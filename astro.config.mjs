import { defineConfig } from 'astro/config';
import tailwind from '@astrojs/tailwind';
import compress from 'astro-compress';
import sitemap from '@astrojs/sitemap';

import node from "@astrojs/node";

// https://astro.build/config
export default defineConfig({
  site: 'https://www.ripae.ca/',
  integrations: [tailwind(), compress(), sitemap()],
  output: "hybrid",
  adapter: node({
    mode: "standalone"
  })
});