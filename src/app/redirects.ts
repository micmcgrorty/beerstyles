import { allStyles } from "../catalogue/styles.ts";
import { paths } from "./paths.ts";

/**
 * Netlify `_redirects` rules for the SPA: every real page serves index.html
 * with 200, and anything else serves it with 404, so unknown URLs (including
 * unknown style slugs) get a real not-found status.
 *
 * Files that exist in the build (assets, favicon, version.txt) are served
 * before these rules, because none of them are forced.
 */
export function netlifyRedirects(): string {
	let pages = [
		paths.home,
		paths.colour,
		paths.bitterness,
		...allStyles.map((style) => paths.style(style.slug)),
	];
	let lines = [...pages.map((page) => `${page} /index.html 200`), "/* /index.html 404"];
	return `${lines.join("\n")}\n`;
}
