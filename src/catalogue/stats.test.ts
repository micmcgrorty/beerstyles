import { describe, expect, it } from "vite-plus/test";

import {
	CHARTED_STATS,
	STATS,
	STAT_KEYS,
	formatStat,
	isCharted,
	type Stat,
	type StatKey,
} from "./stats.ts";
import { SORTS } from "./styles.ts";

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
});
