import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";
import sitemap from "@astrojs/sitemap";
import SpeedInsights from "@vercel/speed-insights/astro";

export default defineConfig({
  integrations: [tailwind(), playformCompress(), sitemap(), SpeedInsights()],
});
