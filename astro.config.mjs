import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import playformCompress from "@playform/compress";
import sitemap from "@astrojs/sitemap";

import vercel from "@astrojs/vercel/serverless";

export default defineConfig({
  integrations: [tailwind(), playformCompress(), sitemap()],
  output: "server",
  adapter: vercel({
    webAnalytics: { enabled: true },
  }),
});
