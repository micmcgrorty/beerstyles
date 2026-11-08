import { describe, expect, it } from "vite-plus/test";

import { paths } from "../app/routes.ts";
import { parseComparison, swapped } from "./compare-query.ts";

const known = new Set(["kolsch", "altbier", "saison"]);
const isKnown = (slug: string) => known.has(slug);
const parse = (search: string) => parseComparison(new URLSearchParams(search), isKnown);

describe("parseComparison", () => {
	it("reads both styles from the URL", () => {
		expect(parse("a=kolsch&b=altbier")).toEqual({ a: "kolsch", b: "altbier", ignored: [] });
	});

	it("leaves a missing or empty choice unset", () => {
		expect(parse("")).toEqual({ a: null, b: null, ignored: [] });
		expect(parse("a=kolsch")).toEqual({ a: "kolsch", b: null, ignored: [] });
		expect(parse("a=&b=saison")).toEqual({ a: null, b: "saison", ignored: [] });
	});

	it("drops styles it doesn't know, and reports them", () => {
		expect(parse("a=kolsch&b=not-a-style")).toEqual({
			a: "kolsch",
			b: null,
			ignored: ["not-a-style"],
		});
	});

	it("allows the same style on both sides", () => {
		expect(parse("a=saison&b=saison")).toEqual({ a: "saison", b: "saison", ignored: [] });
	});
});

describe("comparison links", () => {
	it("leave out unset styles, so URLs stay clean", () => {
		expect(paths.compare()).toBe("/compare");
		expect(paths.compare("kolsch")).toBe("/compare?a=kolsch");
		expect(paths.compare(null, "altbier")).toBe("/compare?b=altbier");
		expect(paths.compare("kolsch", "altbier")).toBe("/compare?a=kolsch&b=altbier");
	});

	it("round-trip through parseComparison", () => {
		let url = new URL(paths.compare("kolsch", "altbier"), "https://example.com");
		expect(parseComparison(url.searchParams, isKnown)).toMatchObject({ a: "kolsch", b: "altbier" });
	});

	it("swap A and B", () => {
		expect(swapped({ a: "kolsch", b: "altbier" })).toBe("/compare?a=altbier&b=kolsch");
		expect(swapped({ a: "kolsch", b: null })).toBe("/compare?b=kolsch");
	});
});
