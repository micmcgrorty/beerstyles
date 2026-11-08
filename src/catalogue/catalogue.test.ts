import { describe, expect, it } from "vite-plus/test";

import { createCatalogue, type Edition } from "./catalogue.ts";
import { DEFAULT_QUERY } from "./query.ts";
import type { RawStyle } from "./types.ts";

/** A tiny edition, so these tests check the catalogue's behaviour rather than one edition's data. */
function rawStyle(code: string, name: string, srm: string, tags: string[] = []): RawStyle {
	return {
		code,
		slug: name.toLowerCase().replace(/\W+/g, "-"),
		name,
		overallImpression: `${name} impression`,
		vitalStatistics: {
			abv: "4 - 5%",
			og: "1.040 - 1.050",
			fg: "1.008 - 1.012",
			ibu: "10 - 20",
			srm,
		},
		commercialExamples: [`${name} Brewery`],
		tags,
	};
}

const fakeEdition: Edition = {
	name: "Test Guidelines 2000",
	categories: [
		{
			number: 1,
			name: "Lagers",
			styles: [
				rawStyle("1A", "Kölsch", "4 - 6", ["pale"]),
				rawStyle("1B", "Dunkel", "Variable by type"),
			],
		},
		{ number: 2, name: "Ales", styles: [rawStyle("2A", "Amber", "10 - 16", ["pale"])] },
	],
	groupsFor: (style, category) => [
		style.tags.includes("pale") ? "pale-lagers" : "amber-dark-lagers",
		...(category.number === 2 ? (["pale-ales"] as const) : []),
	],
	sections: [{ key: "aroma", heading: "Aroma" }],
	loadGuideline: async (slug) => (slug === "kolsch" ? { aroma: "Bready" } : null),
};

const catalogue = createCatalogue(fakeEdition);
const slugs = (styles: { slug: string }[]) => styles.map((style) => style.slug);
const flatten = (result: ReturnType<typeof catalogue.searchStyles>) =>
	result.sections.flatMap((section) => section.styles);

describe("createCatalogue", () => {
	it("lists the edition's styles in its order, with category and parsed stats", () => {
		expect(slugs(catalogue.allStyles)).toEqual(["k-lsch", "dunkel", "amber"]);
		let amber = catalogue.allStyles[2];
		expect(amber.category).toEqual({ number: 2, name: "Ales" });
		expect(amber.stats.srm.ranges).toEqual([{ min: 10, max: 16 }]);
	});

	it("puts styles in browsing groups using the edition's rules", () => {
		let groups = catalogue.allStyles.map((style) => style.groups);
		expect(groups).toEqual([["pale-lagers"], ["amber-dark-lagers"], ["pale-lagers", "pale-ales"]]);
	});

	it("finds a style with its neighbours in edition order", () => {
		let found = catalogue.getStyle("dunkel");
		expect(found?.previous?.slug).toBe("k-lsch");
		expect(found?.next?.slug).toBe("amber");
		expect(catalogue.getStyle("amber")?.next).toBeNull();
		expect(catalogue.getStyle("nope")).toBeNull();
	});

	it("loads guideline text through the edition", async () => {
		expect(await catalogue.loadGuideline("kolsch")).toEqual({ aroma: "Bready" });
		expect(await catalogue.loadGuideline("nope")).toBeNull();
	});

	it("exposes the edition's name and guideline sections", () => {
		expect(catalogue.edition.name).toBe("Test Guidelines 2000");
		expect(catalogue.edition.sections).toEqual([{ key: "aroma", heading: "Aroma" }]);
	});
});

describe("searchStyles", () => {
	it("searches names, codes, categories and examples without accents", () => {
		expect(slugs(flatten(catalogue.searchStyles({ ...DEFAULT_QUERY, q: "kolsch" })))).toEqual([
			"k-lsch",
		]);
		expect(slugs(flatten(catalogue.searchStyles({ ...DEFAULT_QUERY, q: "2a" })))).toEqual([
			"amber",
		]);
		expect(slugs(flatten(catalogue.searchStyles({ ...DEFAULT_QUERY, q: "ales" })))).toEqual([
			"amber",
		]);
		expect(
			slugs(flatten(catalogue.searchStyles({ ...DEFAULT_QUERY, q: "dunkel brewery" }))),
		).toEqual(["dunkel"]);
	});

	it("filters by group", () => {
		let result = catalogue.searchStyles({ ...DEFAULT_QUERY, group: "pale-lagers" });
		expect(slugs(flatten(result))).toEqual(["k-lsch", "amber"]);
	});

	it("groups BJCP order into one section per category", () => {
		let result = catalogue.searchStyles(DEFAULT_QUERY);
		expect(result.sections.map((s) => [s.category?.name, slugs(s.styles)])).toEqual([
			["Lagers", ["k-lsch", "dunkel"]],
			["Ales", ["amber"]],
		]);
		expect(result).toMatchObject({ count: 3, total: 3 });
	});

	it("returns any other sort as one flat section, with styles that can't be measured last", () => {
		let result = catalogue.searchStyles({ ...DEFAULT_QUERY, sort: "srm" });
		expect(result.sections).toHaveLength(1);
		expect(result.sections[0].category).toBeNull();
		expect(slugs(result.sections[0].styles)).toEqual(["k-lsch", "amber", "dunkel"]);
	});

	it("sorts by name", () => {
		let result = catalogue.searchStyles({ ...DEFAULT_QUERY, sort: "name" });
		expect(slugs(flatten(result))).toEqual(["amber", "dunkel", "k-lsch"]);
	});

	it("returns no sections when nothing matches", () => {
		for (let sort of ["bjcp", "abv"] as const) {
			let result = catalogue.searchStyles({ ...DEFAULT_QUERY, q: "zzqqxx", sort });
			expect(result).toEqual({ count: 0, total: 3, sections: [] });
		}
	});
});
