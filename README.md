# Greater Malé Region: web edition

The website of the ARC307 class book on Malé, Villimalé and Hulhumalé. The print book is the source of truth; this is a second way to read it. What the site should look like and how it should behave is in `guides/WEB_DESIGN_GUIDE.md` (in the Book folder, one level up); the order of work is in `guides/WEB_ROADMAP.md`.

**State (13 October 2026): the skeleton.** Styles, components and every address exist. No book content is in yet: pages show tinted slots where drawings and text will go.

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
| `src/pages/` | Home grid, chapter openings, shared sections, island sections and compare, About, Reflections, Reference, style guide. |
| `src/scripts/site.ts` | The only script: remembers the island, arrow keys on the switcher, the figure viewer. |
| `astro.config.mjs` | The site's address. The repository name is part of it (`BASE`). |

## Addresses

Chapter, section, island: `/masterplan/public-and-green-space/hulhumale/`. `compare` in place of the island shows all three. Shared pages have no island part: `/toolkit/what-we-found/`. Addresses do not change once published.

## Rules that already apply

- No student is named, and no student ID or photograph is shown. The credit line is "Design VI, 2026 · BAAD students, FEST, Maldives National University".
- Only tokens for colour; only the eight text styles.
- Islands, layers and verdicts are never told apart by colour alone.
- Toolkit data is shown as tables, not offered as downloads.
- Nothing is published until the editor runs the "Publish to GitHub Pages" workflow by hand.

## Decided

- Generator: Astro, run with Deno (Vite underneath).
- Fallback font: Jost (SIL Open Font Licence), served from the site itself. Readers with Century Gothic installed see Century Gothic.
- Hosting: GitHub Pages.
