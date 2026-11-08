import { describe, expect, it } from "vite-plus/test";

import { loadGuideline } from "./guidelines.ts";
import { allStyles } from "./styles.ts";

describe("loadGuideline", () => {
	it("has guideline text for every style in the catalogue", async () => {
		let missing: string[] = [];
		for (let style of allStyles) {
			let guideline = await loadGuideline(style.slug);
			if (!guideline || Object.keys(guideline).length === 0) missing.push(style.slug);
		}
		expect(missing).toEqual([]);
	});

	it("returns null for an unknown slug", async () => {
		expect(await loadGuideline("not-a-style")).toBeNull();
		expect(await loadGuideline("../catalogue")).toBeNull();
	});
});
