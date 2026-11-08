import { CHARTED_STATS, STATS, type ChartedStat } from "../catalogue/stats.ts";
import { allStyles } from "../catalogue/styles.ts";
import { CHARTS } from "../charts/charts.ts";

/**
 * Every page in the app: the style list, one chart per charted stat (from
 * charts.ts), and a page per style. The router attaches a page component to
 * each route (router.tsx), the main nav lists the ones with a `nav` label, and
 * Netlify's `_redirects` serves every URL they produce (redirects.ts).
 *
 * This module is plain data, with no React, because vite.config.ts imports it at build time.
 */
export interface RouteDefinition {
	/** React Router path pattern, e.g. "/styles/:slug". */
	path: string;
	/** Label in the main nav, in table order. Omit to leave a route out of the nav. */
	nav?: string;
	/** Concrete URLs for a route with params. Static routes are served at their path. */
	urls?: () => string[];
}

/** A chart's route id is the stat it charts. */
export type RouteId = "home" | ChartedStat | "compare" | "style";

/** Route ids, in table (and nav) order. */
export const ROUTE_IDS: RouteId[] = ["home", ...CHARTED_STATS, "compare", "style"];

const STYLE_PATH = "/styles/:slug";
const COMPARE_PATH = "/compare";

export function route(id: RouteId): RouteDefinition {
	switch (id) {
		case "home":
			return { path: "/", nav: "Styles" };
		case "compare":
			// Not in the nav until the page is complete; reachable by URL meanwhile.
			return { path: COMPARE_PATH };
		case "style":
			return { path: STYLE_PATH, urls: () => allStyles.map((style) => paths.style(style.slug)) };
		default:
			return { path: CHARTS[id].path, nav: STATS[id].label };
	}
}

/** The concrete URLs a route serves. */
export function routeUrls(id: RouteId): string[] {
	let { path, urls } = route(id);
	return urls ? urls() : [path];
}

/** The main nav: each route with a nav label, in table order. */
export const NAV = ROUTE_IDS.flatMap((id) => {
	let { path, nav } = route(id);
	return nav ? [{ label: nav, to: path }] : [];
});

/** URL builders for every page, so links never hand-write paths. */
export const paths = {
	home: "/",
	chart: (stat: ChartedStat): string => CHARTS[stat].path,
	style: (slug: string): string => STYLE_PATH.replace(":slug", encodeURIComponent(slug)),
	/** The compare page with styles A and B chosen; leave either out to leave it unchosen. */
	compare: (a?: string | null, b?: string | null): string => {
		let params = new URLSearchParams();
		if (a) params.set("a", a);
		if (b) params.set("b", b);
		let search = params.toString();
		return search ? `${COMPARE_PATH}?${search}` : COMPARE_PATH;
	},
};
