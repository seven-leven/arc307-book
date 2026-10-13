// Static site for GitHub Pages. The repository's name is part of every address, so it is set in one place: BASE.
// If the repository is renamed, or the site moves to its own address, change SITE and BASE here and nowhere else.
import { defineConfig } from "astro/config";

const SITE = "https://seven-leven.github.io";
const BASE = "/arc307-book";

export default defineConfig({
  site: SITE,
  base: BASE,
  trailingSlash: "always",
  build: { format: "directory" },
  devToolbar: { enabled: false },
  vite: {
    build: { cssMinify: true },
  },
});
