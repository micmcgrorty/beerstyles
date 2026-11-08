import { describe, expect, it } from "vite-plus/test";

import { createCatalogue } from "../catalogue.ts";
import { formatStat } from "../stats.ts";
import { BJCP_2015 } from "./edition.ts";

// Checks specific to the 2015 data and rules. A new edition gets its own version of this file.
const { allStyles, getStyle, loadGuideline } = createCatalogue(BJCP_2015);

function abv(slug: string) {
	return formatStat("abv", getStyle(slug)!.style.stats.abv);
}

function inCategory(from: number, to = from) {
	return allStyles.filter((s) => s.category.number >= from && s.category.number <= to);
}

function byTag(tag: string) {
	return allStyles.filter((s) => s.tags.includes(tag));
}

describe("BJCP 2015 data", () => {
	it("gives every style a unique slug", () => {
		expect(new Set(allStyles.map((s) => s.slug)).size).toBe(allStyles.length);
	});

	it("uses the published ABV figures for the styles corrected in README.md", () => {
		expect(abv("international-pale-lager")).toBe("4.6–6.0%");
		expect(abv("british-golden-ale")).toBe("3.8–5.0%");
		expect(abv("australian-sparkling-ale")).toBe("4.5–6.0%");
	});

	it("has colour and bitterness for every style except Specialty IPA, which varies by type", () => {
		let unplottable = allStyles.filter(
			(s) => s.stats.srm.ranges.length === 0 || s.stats.ibu.ranges.length === 0,
		);
		expect(unplottable.map((s) => s.slug)).toEqual(["specialty-ipa"]);
	});

	it("has guideline text for every style, and none for an unknown slug", async () => {
		let missing: string[] = [];
		for (let style of allStyles) {
			let guideline = await loadGuideline(style.slug);
			if (!guideline || Object.keys(guideline).length === 0) missing.push(style.slug);
		}
		expect(missing).toEqual([]);
		expect(await loadGuideline("not-a-style")).toBeNull();
		expect(await loadGuideline("../catalogue")).toBeNull();
	});
});

describe("BJCP 2015 group rules", () => {
	it("puts every style in at least one browsing group", () => {
		expect(allStyles.filter((s) => s.groups.length === 0).map((s) => s.name)).toEqual([]);
	});

	it("puts category 21 in IPAs, 24–26 in Belgian ales and 27 in Historical", () => {
		expect(inCategory(21).every((s) => s.groups.includes("ipas"))).toBe(true);
		expect(inCategory(24, 26).every((s) => s.groups.includes("belgian"))).toBe(true);
		expect(inCategory(27).every((s) => s.groups.includes("historical"))).toBe(true);
	});

	it("puts styles in groups from their family tags", () => {
		expect(byTag("stout-family").every((s) => s.groups.includes("porters-stouts"))).toBe(true);
		expect(byTag("wheat-beer-family").every((s) => s.groups.includes("wheat"))).toBe(true);
		expect(byTag("wild-fermented").every((s) => s.groups.includes("sour"))).toBe(true);
	});
});
