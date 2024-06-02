import { defineConfig } from 'astro/config';
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";

import sitemap from "@astrojs/sitemap";

// https://astro.build/config
export default defineConfig({
  integrations: [tailwind(), playformCompress(), sitemap()]
});