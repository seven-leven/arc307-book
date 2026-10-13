// After a build: every internal link in dist/ must lead to a page that exists. Run: deno task check-links
const BASE = "/arc307-book";
const pages = new Set<string>();
const files: string[] = [];
async function walk(dir: string) {
  for await (const e of Deno.readDir(dir)) {
    const p = `${dir}/${e.name}`;
    if (e.isDirectory) await walk(p);
    else if (e.name.endsWith(".html")) files.push(p);
  }
}
await walk("dist");
for (const f of files) pages.add(BASE + f.slice(4).replace(/index\.html$/, "").replace(/\.html$/, "/"));
let bad = 0, n = 0;
for (const f of files) {
  const html = await Deno.readTextFile(f);
  for (const m of html.matchAll(/(?:href|data-href-[a-z]+)="([^"#]+)(?:#[^"]*)?"/g)) {
    const href = m[1];
    if (!href.startsWith(BASE + "/") || /\.(css|js|woff2?|svg|png|webp|ico)$/.test(href)) continue;
    n++;
    if (!pages.has(href)) { bad++; console.log(`${f}: ${href}`); }
  }
}
console.log(`${files.length} pages, ${n} internal links, ${bad} broken`);
if (bad) Deno.exit(1);
