// The only script every page loads. Each part leaves a working page if it does not run.

// 1. Remember the island (or compare) for the rest of the visit, so shared pages hand the reader back to it.
const KEY = "arc307-view";
const VIEWS = ["male", "villimale", "hulhumale", "compare"];
const here = document.documentElement.dataset.view ?? "shared";
let view = "male";
try {
  if (VIEWS.includes(here)) sessionStorage.setItem(KEY, here);
  view = sessionStorage.getItem(KEY) ?? "male";
} catch {
  // storage blocked: links keep their default, Malé, the first island in the book
}
if (!VIEWS.includes(view)) view = "male";

// Links that depend on the remembered island carry one address per view: data-href-male, data-href-compare...
const cap = view[0].toUpperCase() + view.slice(1);
document.querySelectorAll<HTMLAnchorElement>("a[data-href-male]").forEach((a) => {
  const href = a.dataset[`href${cap}`];
  if (href) a.href = href;
  const label = a.querySelector<HTMLElement>("[data-view-label]");
  const name = a.dataset[`label${cap}`];
  if (label && name) {
    label.textContent = name;
    label.dataset.island = view;
  }
});

// 2. Island switcher: left and right arrows move between the names.
document.querySelectorAll<HTMLElement>("[data-switcher]").forEach((nav) => {
  const links = [...nav.querySelectorAll<HTMLAnchorElement>("a")];
  nav.addEventListener("keydown", (e) => {
    const i = links.indexOf(document.activeElement as HTMLAnchorElement);
    if (i < 0 || (e.key !== "ArrowLeft" && e.key !== "ArrowRight")) return;
    e.preventDefault();
    links[(i + (e.key === "ArrowRight" ? 1 : links.length - 1)) % links.length].focus();
  });
});

// 3. Figure viewer: a figure's button opens its picture in a full-window dialog. Esc closes (the browser does that).
document.querySelectorAll<HTMLButtonElement>("[data-figure-open]").forEach((button) => {
  const dialog = document.getElementById(button.dataset.figureOpen!) as HTMLDialogElement | null;
  if (!dialog?.showModal) return;
  button.addEventListener("click", () => dialog.showModal());
  dialog.querySelector("[data-figure-close]")?.addEventListener("click", () => dialog.close());
  dialog.addEventListener("click", (e) => {
    if (e.target === dialog) dialog.close();
  });
});

// 4. Glossary terms: Esc puts the meaning away.
document.addEventListener("keydown", (e) => {
  if (e.key === "Escape" && document.activeElement instanceof HTMLElement && document.activeElement.matches("[data-term]")) {
    document.activeElement.blur();
  }
});

// 5. The "Sections" sheet on a phone closes when a section is chosen or Esc is pressed.
document.querySelectorAll<HTMLDetailsElement>("details[data-sheet]").forEach((sheet) => {
  sheet.addEventListener("keydown", (e) => {
    if (e.key === "Escape") {
      sheet.open = false;
      sheet.querySelector("summary")?.focus();
    }
  });
});
