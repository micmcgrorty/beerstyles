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

Netlify builds and hosts the site (`netlify.toml`): `npm run build` publishes `dist/`, and the build writes the commit SHA to `/version.txt`. Routing rules are generated into `dist/_redirects` by a Vite plugin from `src/redirects.ts`: every page (including each style slug in the catalogue) serves `index.html` with 200, and anything else serves it with 404. If you add a route, add it there too. `vp preview` ignores `_redirects`, so status codes are only checked on deploy previews. Each PR gets a deploy preview, and the "Deploy preview" workflow waits for the preview to serve the PR's commit, then runs the e2e suite against it. It needs the repository variable `NETLIFY_SITE_NAME`.

## Layout

- `src/main.tsx` mounts the app. `src/router.tsx` defines the routes.
- `src/paths.ts` builds every internal URL. Use it instead of hand-writing paths.
- `src/pages/` holds one component per route (`home-page.tsx`, `chart-page.tsx`, `style-page.tsx`, `not-found-page.tsx`), each with a CSS module beside it. `use-style-search.ts` (`useStyleSearch`) is the one way a page reads its search: the query from the URL, the results already laid out as sections, and `linkTo(changes)` for links that change the query. Pages render `sections` and never decide grouping themselves.
- `src/ui/` holds UI shared by several pages: `layout.tsx` (header, nav, footer, `PageMeta`), filters, range chart and stat list. `theme.module.css` has shared classes such as `pageTitle` and `pill`.
- `src/styles/global.css` holds the design tokens (light and dark) and base element styles.
- `src/data/` holds the BJCP 2015 style data in `bjcp-2015/` (see its README), parsing/search/sort (`styles.ts`), guideline loading (`guidelines.ts`) and scales and colours for SRM and IBU (`scales.ts`), with tests beside them. It has no React dependencies.
- Root `public/` contains static files served unchanged from the app root.

## Conventions

- Search, filter and sort are `GET` query params parsed by `parseQuery` and built with `queryHref`. Every filtered view must have a shareable URL. The filter form is a React Router `<Form method="get">`.
- Each page renders a `<PageMeta>` for its title and description. React hoists these into `<head>`.
- Style with CSS modules and the tokens in `global.css` (`var(--bg)`, `var(--accent)` and so on). Use the `style` prop only for per-item values such as bar positions and colours.
- E2E tests are the behaviour contract, so they must not depend on the framework or the data. Locate by role, label and `/styles/:slug` href, never by class or DOM shape. Read expected values from the page, never hard-code BJCP style names, counts or stats, so a data update (BJCP 2021) leaves them green. Don't assert HTTP status codes.
- In e2e tests, the URL changes a moment before React re-renders. Before reading a value off the page after a navigation, wait for a rendered signal (`toBeVisible`, `toHaveAttribute`) or wrap the read in `expect(...).toPass()`.
- Write each e2e test with plain Playwright calls; don't add shared helper modules. Test user flows, not CSS. Accessibility testing is deliberately out of scope for now.
- Style data is split in two: `bjcp-2015/catalogue.json` (bundled; everything the list, search and charts need) and `bjcp-2015/guidelines/<slug>.json` (long-form text, loaded on demand by the style route's `loader`). Don't import guideline text anywhere that runs on the list or chart pages, or it lands back in the main bundle. Note data corrections in `src/data/bjcp-2015/README.md`.
