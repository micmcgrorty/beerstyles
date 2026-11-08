# BJCP Beer Styles

A reference for every beer style in the BJCP 2015 Style Guidelines, built as a React single-page app. Browse, search and filter the styles, compare their colour and bitterness on charts, and read the full guideline for each one.

Live at [beer.micmcgrorty.dev](https://beer.micmcgrorty.dev).

## Pages

- `/` lists every style, grouped by BJCP category. Search by name, code, category, description or commercial example (accents optional, so "kolsch" finds Kölsch), filter by type (pale lagers, IPAs, sours…) and sort by name, ABV, IBU or SRM.
- `/colour` charts each style's colour range on the SRM scale, against the beer colour spectrum.
- `/bitterness` charts each style's bitterness range in IBUs.
- `/styles/:slug` shows one style's full guideline: vital statistics, colour and bitterness bars, aroma, flavour, history, commercial examples, links to similar styles, and previous/next styles.

Search, filters and sort live in the URL query string (`?q=stout&group=porters-stouts&sort=abv`), so every view has a URL you can share, and back and forward work as expected. Unknown URLs show a not-found page with a real 404 status.

## Stack

- React 19 and React Router 8 (data mode), in TypeScript
- CSS modules, with design tokens as CSS custom properties for light and dark themes
- [Vite+](https://viteplus.dev): Vite for dev and build, Vitest for unit tests, Oxlint and Oxfmt for linting and formatting
- Playwright for end-to-end tests on desktop and mobile Chromium
- GitHub Actions for CI, and Netlify for hosting and deploy previews

## How it works

- **The URL is the state.** Pages read their search, filter and sort from the query string, and the filter form submits with `GET` (React Router's `<Form>`), so nothing about a view is lost on reload or when shared.
- **Long text loads on demand.** The catalogue (names, stats, tags) is bundled, because the list, search and charts need all of it up front. Each style's guideline text is its own small chunk, loaded by the style page's route `loader`.
- **Each thing is defined once.** Every vital statistic (its label, format, unit, sort option and scale) is one entry in `STATS`; every chart is one entry in `CHARTS`; and the route table drives the router, the main nav and Netlify's routing rules. Adding an ABV chart, for example, means giving ABV a scale and a chart entry, and the compiler and tests point to anything missed.
- **The guidelines edition is swappable.** Everything specific to BJCP 2015 (its name, data, group rules and guideline sections) sits behind an `Edition` interface. The rest of the app reads styles through a catalogue built from it, so moving to the 2021 guidelines means writing a new edition, not editing pages.
- **Real 404s from a static host.** At build time, a Vite plugin writes Netlify's `_redirects` from the route table and the catalogue: every page and style URL serves the app with 200, and anything else serves it with 404.

## Project layout

`src/` is organised by feature:

```text
src/
├── app/          entry, router, route table and links, Netlify redirects, layout, design tokens
├── catalogue/    the BJCP data and everything computed from it: editions, stats, search and sort, the URL query, colours
├── browse/       the style list
├── charts/       the chart definitions, chart page and range chart
├── search/       the URL-driven search and filters shared by the list and the charts
├── style-guide/  a single style's page
└── ui/           components shared by several features
```

`e2e/` holds the Playwright tests. The style data is in `src/catalogue/bjcp-2015/`, which has its own README.

## Commands

```sh
npm i
npm run dev          # dev server with HMR
npm run build        # production build in dist/
npm run preview      # serve the build on port 4173
npm run check        # format, lint and type check
npm run fix          # format and apply lint fixes
npm test             # unit tests
npm run test:watch   # unit tests in watch mode
npm run test:e2e     # end-to-end tests (builds and serves the app first)
```

Requires Node 24.3 or later. Before the first `npm run test:e2e`, install the browser with `npx playwright install chromium`.

## Testing

- **Unit tests** (Vitest) cover the catalogue, stats, query and routing. Catalogue behaviour is tested against a small fake edition, so those tests don't depend on any edition's data; checks specific to the 2015 data sit beside it.
- **End-to-end tests** (Playwright) cover the main user flows on desktop and mobile. They locate elements by role and label and read expected values from the page, so they don't depend on markup details or on the style data.
- **CI** runs the format, lint and type checks, unit tests, a production build and the end-to-end tests on every pull request.
- **Deploy previews:** for each pull request, CI waits for Netlify's preview of that commit, checks that pages return 200 and unknown URLs return 404, then runs the end-to-end tests against it.

To run the end-to-end tests against any deployed site, set `E2E_BASE_URL`, for example to `https://beer.micmcgrorty.dev`.

## Data

The style text and vital statistics come from the [BJCP 2015 Beer Style Guidelines](https://www.bjcp.org/beer-styles/), © Beer Judge Certification Program. These corrections were made to the original dataset:

- ABV for International Pale Lager (4.6–6.0%), British Golden Ale (3.8–5.0%) and Australian Sparkling Ale (4.5–6.0%) now matches the published guidelines.
- Lost hyphens and spaces (for example "lightbodied") and dropped letters ("imilar", "tronger") are restored.
- Tags are normalised.
