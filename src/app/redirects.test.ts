import { describe, expect, it } from "vite-plus/test";

import { netlifyRedirects } from "./redirects.ts";
import { ROUTES, ROUTE_IDS, routeUrls } from "./routes.ts";

describe("netlifyRedirects", () => {
	let lines = netlifyRedirects().trimEnd().split("\n");

	it("serves every URL of every route in the route table with 200", () => {
		for (let id of ROUTE_IDS) {
			let urls = routeUrls(id);
			expect(urls.length).toBeGreaterThan(0);
			for (let url of urls) expect(lines).toContain(`${url} /index.html 200`);
		}
	});

	it("lists concrete URLs, never a route pattern Netlify would treat as a wildcard", () => {
		for (let id of ROUTE_IDS) {
			for (let url of routeUrls(id)) expect(url).not.toMatch(/[:*]/);
		}
		expect(ROUTES.style.path).toContain(":slug");
	});

	it("ends with a catch-all 404, so it only applies when nothing else matched", () => {
		expect(lines.at(-1)).toBe("/* /index.html 404");
		expect(lines.filter((line) => line.endsWith(" 404"))).toHaveLength(1);
	});
});
