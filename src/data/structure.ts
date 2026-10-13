// The shape of the book, and so of the site: three chapters down, three islands across, with shared pages at the
// start and end of each chapter (guides/WEB_DESIGN_GUIDE.md, part 2). Every address is made here. Slugs never change
// once published; section numbers are shown on the page, not in the address.

export type IslandKey = "male" | "villimale" | "hulhumale";
export type View = IslandKey | "compare";

export interface Island {
  key: IslandKey;
  name: string;
  letter: string; // follows figure numbers on island pages: Figure 1.3.1M
  plan: string; // the masterplan's name
}

export interface Section {
  num: string;
  slug: string;
  title: string;
  short: string; // for the section rail
  shared?: boolean; // one page for all three islands
}

export interface Chapter {
  num: string;
  slug: string;
  title: string;
  holds: string; // one line for the home grid
  tagline: string; // from the chapter's cover in the book
  opening: string[];
  long?: boolean; // its per-island sections sit on one long page per island (and one for compare)
  sections: Section[];
}

export interface Page {
  chapter: Chapter;
  section: Section;
  href: string;
}

export const SITE = {
  title: "Greater Malé Region",
  subtitle: "Site Analysis and Masterplans",
  // No student is named on the site (design guide, part 12).
  credit: "Design VI, 2026 · BAAD students, FEST, Maldives National University",
};

export const ISLANDS: Island[] = [
  { key: "male", name: "Malé", letter: "M", plan: "Fahi-Malé" },
  { key: "villimale", name: "Villimalé", letter: "V", plan: "Villi-Veshi" },
  { key: "hulhumale", name: "Hulhumalé", letter: "H", plan: "Hiyaa-Vehi" },
];

export const VIEWS: View[] = ["male", "villimale", "hulhumale", "compare"];

export const CHAPTERS: Chapter[] = [
  {
    num: "01",
    slug: "macro-analysis",
    long: true,
    title: "Macro analysis",
    holds: "Each island as a whole: history, climate, people, form, movement, open space.",
    tagline: "The islands as they are.",
    opening: [
      "This chapter reads each island as a whole, before any area is chosen. It opens with the Greater Malé Region, the one setting the three islands share, and then follows Malé, Villimalé and Hulhumalé in turn.",
      "Each island is taken through the same topics, from its history and climate to its streets and public space. It draws on published sources: the Rethink Malé StoryMap, the HDC’s plans for Hulhumalé, the 2022 census, Google Maps and Wikipedia, all listed in the references.",
    ],
    sections: [
      { num: "1.1", slug: "regional-context", title: "Regional context", short: "Regional context", shared: true },
      { num: "1.2", slug: "island-introduction", title: "Island introduction", short: "Introduction" },
      { num: "1.3", slug: "history-and-culture", title: "History and culture", short: "History and culture" },
      { num: "1.4", slug: "environment-and-climate", title: "Environment and climate", short: "Environment" },
      { num: "1.5", slug: "population", title: "Population and demographics", short: "Population" },
      { num: "1.6", slug: "urban-form", title: "Urban form and built environment", short: "Urban form" },
      { num: "1.7", slug: "movement", title: "Movement and mobility", short: "Movement" },
      { num: "1.8", slug: "public-and-open-space", title: "Public and open space", short: "Open space" },
      { num: "1.9", slug: "three-islands-side-by-side", title: "Three islands, side by side", short: "Side by side", shared: true },
    ],
  },
  {
    num: "02",
    slug: "toolkit",
    title: "Toolkit",
    holds: "One study area per island, measured with the same six toolkits and tested against five ideas.",
    tagline: "The islands, measured.",
    opening: [
      "This chapter moves from the whole island to one walkable area on each. It begins with the area each group chose, why, and the problems found by walking it.",
      "It then sets out the shared toolkit: six field instruments, drawn from three texts on public life and used in the same way on all three islands. What they recorded is read as five themes, each shown island by island and then compared. The chapter closes with what we found, and what each masterplan in Chapter 03 has to answer.",
    ],
    sections: [
      { num: "2.1", slug: "site-selection-and-diagnosis", title: "Site selection and diagnosis", short: "Site and diagnosis" },
      { num: "2.2", slug: "the-toolkit", title: "The toolkit", short: "The toolkit", shared: true },
      { num: "2.3", slug: "theme-1-streets", title: "Theme 1: Roads are made for movement, not staying", short: "Theme 1 Streets" },
      { num: "2.4", slug: "theme-2-shade", title: "Theme 2: Shade dictates movement, not distance", short: "Theme 2 Shade" },
      { num: "2.5", slug: "theme-3-built-form", title: "Theme 3: Built form vs public life", short: "Theme 3 Built form" },
      { num: "2.6", slug: "theme-4-density", title: "Theme 4: Density is not the problem, poor design is", short: "Theme 4 Density" },
      { num: "2.7", slug: "theme-5-vehicles", title: "Theme 5: Vehicles take more open space", short: "Theme 5 Vehicles" },
      { num: "2.8", slug: "what-we-found", title: "What we found", short: "What we found", shared: true },
    ],
  },
  {
    num: "03",
    slug: "masterplan",
    long: true,
    title: "Masterplan",
    holds: "What each group proposes for its study area, layer by layer.",
    tagline: "The islands, redrawn.",
    opening: [
      "This chapter proposes a masterplan for each of the three areas: Fahi-Malé, Villi-Veshi and Hiyaa-Vehi.",
      "Each plan decides what to rebuild and what to keep. In Malé, the port land is rebuilt and the old lanes beside it are repaired. In Villimalé, an idle industrial corner is rebuilt and the island around it is touched lightly. In Hulhumalé, a block of identical towers is rethought. Every plan is told in the same order, from its vision to its rules.",
    ],
    sections: [
      { num: "3.0", slug: "how-to-read-this-chapter", title: "How to read this chapter", short: "How to read", shared: true },
      { num: "3.1", slug: "vision", title: "Vision", short: "Vision" },
      { num: "3.2", slug: "parti", title: "Parti", short: "Parti" },
      { num: "3.3", slug: "existing-conditions", title: "Existing conditions", short: "Existing" },
      { num: "3.4", slug: "movement-network", title: "Movement network", short: "Movement" },
      { num: "3.5", slug: "public-and-green-space", title: "Public and green space", short: "Public and green" },
      { num: "3.6", slug: "non-residential", title: "Non-residential", short: "Non-residential" },
      { num: "3.7", slug: "residential", title: "Residential", short: "Residential" },
      { num: "3.8", slug: "masterplan", title: "Masterplan", short: "Masterplan" },
      { num: "3.9", slug: "policy-and-guidelines", title: "Policy and guidelines", short: "Policy" },
      { num: "3.10", slug: "three-masterplans-side-by-side", title: "Three masterplans, side by side", short: "Side by side", shared: true },
    ],
  },
];

// Pages outside the three-by-three grid. "About" holds what the book's front matter held; "Reflections" is the
// book's chapter 04; "Reference" is its back matter.
export const EXTRA = {
  about: { slug: "about", title: "About this book" },
  reflections: { slug: "reflections", title: "Reflections", num: "04" },
  reference: { slug: "reference", title: "Reference" },
  styleguide: { slug: "styleguide", title: "Style guide" },
};

export const ABOUT_PARTS = [
  { id: "the-book", title: "The book", from: "Publication information" },
  { id: "editors-introduction", title: "Editor's introduction", from: "Editor's introduction" },
  { id: "how-to-read", title: "How to read", from: "How to read this book" },
  { id: "methodology", title: "Methodology", from: "Methodology" },
  { id: "the-three-groups", title: "The three groups", from: "Group pages, without names or photographs" },
  { id: "acknowledgements", title: "Acknowledgements", from: "Acknowledgements" },
];

export const REFERENCE_PARTS = [
  { slug: "glossary", title: "Glossary" },
  { slug: "toolkit-data", title: "Toolkit data" },
  { slug: "references", title: "References" },
  { slug: "figures-and-tables", title: "Figures and tables" },
];

const BASE = import.meta.env.BASE_URL.replace(/\/$/, "");
/** A site path with the repository's base in front (GitHub Pages serves the site under /<repository>/). */
export const url = (path: string) => `${BASE}${path}`;

export const island = (key: IslandKey) => ISLANDS.find((i) => i.key === key)!;
export const isIsland = (v: string | null | undefined): v is IslandKey => ISLANDS.some((i) => i.key === v);
export const viewName = (v: View) => (v === "compare" ? "Compare" : island(v).name);

/** A long chapter's page for one island, or for compare. */
export const longHref = (ch: Chapter, view: View) => url(`/${ch.slug}/${view}/`);

export function sectionHref(ch: Chapter, s: Section, view: View): string {
  if (s.shared) return url(`/${ch.slug}/${s.slug}/`);
  return ch.long ? `${longHref(ch, view)}#${s.slug}` : url(`/${ch.slug}/${s.slug}/${view}/`);
}

/** The book's reading order for one island (or for compare): every section of every chapter, shared pages included. */
export function sequence(view: View): Page[] {
  return CHAPTERS.flatMap((chapter) =>
    chapter.sections.map((section) => ({ chapter, section, href: sectionHref(chapter, section, view) }))
  );
}

export function neighbours(chSlug: string, sSlug: string, view: View): { prev?: Page; next?: Page } {
  const seq = sequence(view);
  const i = seq.findIndex((p) => p.chapter.slug === chSlug && p.section.slug === sSlug);
  return { prev: seq[i - 1], next: seq[i + 1] };
}

/** From a shared page, where an island's name leads: the next per-island section, or the one before if none follows. */
export function nearestIslandPage(chSlug: string, sSlug: string | null, view: View): Page {
  const seq = sequence(view);
  const from = sSlug
    ? seq.findIndex((p) => p.chapter.slug === chSlug && p.section.slug === sSlug)
    : seq.findIndex((p) => p.chapter.slug === chSlug);
  const after = seq.slice(Math.max(from, 0)).find((p) => !p.section.shared);
  return after ?? [...seq.slice(0, from)].reverse().find((p) => !p.section.shared)!;
}

export function firstIslandPage(ch: Chapter, view: View): Page {
  const section = ch.sections.find((s) => !s.shared)!;
  return { chapter: ch, section, href: sectionHref(ch, section, view) };
}

/** The same section on each island and in compare: what the island switcher links to. */
export function switcherTargets(ch: Chapter, s: Section | null): Record<View, string> {
  const out = {} as Record<View, string>;
  for (const v of VIEWS) {
    out[v] = s && !s.shared ? sectionHref(ch, s, v) : nearestIslandPage(ch.slug, s?.slug ?? null, v).href;
  }
  return out;
}
