# BJCP Beer Styles

A reference for every beer style in the BJCP 2015 Style Guidelines, built in Remix 3. It lets you browse, search and filter the styles, compare their colour and bitterness on charts, and read the full guideline for each style.

Live at [beer.micmcgrorty.dev](https://beer.micmcgrorty.dev).

## Pages

- `/` lists every style, grouped by BJCP category. Search, filter by type (pale lagers, IPAs, sours…) and sort by name, ABV, IBU or SRM.
- `/colour` charts each style's SRM range against the beer colour spectrum.
- `/bitterness` charts each style's IBU range.
- `/styles/:slug` shows the full guideline for one style: stats, colour and bitterness bars, aroma, flavour, history, commercial examples and more.

Search, filters and sort are plain `GET` query parameters (`?q=stout&group=porters-stouts&sort=abv`). Every page is server-rendered and works without JavaScript, and every filtered view has a URL you can share.

## Shape

- `app/routes.ts` defines the shared route contract used by server and browser modules for type-safe hrefs.
- `app/router.ts` wires routes to controllers and installs the standard Remix component renderer used by actions.
- `app/actions/controller.tsx` owns the route actions. The pages it renders live alongside it: `home-page.tsx`, `chart-page.tsx`, `style-page.tsx` and `not-found-page.tsx`.
- `app/actions/document.tsx` is the HTML shell and holds the design tokens (light and dark).
- `app/ui/` holds shared UI: the layout (header, nav, footer), filters, range chart and stat list.
- `app/data/bjcp-2015.ts` is the style data. `app/data/styles.ts` parses the stats and handles search, filter and sort. `app/data/srm.ts` maps SRM values to colours.
- `app/actions/public/` contains the browser runtime entry.
- Root `public/` contains static files served unchanged from the app root.

## Commands

```sh
npm i
npm run dev        # watch and restart the server
npm run start      # production mode
npm test           # data tests (Vitest)
npm run test:e2e   # Playwright end-to-end tests (desktop + mobile)
npm run typecheck
npm run lint       # oxlint
npm run format     # oxfmt (format:check in CI)
```

Requires Node 24.3 or later. The server listens on `PORT` (default 44100). Before the first `npm run test:e2e`, install the browser with `npx playwright install chromium`.

## Data

The style text and vital statistics come from the [BJCP 2015 Beer Style Guidelines](https://www.bjcp.org/beer-styles/), © Beer Judge Certification Program. These corrections were made to the original dataset:

- ABV for International Pale Lager (4.6–6.0%), British Golden Ale (3.8–5.0%) and Australian Sparkling Ale (4.5–6.0%) now matches the published guidelines.
- Lost hyphens and spaces (for example "lightbodied") and dropped letters ("imilar", "tronger") are restored.
- Tags are normalised.
