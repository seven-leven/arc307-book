# Greater Malé Region: web edition

**Live site: https://seven-leven.github.io/arc307-book/**

The website of the ARC307 class book on Malé, Villimalé and Hulhumalé. The print book is the source of truth; this is a second way to read it. What the site should look like and how it should behave is in `guides/WEB_DESIGN_GUIDE.md` (in the Book folder, one level up); the order of work is in `guides/WEB_ROADMAP.md`.

**State (13 October 2026):** Chapters 01 to 03 and the front and back matter are in, from the book. Chapter pages are pictures of the book page with their text also given as text; the comparison pages, 2.8, About, Reflections and Reference are real web pages. The toolkit data page is still empty.

## Run it

Needs [Deno](https://deno.com) 2.

```bash
deno install
```

```bash
deno task dev
```

Then open `http://localhost:4321/arc307-book/`. Start at `/arc307-book/styleguide/`: it shows every colour, text style and component.

```bash
deno task build
```

```bash
deno task check-links
```

`build` writes the site to `dist/`. `check-links` fails if any internal link leads nowhere.

## What is where

| Path | What |
|---|---|
| `src/data/structure.ts` | The book's shape: islands, chapters, sections, and every address. Change a title or add a section here only. |
| `src/styles/tokens.css` | Colours, sizes, spacing. The book's values. No hex value goes anywhere else. |
| `src/styles/global.css` | Base rules, the eight text styles (`t-title` … `t-small`), the grid. |
| `src/layouts/` | `Base` (top bar, edge strip, footer) and `SectionLayout` (section rail, header, previous and next). |
| `src/components/` | One file per component of the design guide, part 5. `Slot` and `SectionPattern` are scaffolding and go when content arrives. |
| `src/book/` | The book's pages and words, written by `book/export_web_ch02.py` and `book/export_web_matter.py` in the Book folder. Do not edit by hand: change the book, export a PDF, run the scripts. |
| `src/pages/` | Home grid, chapter openings, shared sections, island sections and compare, About, Reflections, Reference, style guide. |
| `src/scripts/site.ts` | The only script: remembers the island, arrow keys on the switcher, the figure viewer. |
| `astro.config.mjs` | The site's address. The repository name is part of it (`BASE`). |

## Addresses

- **Chapters 01 and 03:** one long page per island, and one for compare: `/masterplan/male/`, `/masterplan/compare/`. Each section is an anchor: `/masterplan/male/#vision`. The older per-section addresses (`/masterplan/vision/male/`) forward there.
- **Chapter 02:** a page per section and island: `/toolkit/theme-2-shade/hulhumale/`, with `compare` in place of the island.
- **Shared pages** have no island part: `/toolkit/what-we-found/`.

Addresses do not change once published; when one has to, the old one must forward.

## Rules that already apply

- No student is named, and no student ID or photograph is shown. The credit line is "Design VI, 2026 · BAAD students, FEST, Maldives National University".
- Only tokens for colour; only the eight text styles.
- Islands, layers and verdicts are never told apart by colour alone.
- Toolkit data is shown as tables, not offered as downloads.
- `main` is protected: changes go in through pull requests. Every merge into `main` publishes the site.

## Decided

- Generator: Astro, run with Deno (Vite underneath).
- Fallback font: Jost (SIL Open Font Licence), served from the site itself. Readers with Century Gothic installed see Century Gothic.
- Hosting: GitHub Pages.
