import { describe, expect, it } from "vite-plus/test";

import { srmColour } from "./colours.ts";
import { scaleOf, scalePercent } from "./stats.ts";
import {
	allStyles,
	getStyle,
	parseQuery,
	queryHref,
	searchStyles,
	DEFAULT_QUERY,
} from "./styles.ts";
import { formatStat, parseRanges } from "./stats.ts";

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
		expect(formatStat("srm", saison.stats.srm, { form: "full" })).toBe("5–14 (pale), 15–22 (dark)");
		expect(formatStat("srm", saison.stats.srm, { form: "full", unit: true })).toBe(
			"5–14 (pale), 15–22 (dark) SRM",
		);
	});

	it("adds units only to colour and bitterness, and never to values that vary", () => {
		let lager = getStyle("american-light-lager")!.style;
		expect(formatStat("ibu", lager.stats.ibu, { unit: true })).toBe("8–12 IBU");
		expect(formatStat("abv", lager.stats.abv, { unit: true })).toBe("2.8–4.2%");
		expect(formatStat("og", lager.stats.og, { unit: true })).toBe("1.028–1.040");

		let specialty = getStyle("specialty-ipa")!.style;
		expect(formatStat("srm", specialty.stats.srm)).toBe("Varies");
		expect(formatStat("srm", specialty.stats.srm, { form: "full", unit: true })).toBe(
			"Varies by type",
		);
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

describe("bitterness colour", () => {
	let { colourAt, max } = scaleOf("ibu");

	it("keeps deepening all the way to the top of the scale", () => {
		expect(colourAt(100)).not.toBe(colourAt(max));
	});

	it("clamps beyond the scale", () => {
		expect(colourAt(max * 2)).toBe(colourAt(max));
		expect(colourAt(-10)).toBe(colourAt(0));
	});
});

describe("scalePercent", () => {
	it("places a value along its scale and clamps to 0–100", () => {
		expect(scalePercent("srm", 0)).toBe(0);
		expect(scalePercent("srm", scaleOf("srm").max / 2)).toBe(50);
		expect(scalePercent("ibu", scaleOf("ibu").max)).toBe(100);
		expect(scalePercent("ibu", scaleOf("ibu").max * 2)).toBe(100);
		expect(scalePercent("ibu", -5)).toBe(0);
	});
});

/** Every style in a result, in display order. */
function flatten(result: ReturnType<typeof searchStyles>) {
	return result.sections.flatMap((section) => section.styles);
}

describe("searchStyles", () => {
	it("searches names, codes and descriptions without accents", () => {
		let kolsch = flatten(searchStyles({ ...DEFAULT_QUERY, q: "kolsch" }));
		expect(kolsch.map((s) => s.slug)).toContain("kolsch");
		let ipa = flatten(searchStyles({ ...DEFAULT_QUERY, q: "21A" }));
		expect(ipa.map((s) => s.slug)).toEqual(["american-ipa"]);
	});

	it("filters by group and sorts by a stat", () => {
		let sours = flatten(searchStyles({ q: "", group: "sour", sort: "ibu" }));
		expect(sours.length).toBeGreaterThan(0);
		expect(sours.every((s) => s.groups.includes("sour"))).toBe(true);
		let mins = sours.map((s) => s.stats.ibu.ranges[0].min);
		expect(mins).toEqual(mins.toSorted((a, b) => a - b));
	});

	it("sorts styles that cannot be measured last", () => {
		let byColour = flatten(searchStyles({ ...DEFAULT_QUERY, sort: "srm" }));
		expect(byColour.at(-1)?.slug).toBe("specialty-ipa");
	});

	it("groups BJCP order into one section per category", () => {
		let result = searchStyles(DEFAULT_QUERY);
		expect(result.count).toBe(allStyles.length);
		expect(result.total).toBe(allStyles.length);
		expect(flatten(result)).toEqual(allStyles);
		for (let section of result.sections) {
			expect(section.category).not.toBeNull();
			expect(section.styles.every((s) => s.category.number === section.category?.number)).toBe(
				true,
			);
		}
		let numbers = result.sections.map((section) => section.category?.number);
		expect(new Set(numbers).size).toBe(numbers.length);
	});

	it("returns any other sort as one flat section", () => {
		let result = searchStyles({ ...DEFAULT_QUERY, sort: "name" });
		expect(result.sections).toHaveLength(1);
		expect(result.sections[0].category).toBeNull();
		expect(result.sections[0].styles).toHaveLength(result.count);
	});

	it("returns no sections when nothing matches", () => {
		for (let sort of ["bjcp", "abv"] as const) {
			let result = searchStyles({ ...DEFAULT_QUERY, q: "zzqqxx", sort });
			expect(result).toEqual({ count: 0, total: allStyles.length, sections: [] });
		}
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
