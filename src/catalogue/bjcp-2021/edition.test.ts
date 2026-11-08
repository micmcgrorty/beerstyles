import { describe, expect, it } from "vite-plus/test";

import { createCatalogue } from "../catalogue.ts";
import { BJCP_2021 } from "./edition.ts";

// Checks specific to the 2021 data and rules. A new edition gets its own version of this file.
const { allStyles, loadGuideline, edition } = createCatalogue(BJCP_2021);

function inCategory(from: number, to = from) {
	return allStyles.filter((s) => s.category.number >= from && s.category.number <= to);
}

function byTag(tag: string) {
	return allStyles.filter((s) => s.tags.includes(tag));
}

describe("BJCP 2021 data", () => {
	it("covers every category from 1 to 34, in order", () => {
		let numbers = [...new Set(allStyles.map((s) => s.category.number))];
		expect(numbers).toEqual(Array.from({ length: 34 }, (_, i) => i + 1));
	});

	it("gives every style a unique slug", () => {
		expect(new Set(allStyles.map((s) => s.slug)).size).toBe(allStyles.length);
	});

	it("lists styles in BJCP order within each category", () => {
		for (let n = 1; n <= 34; n++) {
			let codes = inCategory(n).map((s) => s.code);
			expect(codes).toEqual(codes.toSorted());
		}
	});

	it("has colour and bitterness for every style in categories 1–26", () => {
		// From 27 on, some styles vary with a base style: Kellerbier is a serving style, and
		// specialty-type beers (28–34) take their statistics from the beer they're built on.
		let unplottable = inCategory(1, 26).filter(
			(s) => s.stats.srm.ranges.length === 0 || s.stats.ibu.ranges.length === 0,
		);
		expect(unplottable.map((s) => s.code)).toEqual([]);
	});

	it("has guideline text for every style, and none for an unknown slug", async () => {
		let missing: string[] = [];
		for (let style of allStyles) {
			let guideline = await loadGuideline(style.slug);
			if (!guideline?.aroma) missing.push(style.slug);
		}
		expect(missing).toEqual([]);
		expect(await loadGuideline("not-a-style")).toBeNull();
		expect(await loadGuideline("../catalogue")).toBeNull();
	});

	it("shows Specialty IPA's currently defined types", async () => {
		let sections = edition.sections.map((s) => s.key);
		expect(sections).toContain("currentlyDefinedTypes");
		let specialtyIpa = allStyles.find((s) => s.code === "21B");
		let guideline = await loadGuideline(specialtyIpa!.slug);
		expect(guideline?.currentlyDefinedTypes).toContain("Black IPA");
	});
});

describe("BJCP 2021 group rules", () => {
	it("puts every style in at least one browsing group", () => {
		expect(allStyles.filter((s) => s.groups.length === 0).map((s) => s.name)).toEqual([]);
	});

	it("puts category 21 in IPAs, 24–26 in Belgian ales and 27 in Historical", () => {
		expect(inCategory(21).every((s) => s.groups.includes("ipas"))).toBe(true);
		expect(inCategory(24, 26).every((s) => s.groups.includes("belgian"))).toBe(true);
		expect(inCategory(27).every((s) => s.groups.includes("historical"))).toBe(true);
	});

	it("puts American wild ales (28) in Sours and categories 29–34 in Specialty beers", () => {
		expect(inCategory(28).every((s) => s.groups.includes("sour"))).toBe(true);
		expect(inCategory(29, 34).every((s) => s.groups.includes("specialty"))).toBe(true);
		expect(inCategory(1, 28).some((s) => s.groups.includes("specialty"))).toBe(false);
	});

	it("puts styles in groups from their family tags", () => {
		expect(byTag("stout-family").every((s) => s.groups.includes("porters-stouts"))).toBe(true);
		expect(byTag("wheat-beer-family").every((s) => s.groups.includes("wheat"))).toBe(true);
		expect(byTag("bock-family").every((s) => s.groups.includes("amber-dark-lagers"))).toBe(true);
	});
});
