# Beer Styles Agent Guide

A React single-page app built with Vite+ (the `vp` CLI: Vite, Vitest, Oxlint, Oxfmt). React Router in data mode handles routing. Vite+ ships its docs at `node_modules/vite-plus/docs`, and React Router at `node_modules/react-router/docs`.

## Commands

```sh
npm i
npm run dev        # vp dev
npm run build      # vp build → dist/
npm run preview    # vp preview, serves dist/ on port 4173
npm run check      # vp check: format, lint and type check
npm run fix        # vp check --fix: format and apply lint fixes
npm test           # Vitest unit tests in src/
npm run test:e2e   # Playwright suite in e2e/
```

Run `npm run check` and `npm test` before committing. `check` must pass with no warnings. Lint, format and test settings live in `vite.config.ts` (`lint`, `fmt` and `test` blocks); there are no separate `.oxlintrc` or `.oxfmtrc` files.

`npm run test:e2e` builds the app, serves it with `vp preview` on port 4173, and runs on desktop and mobile Chromium. Set `E2E_BASE_URL` to run it against a deployed site instead. Install the browser once with `npx playwright install chromium`.

npm scripts must not use `&&` or inline env vars, because they need to run under any `script-shell`, including Windows PowerShell.

`package.json` `overrides` alias `vite` to the Vite+ core and pin `vitest` to the version Vite+ bundles. Keep them in step with the `vite-plus` version when upgrading.

## Deploying

Netlify builds and hosts the site (`netlify.toml`): `npm run build` publishes `dist/`, and the build writes the commit SHA to `/version.txt`. Routing rules are generated into `dist/_redirects` by a Vite plugin (`src/app/redirects.ts`) from the route table: every URL of every route (including each style slug in the catalogue) serves `index.html` with 200, and anything else serves it with 404. `vp preview` ignores `_redirects`, so status codes are only checked on deploy previews. Each PR gets a deploy preview, and the "Deploy preview" workflow waits for the preview to serve the PR's commit, then runs the e2e suite against it. It needs the repository variable `NETLIFY_SITE_NAME`.

## Layout

`src/` is organised by feature. Code used by one feature lives in that feature's folder; code used by several lives in `ui/` (components) or `catalogue/` (data and logic). Each component has its CSS module beside it, and tests sit beside the code they test.

- `app/`: the shell. `main.tsx` mounts the app, `routes.ts` is the route table: every page's path, nav label and concrete URLs, plus `paths` for building links (use it instead of hand-writing paths). `router.tsx` attaches a page to each route, `redirects.ts` generates Netlify's routing rules from the table, `layout.tsx` is the header, nav, footer and `PageMeta`, `not-found-page.tsx`, and `global.css` holds the design tokens (light and dark) and base element styles.
- `catalogue/`: the style data and everything computed from it, with no React. `catalogue.ts` defines an `Edition` (everything specific to one edition of the guidelines: name, data, group rules, guideline sections and loader) and `createCatalogue(edition)`, which builds the styles and searches them (`searchStyles`). `bjcp-2015/edition.ts` is the 2015 edition (data in `bjcp-2015/`, see its README). `styles.ts` is the catalogue the app shows, built from that edition. `query.ts` holds browsing groups, sort options and the URL query: its defaults (`DEFAULT_QUERY`, written once), parsing and links, `isFiltered`/`clearFilters`, and what the filter form needs (`formKey` to reset its inputs, `hiddenFields` for params it has no input for). Adding a query param means changing `query.ts`, not the form. `stats.ts` defines every vital statistic once in `STATS` (label, abbreviation, format, unit, whether it's sortable, and its scale if it's charted) and parses and formats them. `colours.ts` holds the SRM and IBU colour maths.
- `browse/`: the home page and its style cards.
- `charts/`: `charts.ts` defines one chart per charted stat (path and copy, plain data), plus the chart page and the range chart.
- `search/`: the URL-driven search shared by browse and charts. `useStyleSearch` is the one way a page reads its search: the query from the URL, the results already laid out as sections, and `linkTo(changes)` for links that change the query. Pages render `sections` and never decide grouping themselves. `StyleFilters` and `EmptyResults` take its result as their only prop.
- `style-guide/`: the style page and its route `loader`.
- `ui/`: components used by more than one feature: `StatList`, `RangeTrack` (charts and style page), `ResultSections` (search results as category sections or one flat list; pages pass how to draw a list), and `theme.module.css` for shared classes such as `pageTitle` and `pill`.
- Root `public/` contains static files served unchanged from the app root.

## Conventions

- Search, filter and sort are `GET` query params parsed by `parseQuery` and built with `queryHref`. Every filtered view must have a shareable URL. The filter form is a React Router `<Form method="get">`.
- To change how a stat is labelled, formatted, sorted or charted, edit its entry in `STATS`; don't hard-code stat names, units or labels in components. Giving a stat a `scale` charts it and adds its bar to every style page; add it to `CHARTED_STATS` (tests enforce this) and add its chart to `CHARTS` in `charts/charts.ts` (path and page copy; the compiler requires one). Its route, nav link and `_redirects` line follow, and `paths.chart(stat)` links to it. Keep a scale's maximum in its `STATS` entry only; colour functions in `colours.ts` take a 0–1 position or an SRM value, not a stat's range.
- To add a page (other than a chart), add its id to `RouteId` and `ROUTE_IDS` and a case to `route()` in `app/routes.ts`, and a case to `page()` in `router.tsx`; the nav and `_redirects` follow. A route with params needs `urls()` listing its concrete URLs, or Netlify will 404 them.
- Each page renders a `<PageMeta>` for its title and description. React hoists these into `<head>`.
- Style with CSS modules and the tokens in `global.css` (`var(--bg)`, `var(--accent)` and so on). Use the `style` prop only for per-item values such as bar positions and colours.
- E2E tests are the behaviour contract, so they must not depend on the framework or the data. Locate by role, label and `/styles/:slug` href, never by class or DOM shape. Read expected values from the page, never hard-code BJCP style names, counts or stats, so a data update (BJCP 2021) leaves them green. Don't assert HTTP status codes.
- In e2e tests, the URL changes a moment before React re-renders. Before reading a value off the page after a navigation, wait for a rendered signal (`toBeVisible`, `toHaveAttribute`) or wrap the read in `expect(...).toPass()`.
- Write each e2e test with plain Playwright calls; don't add shared helper modules. Test user flows, not CSS. Accessibility testing is deliberately out of scope for now.
- Pages never name the edition: use `edition.name` from `styles.ts` for copy and `edition.sections` for guideline headings. Write edition-specific copy as one string (`{`${edition.name} …`}`), not JSX text around `{edition.name}`; splitting text nodes shifts text rendering. To move to a new edition, write a new `Edition` (with its own tests, like `bjcp-2015/edition.test.ts`) and build `styles.ts` from it. Catalogue behaviour is tested with a small fake edition in `catalogue.test.ts`, so those tests don't depend on any edition's data.
- Style data is split in two: `bjcp-2015/catalogue.json` (bundled; everything the list, search and charts need) and `bjcp-2015/guidelines/<slug>.json` (long-form text, loaded on demand by the style route's `loader`). Don't import guideline text anywhere that runs on the list or chart pages, or it lands back in the main bundle. Note data corrections in `src/catalogue/bjcp-2015/README.md`.
