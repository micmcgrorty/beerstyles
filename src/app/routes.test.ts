import { describe, expect, it } from "vite-plus/test";

import { CHARTED_STATS } from "../catalogue/stats.ts";
import { CHARTS } from "../charts/charts.ts";
import { NAV, ROUTE_IDS, paths, route } from "./routes.ts";

describe("chart routes", () => {
	it("give every charted stat a route at its chart's path", () => {
		for (let stat of CHARTED_STATS) {
			expect(ROUTE_IDS).toContain(stat);
			expect(route(stat).path).toBe(CHARTS[stat].path);
			expect(paths.chart(stat)).toBe(CHARTS[stat].path);
		}
	});

	it("serve the colour and bitterness charts where they always have", () => {
		expect(paths.chart("srm")).toBe("/colour");
		expect(paths.chart("ibu")).toBe("/bitterness");
	});

	it("never share a path with another route", () => {
		let routePaths = ROUTE_IDS.map((id) => route(id).path);
		expect(new Set(routePaths).size).toBe(routePaths.length);
	});
});

describe("main nav", () => {
	it("lists the style list, each chart in charted order, then Compare", () => {
		expect(NAV).toEqual([
			{ label: "Styles", to: "/" },
			{ label: "Colour", to: "/colour" },
			{ label: "Bitterness", to: "/bitterness" },
			{ label: "Compare", to: "/compare" },
		]);
	});
});

describe("links", () => {
	it("build style URLs from the route pattern", () => {
		expect(paths.home).toBe("/");
		expect(paths.style("saison")).toBe("/styles/saison");
		expect(paths.style("a b")).toBe("/styles/a%20b");
	});
});
