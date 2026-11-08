import { allStyles } from "../catalogue/styles.ts";

/**
 * Every page in the app. The router attaches a page component to each entry
 * (router.tsx), the main nav lists the ones with a `nav` label, and Netlify's
 * `_redirects` serves every URL they produce (redirects.ts).
 *
 * This module is plain data, with no React, because vite.config.ts imports it at build time.
 */
interface RouteDefinition {
	/** React Router path pattern, e.g. "/styles/:slug". */
	path: string;
	/** Label in the main nav, in table order. Omit to leave a route out of the nav. */
	nav?: string;
	/** Concrete URLs for a route with params. Static routes are served at their path. */
	urls?: () => string[];
}

/** Route ids, in table (and nav) order. */
export const ROUTE_IDS = ["home", "colour", "bitterness", "style"] as const;

export type RouteId = (typeof ROUTE_IDS)[number];

export const ROUTES = {
	home: { path: "/", nav: "Styles" },
	colour: { path: "/colour", nav: "Colour" },
	bitterness: { path: "/bitterness", nav: "Bitterness" },
	style: {
		path: "/styles/:slug",
		urls: (): string[] => allStyles.map((style) => paths.style(style.slug)),
	},
} satisfies Record<RouteId, RouteDefinition>;

/** The concrete URLs a route serves. */
export function routeUrls(id: RouteId): string[] {
	let route: RouteDefinition = ROUTES[id];
	return route.urls ? route.urls() : [route.path];
}

/** The main nav: each route with a nav label, in table order. */
export const NAV = ROUTE_IDS.flatMap((id) => {
	let route: RouteDefinition = ROUTES[id];
	return route.nav ? [{ label: route.nav, to: route.path }] : [];
});

/** URL builders for every page, so links never hand-write paths. */
export const paths: {
	home: string;
	colour: string;
	bitterness: string;
	style: (slug: string) => string;
} = {
	home: ROUTES.home.path,
	colour: ROUTES.colour.path,
	bitterness: ROUTES.bitterness.path,
	style: (slug: string) => ROUTES.style.path.replace(":slug", encodeURIComponent(slug)),
};
