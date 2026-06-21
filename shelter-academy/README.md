# Shelter Academy

A static training site: governance, risk assessment, incident response, and
technology-security modules for organizations that run shelters.

## Structure

```
shelter-academy/
├── index.html                          Home page
├── about.html                          About page
├── academy/
│   ├── governance.html                 MOD-01
│   ├── risk-assessment.html            MOD-02
│   ├── risk-response-reporting.html    MOD-03
│   └── technology-security.html        MOD-04
├── css/style.css                       All styles (one file, CSS variables at the top)
├── js/main.js                          Mobile nav, Academy dropdown, active-link highlight, scroll reveal
└── assets/images/                      Drop a logo / favicon / og-image here
```

No build step, no framework, no dependencies beyond two Google Fonts loaded
via CDN link in each page's `<head>`. Open `index.html` directly in a
browser, or serve the folder with any static host (Netlify, GitHub Pages,
S3, etc.) — just upload the whole folder as-is.

## Customizing

- **Brand / colors / fonts** — all defined as CSS variables at the top of
  `css/style.css` under `:root`. Change them once, they apply everywhere.
- **Logo** — replace the "SA" text badge in the `.brand-mark` markup (it
  appears in the header and footer of every page) with an `<img>` once you
  have a logo file in `assets/images/`.
- **Adding a fifth module** — copy any file in `academy/`, update its
  content, then add a link to it in the `.dropdown-menu` block in the
  `<header>` of all 6 HTML files, plus the module card on `index.html` and
  the footer link list on all 6 files.
- **Content** — every module's text is real, usable training content, not
  placeholder text — edit directly in each `academy/*.html` file inside the
  `<article class="module-content">` block.

## Notes

- The site is fully static — there's no backend, login, or progress
  tracking. The checklists on each module page are plain checkboxes for
  on-screen use; they don't persist after the page is closed.
- Navigation, footer, and `<head>` font links are duplicated across all 6
  pages (no templating engine). If you outgrow that, the structure maps
  cleanly onto a static site generator (Eleventy, Astro, Jekyll) later —
  each HTML file becomes a template with the repeated header/footer pulled
  into a shared partial.
