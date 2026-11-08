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

## Layout

- `src/main.tsx` mounts the app. `src/router.tsx` defines the routes.
- `src/paths.ts` builds every internal URL. Use it instead of hand-writing paths.
- `src/pages/` holds one component per route (`home-page.tsx`, `chart-page.tsx`, `style-page.tsx`, `not-found-page.tsx`), each with a CSS module beside it. `use-style-query.ts` reads search, filter and sort from the URL.
- `src/ui/` holds UI shared by several pages: `layout.tsx` (header, nav, footer, `PageMeta`), filters, range chart and stat list. `theme.module.css` has shared classes such as `pageTitle` and `pill`.
- `src/styles/global.css` holds the design tokens (light and dark) and base element styles.
- `src/data/` holds the BJCP 2015 style data (`bjcp-2015.ts`), parsing/search/sort (`styles.ts`) and colour scales (`srm.ts`), with tests in `styles.test.ts`. It has no React or browser dependencies.
- Root `public/` contains static files served unchanged from the app root.

## Conventions

- Search, filter and sort are `GET` query params parsed by `parseQuery` and built with `queryHref`. Every filtered view must have a shareable URL. The filter form is a React Router `<Form method="get">`.
- Each page renders a `<PageMeta>` for its title and description. React hoists these into `<head>`.
- Style with CSS modules and the tokens in `global.css` (`var(--bg)`, `var(--accent)` and so on). Use the `style` prop only for per-item values such as bar positions and colours.
- E2E tests are the behaviour contract, so they must not depend on the framework or the data. Locate by role, label and `/styles/:slug` href, never by class or DOM shape. Read expected values from the page, never hard-code BJCP style names, counts or stats, so a data update (BJCP 2021) leaves them green. Don't assert HTTP status codes.
- In e2e tests, the URL changes a moment before React re-renders. Before reading a value off the page after a navigation, wait for a rendered signal (`toBeVisible`, `toHaveAttribute`) or wrap the read in `expect(...).toPass()`.
- Write each e2e test with plain Playwright calls; don't add shared helper modules. Test user flows, not CSS. Accessibility testing is deliberately out of scope for now.
- Keep data corrections in `src/data/bjcp-2015.ts` and note them in its header comment.
