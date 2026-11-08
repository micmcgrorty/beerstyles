import { describe, expect, it } from "vite-plus/test";

import { srmColour } from "./srm.ts";
import {
	allStyles,
	findStyles,
	formatStat,
	formatStatFull,
	getStyle,
	parseQuery,
	parseRanges,
	queryHref,
	DEFAULT_QUERY,
} from "./styles.ts";

function abv(slug: string) {
	return formatStat("abv", getStyle(slug)!.style.stats.abv);
}

describe("parseRanges", () => {
	it("parses a simple range", () => {
		expect(parseRanges("4.2 - 5.3%")).toEqual([{ min: 4.2, max: 5.3 }]);
	});

	it("parses fractional and labelled ranges", () => {
		expect(parseRanges("2.5 - 5")).toEqual([{ min: 2.5, max: 5 }]);
		expect(parseRanges("5 - 14(pale), 15 - 22(dark)")).toEqual([
			{ min: 5, max: 14, label: "pale" },
			{ min: 15, max: 22, label: "dark" },
		]);
	});

	it("returns no ranges when the value varies by type", () => {
		expect(parseRanges("Variable by type")).toEqual([]);
	});
});

describe("style data", () => {
	it("has every 2015 style with a unique slug", () => {
		expect(allStyles.length).toBe(101);
		expect(new Set(allStyles.map((s) => s.slug)).size).toBe(101);
	});

	it("puts every style in at least one browsing group", () => {
		let ungrouped = allStyles.filter((s) => s.groups.length === 0).map((s) => s.name);
		expect(ungrouped).toEqual([]);
	});

	it("uses the published ABV figures for corrected styles", () => {
		expect(abv("international-pale-lager")).toBe("4.6–6.0%");
		expect(abv("british-golden-ale")).toBe("3.8–5.0%");
		expect(abv("australian-sparkling-ale")).toBe("4.5–6.0%");
	});

	it("can plot every style except Specialty IPA", () => {
		let unplottable = allStyles.filter(
			(s) => s.stats.srm.ranges.length === 0 || s.stats.ibu.ranges.length === 0,
		);
		expect(unplottable.map((s) => s.slug)).toEqual(["specialty-ipa"]);
	});

	it("formats multi-range stats", () => {
		let saison = getStyle("saison")!.style;
		expect(formatStat("srm", saison.stats.srm)).toBe("5–22");
		expect(formatStatFull("srm", saison.stats.srm)).toBe("5–14 (pale), 15–22 (dark)");
	});
});

describe("srmColour", () => {
	it("interpolates between whole SRM values", () => {
		expect(srmColour(2)).toBe("#FFD878");
		expect(srmColour(3)).toBe("#FFCA5A");
		expect(srmColour(2.5)).toBe("#FFD169");
	});

	it("clamps out-of-range values", () => {
		expect(srmColour(0)).toBe(srmColour(1));
		expect(srmColour(99)).toBe(srmColour(40));
	});
});

describe("findStyles", () => {
	it("searches names, codes and descriptions without accents", () => {
		expect(findStyles({ ...DEFAULT_QUERY, q: "kolsch" }).map((s) => s.slug)).toContain("kolsch");
		expect(findStyles({ ...DEFAULT_QUERY, q: "21A" }).map((s) => s.slug)).toEqual(["american-ipa"]);
	});

	it("filters by group and sorts by a stat", () => {
		let sours = findStyles({ q: "", group: "sour", sort: "ibu" });
		expect(sours.length).toBeGreaterThan(0);
		expect(sours.every((s) => s.groups.includes("sour"))).toBe(true);
		let mins = sours.map((s) => s.stats.ibu.ranges[0].min);
		expect(mins).toEqual(mins.toSorted((a, b) => a - b));
	});

	it("sorts styles that cannot be measured last", () => {
		let byColour = findStyles({ ...DEFAULT_QUERY, sort: "srm" });
		expect(byColour.at(-1)?.slug).toBe("specialty-ipa");
	});
});

describe("query params", () => {
	it("ignores unknown values", () => {
		let query = parseQuery(new URLSearchParams("q=%20ipa%20&group=nope&sort=bad"));
		expect(query).toEqual({ q: "ipa", group: null, sort: "bjcp" });
	});

	it("builds clean URLs that leave out defaults", () => {
		expect(queryHref("/", DEFAULT_QUERY)).toBe("/");
		expect(queryHref("/colour", DEFAULT_QUERY, { group: "sour", sort: "srm" })).toBe(
			"/colour?group=sour&sort=srm",
		);
	});
});
