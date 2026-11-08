import * as assert from "remix/assert";
import { describe, it } from "remix/test";

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
		assert.deepEqual(parseRanges("4.2 - 5.3%"), [{ min: 4.2, max: 5.3 }]);
	});

	it("parses fractional and labelled ranges", () => {
		assert.deepEqual(parseRanges("2.5 - 5"), [{ min: 2.5, max: 5 }]);
		assert.deepEqual(parseRanges("5 - 14(pale), 15 - 22(dark)"), [
			{ min: 5, max: 14, label: "pale" },
			{ min: 15, max: 22, label: "dark" },
		]);
	});

	it("returns no ranges when the value varies by type", () => {
		assert.deepEqual(parseRanges("Variable by type"), []);
	});
});

describe("style data", () => {
	it("has every 2015 style with a unique slug", () => {
		assert.equal(allStyles.length, 101);
		assert.equal(new Set(allStyles.map((s) => s.slug)).size, 101);
	});

	it("puts every style in at least one browsing group", () => {
		for (let style of allStyles) assert.ok(style.groups.length > 0, style.name);
	});

	it("uses the published ABV figures for corrected styles", () => {
		assert.equal(abv("international-pale-lager"), "4.6–6.0%");
		assert.equal(abv("british-golden-ale"), "3.8–5.0%");
		assert.equal(abv("australian-sparkling-ale"), "4.5–6.0%");
	});

	it("can plot every style except Specialty IPA", () => {
		let unplottable = allStyles.filter(
			(s) => s.stats.srm.ranges.length === 0 || s.stats.ibu.ranges.length === 0,
		);
		assert.deepEqual(
			unplottable.map((s) => s.slug),
			["specialty-ipa"],
		);
	});

	it("formats multi-range stats", () => {
		let saison = getStyle("saison")!.style;
		assert.equal(formatStat("srm", saison.stats.srm), "5–22");
		assert.equal(formatStatFull("srm", saison.stats.srm), "5–14 (pale), 15–22 (dark)");
	});
});

describe("srmColour", () => {
	it("interpolates between whole SRM values", () => {
		assert.equal(srmColour(2), "#FFD878");
		assert.equal(srmColour(3), "#FFCA5A");
		assert.equal(srmColour(2.5), "#FFD169");
	});

	it("clamps out-of-range values", () => {
		assert.equal(srmColour(0), srmColour(1));
		assert.equal(srmColour(99), srmColour(40));
	});
});

describe("findStyles", () => {
	it("searches names, codes and descriptions without accents", () => {
		assert.ok(findStyles({ ...DEFAULT_QUERY, q: "kolsch" }).some((s) => s.slug === "kolsch"));
		assert.deepEqual(
			findStyles({ ...DEFAULT_QUERY, q: "21A" }).map((s) => s.slug),
			["american-ipa"],
		);
	});

	it("filters by group and sorts by a stat", () => {
		let sours = findStyles({ q: "", group: "sour", sort: "ibu" });
		assert.ok(sours.length > 0);
		assert.ok(sours.every((s) => s.groups.includes("sour")));
		let mins = sours.map((s) => s.stats.ibu.ranges[0].min);
		assert.deepEqual(
			mins,
			mins.toSorted((a, b) => a - b),
		);
	});

	it("sorts styles that cannot be measured last", () => {
		let byColour = findStyles({ ...DEFAULT_QUERY, sort: "srm" });
		assert.equal(byColour.at(-1)?.slug, "specialty-ipa");
	});
});

describe("query params", () => {
	it("ignores unknown values", () => {
		let query = parseQuery(new URLSearchParams("q=%20ipa%20&group=nope&sort=bad"));
		assert.deepEqual(query, { q: "ipa", group: null, sort: "bjcp" });
	});

	it("builds clean URLs that leave out defaults", () => {
		assert.equal(queryHref("/", DEFAULT_QUERY), "/");
		assert.equal(
			queryHref("/colour", DEFAULT_QUERY, { group: "sour", sort: "srm" }),
			"/colour?group=sour&sort=srm",
		);
	});
});
