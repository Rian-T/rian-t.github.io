import { defineConfig } from "astro/config";

import sitemap from "@astrojs/sitemap";

export default defineConfig({
  site: "https://rian-t.github.io",
  integrations: [
    // Proposals are shared by link only: kept out of the sitemap, and noindex on the page.
    sitemap({ filter: (page) => !page.includes("/proposals/") }),
  ],
});