# Sudhanshu --- Portfolio

A small multi-page portfolio built on top of the original glass-hero
landing page: **Home** (the interactive reveal hero), **About**,
**Projects**, **Resume**, and **Contact** — all sharing one visual
language.

## Run it

```bash
npm install
npm run dev
```

Open the local URL Vite prints (usually http://localhost:5173).

## Structure

```
src/
  App.tsx                 routes + global entrance trigger
  main.tsx                entry point, wraps App in BrowserRouter
  index.css                design tokens, hero mask, entrance keyframes
  lib/
    theme.ts               shared constants (edge spacing, nav offset, CTA link)
  data/
    resume.ts               structured content pulled from the résumé
  components/
    SiteNav.tsx             fixed nav, shared across every page
    PageShell.tsx            eyebrow/title/grid wrapper for inner pages
    GlassHero.tsx             the interactive reveal hero (home only)
  pages/
    Home.tsx
    About.tsx
    Projects.tsx
    Resume.tsx
    Contact.tsx
public/
  images/Base_image_desktop.png
  images/Reveal_image_desktop.png
  resume.pdf                downloadable from the Resume page
```
## Content

All résumé content (summary, skills, experience, projects, education,
contact details) lives in `src/data/resume.ts` as one typed source of
truth — edit it there rather than in the page components.

## Notes

- `Resume.tsx` links to `/resume.pdf` for direct download; swap that
  file if the résumé changes.
- The nav's "Let's talk" CTA and the hero's secondary CTA both point
  to the Topmate scheduling link in `src/lib/theme.ts`.
