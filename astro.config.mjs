import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

export default defineConfig({
  site: "https://potli.co.uk",
  output: "static",
  outDir: "./dist",
  trailingSlash: "ignore",
  integrations: [
    tailwind({
      applyBaseStyles: false,
    }),
  ],
  build: {
    format: "directory",
  },
});
