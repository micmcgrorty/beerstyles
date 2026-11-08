# BJCP Beer Styles

A reference for every beer style in the BJCP 2015 Style Guidelines, built with React, React Router and Vite+. It lets you browse, search and filter the styles, compare their colour and bitterness on charts, and read the full guideline for each style.

Live at [beer.micmcgrorty.dev](https://beer.micmcgrorty.dev).

## Pages

- `/` lists every style, grouped by BJCP category. Search, filter by type (pale lagers, IPAs, sours…) and sort by name, ABV, IBU or SRM.
- `/colour` charts each style's SRM range against the beer colour spectrum.
- `/bitterness` charts each style's IBU range.
- `/styles/:slug` shows the full guideline for one style: stats, colour and bitterness bars, aroma, flavour, history, commercial examples and more.

Search, filters and sort live in the URL query string (`?q=stout&group=porters-stouts&sort=abv`), so every filtered view has a URL you can share.

## Stack

- React 19 and React Router 8 (data mode), as a single-page app
- CSS modules, with design tokens as CSS custom properties for light and dark themes
- [Vite+](https://viteplus.dev): Vite for dev and build, Vitest for unit tests, Oxlint and Oxfmt for linting and formatting
- Playwright for end-to-end tests on desktop and mobile Chromium
- GitHub Actions CI

## Shape

- `src/router.tsx` defines the routes. `src/paths.ts` builds every internal URL.
- `src/pages/` holds one component per route, each with a CSS module.
- `src/ui/` holds shared UI: the layout (header, nav, footer), filters, range chart and stat list.
- `src/styles/global.css` holds the design tokens (light and dark).
- `src/data/bjcp-2015.ts` is the style data. `src/data/styles.ts` parses the stats and handles search, filter and sort. `src/data/srm.ts` maps SRM values to colours.
- `e2e/` holds the Playwright tests.

## Commands

```sh
npm i
npm run dev        # dev server with HMR
npm run build      # production build in dist/
npm run preview    # serve the build on port 4173
npm run check      # format, lint and type check
npm test           # unit tests
npm run test:e2e   # end-to-end tests (builds and serves the app first)
```

Requires Node 24.3 or later. Before the first `npm run test:e2e`, install the browser with `npx playwright install chromium`.

## Data

The style text and vital statistics come from the [BJCP 2015 Beer Style Guidelines](https://www.bjcp.org/beer-styles/), © Beer Judge Certification Program. These corrections were made to the original dataset:

- ABV for International Pale Lager (4.6–6.0%), British Golden Ale (3.8–5.0%) and Australian Sparkling Ale (4.5–6.0%) now matches the published guidelines.
- Lost hyphens and spaces (for example "lightbodied") and dropped letters ("imilar", "tronger") are restored.
- Tags are normalised.
