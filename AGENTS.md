# Beer Styles Agent Guide

This app follows the `remix new` starter conventions. Use them when continuing to build it out.

## Commands

```sh
npm i
npm run dev
npm run start
npm test
npm run typecheck
```

`npm run dev` watches and restarts the server. `npm run start` runs in production mode without a separate build step.

## Building Features

Refer to ./.agents/skills/remix/SKILL.md for the Remix mental model and how to find guides and API READMEs through `node_modules/remix/INDEX.md`.

## Layout

- `app/routes.ts` defines the shared route contract used by server and browser modules for type-safe hrefs
- `app/router.ts` wires routes to controllers and installs the standard Remix component renderer used by actions
- Put top-level route actions in `app/actions/controller.tsx`; add `app/actions/<route-key>/controller.tsx` for nested route maps. `app/actions/controller.test.ts` is the router smoke test
- Route-owned pages live beside the controller in `app/actions/` (`home-page.tsx`, `chart-page.tsx`, `style-page.tsx`, `not-found-page.tsx`); `document.tsx` is the HTML shell and owns the design tokens as CSS custom properties
- `app/ui/` holds UI shared by several pages (layout, filters, range chart, stat list, theme helpers)
- `app/data/` holds the BJCP 2015 style data (`bjcp-2015.ts`), parsing/search/sort (`styles.ts`) and colour scales (`srm.ts`), with tests in `styles.test.ts`
- `app/actions/public/` contains the browser runtime entry
- Root `public/` contains static files served unchanged from the app root

## Conventions

- Pages are server-rendered with no client JavaScript. Search, filter and sort are `GET` query params parsed by `parseQuery` and built with `queryHref`.
- Style with `css()` mixins and the tokens defined in `document.tsx` (`var(--bg)`, `var(--accent)` and so on); use the `style` prop only for per-item values such as bar positions.
- Keep data corrections in `app/data/bjcp-2015.ts` and note them in its header comment.
