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

Netlify builds and hosts the site (`netlify.toml`): `npm run build` publishes `dist/`, and the build writes the commit SHA to `/version.txt`. Routing rules are generated into `dist/_redirects` by a Vite plugin from `src/app/redirects.ts`: every page (including each style slug in the catalogue) serves `index.html` with 200, and anything else serves it with 404. If you add a route, add it there too. `vp preview` ignores `_redirects`, so status codes are only checked on deploy previews. Each PR gets a deploy preview, and the "Deploy preview" workflow waits for the preview to serve the PR's commit, then runs the e2e suite against it. It needs the repository variable `NETLIFY_SITE_NAME`.

## Layout

`src/` is organised by feature. Code used by one feature lives in that feature's folder; code used by several lives in `ui/` (components) or `catalogue/` (data and logic). Each component has its CSS module beside it, and tests sit beside the code they test.

- `app/`: the shell. `main.tsx` mounts the app, `router.tsx` defines the routes, `paths.ts` builds every internal URL (use it instead of hand-writing paths), `redirects.ts` generates Netlify's routing rules, `layout.tsx` is the header, nav, footer and `PageMeta`, `not-found-page.tsx`, and `global.css` holds the design tokens (light and dark) and base element styles.
- `catalogue/`: the style data and everything computed from it, with no React. `bjcp-2015/` is the data (see its README), `styles.ts` parses, formats and searches it (`searchStyles`), `scales.ts` defines the SRM and IBU scales and colours, and `guidelines.ts` loads a style's text on demand.
- `browse/`: the home page and its style cards.
- `charts/`: the colour and bitterness chart page and the range chart.
- `search/`: the URL-driven search shared by browse and charts. `useStyleSearch` is the one way a page reads its search: the query from the URL, the results already laid out as sections, and `linkTo(changes)` for links that change the query. Pages render `sections` and never decide grouping themselves. `StyleFilters` and `EmptyResults` take its result as their only prop.
- `style-guide/`: the style page and its route `loader`.
- `ui/`: components used by more than one feature: `StatList`, `RangeTrack` (charts and style page), and `theme.module.css` for shared classes such as `pageTitle` and `pill`.
- Root `public/` contains static files served unchanged from the app root.

## Conventions

- Search, filter and sort are `GET` query params parsed by `parseQuery` and built with `queryHref`. Every filtered view must have a shareable URL. The filter form is a React Router `<Form method="get">`.
- Each page renders a `<PageMeta>` for its title and description. React hoists these into `<head>`.
- Style with CSS modules and the tokens in `global.css` (`var(--bg)`, `var(--accent)` and so on). Use the `style` prop only for per-item values such as bar positions and colours.
- E2E tests are the behaviour contract, so they must not depend on the framework or the data. Locate by role, label and `/styles/:slug` href, never by class or DOM shape. Read expected values from the page, never hard-code BJCP style names, counts or stats, so a data update (BJCP 2021) leaves them green. Don't assert HTTP status codes.
- In e2e tests, the URL changes a moment before React re-renders. Before reading a value off the page after a navigation, wait for a rendered signal (`toBeVisible`, `toHaveAttribute`) or wrap the read in `expect(...).toPass()`.
- Write each e2e test with plain Playwright calls; don't add shared helper modules. Test user flows, not CSS. Accessibility testing is deliberately out of scope for now.
- Style data is split in two: `bjcp-2015/catalogue.json` (bundled; everything the list, search and charts need) and `bjcp-2015/guidelines/<slug>.json` (long-form text, loaded on demand by the style route's `loader`). Don't import guideline text anywhere that runs on the list or chart pages, or it lands back in the main bundle. Note data corrections in `src/catalogue/bjcp-2015/README.md`.
