// Book content that has been exported for the site (book/export_web_ch02.py in the Book folder): chapters 01, 02 and 03. A section with no
// exported pages still shows the empty page pattern.
import index01 from "../content/01/index.json";
import index02 from "../content/02/index.json";
import index03 from "../content/03/index.json";

const files = import.meta.glob("../content/*/[0-9]*.json", { eager: true }) as Record<string, { default: BookPageData }>;

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
