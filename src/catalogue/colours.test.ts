import { describe, expect, it } from "vite-plus/test";

import { srmColour } from "./colours.ts";

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
