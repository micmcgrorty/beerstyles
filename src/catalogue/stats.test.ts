import { describe, expect, it } from "vite-plus/test";

import {
	CHARTED_STATS,
	STATS,
	STAT_KEYS,
	formatStat,
	isCharted,
	parseRanges,
	scaleOf,
	scalePercent,
	type Stat,
	type StatKey,
} from "./stats.ts";
import { SORTS } from "./query.ts";

const oneRange: Stat = { text: "1 - 2", ranges: [{ min: 1, max: 2 }] };
const varies: Stat = { text: "Variable by type", ranges: [] };

describe("charted stats", () => {
	it("are colour then bitterness, the order the style page shows their bars", () => {
		expect(CHARTED_STATS).toEqual(["srm", "ibu"]);
	});

	it("include every stat that has a scale, and only those", () => {
		expect(CHARTED_STATS.toSorted()).toEqual(STAT_KEYS.filter(isCharted).toSorted());
	});
});

describe("sort options", () => {
	it("offers BJCP order, name, and each sortable stat by label", () => {
		expect(SORTS).toEqual([
			{ id: "bjcp", label: "BJCP order" },
			{ id: "name", label: "Name" },
			{ id: "abv", label: "Strength (ABV)" },
			{ id: "ibu", label: "Bitterness (IBU)" },
			{ id: "srm", label: "Colour (SRM)" },
		]);
	});
});

describe("formatStat", () => {
	let cases: [StatKey, string][] = [
		["abv", "1.0–2.0%"],
		["ibu", "1–2 IBU"],
		["srm", "1–2 SRM"],
		["og", "1.000–2.000"],
		["fg", "1.000–2.000"],
	];

	it("covers every stat", () => {
		expect(cases.map(([key]) => key).toSorted()).toEqual(Object.keys(STATS).toSorted());
	});

	it("formats every stat, adding a unit word only where the stat has one", () => {
		let formatted = cases.map(([key]) => [key, formatStat(key, oneRange, { unit: true })]);
		expect(formatted).toEqual(cases);
	});

	it("never doubles up a percent sign", () => {
		for (let [key] of cases) {
			expect(formatStat(key, oneRange, { form: "full", unit: true })).not.toContain("% %");
		}
	});

	it("never adds a unit to a value that varies", () => {
		expect(formatStat("srm", varies, { unit: true })).toBe("Varies");
		expect(formatStat("ibu", varies, { form: "full", unit: true })).toBe("Varies by type");
	});
	it("formats multi-range stats as their span, or each range in full", () => {
		let saisonColour: Stat = {
			text: "5 - 14 (pale), 15 - 22 (dark)",
			ranges: parseRanges("5 - 14 (pale), 15 - 22 (dark)"),
		};
		expect(formatStat("srm", saisonColour)).toBe("5–22");
		expect(formatStat("srm", saisonColour, { form: "full" })).toBe("5–14 (pale), 15–22 (dark)");
		expect(formatStat("srm", saisonColour, { form: "full", unit: true })).toBe(
			"5–14 (pale), 15–22 (dark) SRM",
		);
	});
});

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

describe("bitterness scale", () => {
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
