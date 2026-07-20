# Tectigon Portfolio Starter

A small multi-page site: home, about, services, portfolio, team, and contact.

## Structure

index.html
css/
style.css core styles (colors, type, layout, components)
responsive.css breakpoints + mobile nav
js/
script.js nav toggle, scroll reveal, counters, back-to-top, progress bar
pages/
about.html
services.html
team.html
contact.html
portfolio.html portfolio hub — links out to 5 category pages
portfolio/
websites-webapps.html
android-apps.html
ios-apps.html
software-integrations.html
softwares.html


## Portfolio subpages

`pages/portfolio.html` is the hub page and links to five category pages under
`pages/portfolio/`:

- Websites & web apps
- Android apps
- iOS apps
- Software integrations
- Softwares

Each category page has the same layout: a header/intro, a grid of project
cards, and a back link to the hub. Right now each page has one sample project
card plus an empty-state card — replace these with real project cards as work
gets added. To add a project, copy the `.project-card` block in any category
page and fill in the thumbnail label, title, description, and tags.

## Notes

- All pages share one nav bar (`.site-nav`) and footer (`.site-footer`) for consistency.
- Palette and type tokens live at the top of `css/style.css` as CSS variables — change them there to re-theme the whole site.

## Recent fixes

- Every page's `<script>` tag was malformed (`<scriptsrc="...">`, no closing tag, broken paths), so `script.js` never actually loaded anywhere. This silently broke the mobile nav toggle, scroll-reveal animations, the animated counters, the progress bar, and the back-to-top button. All 11 pages now load `script.js` correctly.
- Removed an unused `lucide` icon script include and 6 orphaned `<i data-lucide>` tags that weren't wired into any layout.
- Removed a stray empty `<section class="services reveal"></section>` that had been left at the top of `<body>` on several pages.

## Known open issues

- `assets/team/`, `assets/hero/`, `assets/portfolio/`, and `assets/logo/` are empty — team photos and portfolio project screenshots referenced in `team.html` and the portfolio subpages are currently broken links.
- `responsive.css` has duplicated media query blocks, and nav/hamburger rules are defined redundantly in both `style.css` and `responsive.css` — worth consolidating into one breakpoint system.