import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";
import sitemap from "@astrojs/sitemap";
import robotsTxt from "astro-robots-txt";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: "https://hc-draci.vercel.app",
  integrations: [
    tailwind(),
    playformCompress(),
    sitemap(),
    robotsTxt(),
    react(),
  ],
});
