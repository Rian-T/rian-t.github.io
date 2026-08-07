import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://rian-t.github.io",
  integrations: [sitemap()],
});