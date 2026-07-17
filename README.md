# Tectigon Portfolio Starter

A small multi-page site: home, about, services, portfolio, team, and contact.

## Structure

```
index.html
css/
  style.css        core styles (colors, type, layout, components)
  responsive.css   breakpoints + mobile nav
js/
  script.js        shared nav toggle behavior
pages/
  about.html
  services.html
  team.html
  contact.html
  portfolio.html          portfolio hub — links out to 5 category pages
  portfolio/
    websites-webapps.html
    android-apps.html
    ios-apps.html
    software-integrations.html
    softwares.html
```

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
