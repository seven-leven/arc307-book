// Book content that has been exported for the site (book/export_web_ch02.py in the Book folder): chapters 01, 02 and 03. A section with no
// exported pages still shows the empty page pattern.
import { url } from "./structure";
import index01 from "../book/01/index.json";
import index02 from "../book/02/index.json";
import index03 from "../book/03/index.json";

const files = import.meta.glob("../book/*/[0-9]*.json", { eager: true }) as Record<string, { default: BookPageData }>;

export interface BookPageData {
  folio: number;
  type?: "sheet" | "comparison" | "found";
  claim: string | null;
  [key: string]: unknown;
}

const byFolio = new Map<number, BookPageData>(Object.values(files).map((m) => [m.default.folio, m.default]));
const INDEX: Record<string, Record<string, Record<string, number[]>>> = { "macro-analysis": index01, toolkit: index02, masterplan: index03 };

/** The book pages that make up a section for one view ("male", "compare", or "shared"), in order; empty if none. */
export function bookPages(chapter: string, section: string, view: string): BookPageData[] {
  const folios = INDEX[chapter]?.[section]?.[view] ?? [];
  return folios.map((f) => byFolio.get(f)).filter((p): p is BookPageData => !!p);
}

/** The address of the section a book page belongs to, for the lists of figures and tables; null if it is not on the site. */
export function folioHref(folio: number): string | null {
  for (const [chapter, sections] of Object.entries(INDEX)) {
    for (const [section, views] of Object.entries(sections)) {
      for (const [view, folios] of Object.entries(views)) {
        if (folios.includes(folio) || (folio === 127 && folios.includes(126))) {
          return url(view === "shared" ? `/${chapter}/${section}/` : `/${chapter}/${section}/${view}/`);
        }
      }
    }
  }
  return null;
}
