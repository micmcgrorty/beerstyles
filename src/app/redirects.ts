import { ROUTE_IDS, routeUrls } from "./routes.ts";

/**
 * Netlify `_redirects` rules for the SPA: every URL of every route in the route
 * table serves index.html with 200, and anything else serves it with 404, so
 * unknown URLs (including unknown style slugs) get a real not-found status.
 *
 * Files that exist in the build (assets, favicon, version.txt) are served
 * before these rules, because none of them are forced.
 */
export function netlifyRedirects(): string {
	let lines = [
		...ROUTE_IDS.flatMap(routeUrls).map((url) => `${url} /index.html 200`),
		"/* /index.html 404",
	];
	return `${lines.join("\n")}\n`;
}
