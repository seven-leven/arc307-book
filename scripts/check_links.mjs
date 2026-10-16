// After a build: every internal link in dist/ must lead to a page that exists. Run: npm run check-links
import { readdir, readFile } from "node:fs/promises";

const BASE = "/arc307-book";
const files = (await readdir("dist", { recursive: true }))
  .map((f) => "dist/" + f.replaceAll("\\", "/"))
  .filter((f) => f.endsWith(".html"))
  .sort();
const pages = new Set(files.map((f) => BASE + f.slice(4).replace(/index\.html$/, "").replace(/\.html$/, "/")));
let bad = 0, n = 0;
for (const f of files) {
  const html = await readFile(f, "utf8");
  for (const m of html.matchAll(/(?:href|data-href-[a-z]+)="([^"#]+)(?:#[^"]*)?"/g)) {
    const href = m[1];
    if (!href.startsWith(BASE + "/") || /\.(css|js|woff2?|svg|png|webp|ico)$/.test(href)) continue;
    n++;
    if (!pages.has(href)) { bad++; console.log(`${f}: ${href}`); }
  }
}
console.log(`${files.length} pages, ${n} internal links, ${bad} broken`);
if (bad) process.exit(1);
