import { describe, expect, it } from "vite-plus/test";

import {
	DEFAULT_QUERY,
	clearFilters,
	formKey,
	hiddenFields,
	isFiltered,
	parseQuery,
	queryHref,
	type StyleQuery,
} from "./query.ts";

const filtered: StyleQuery = { q: "stout", group: "porters-stouts", sort: "abv" };

describe("query params", () => {
	it("reads an empty URL as the defaults, and writes the defaults as no params", () => {
		expect(parseQuery(new URLSearchParams())).toEqual(DEFAULT_QUERY);
		expect(queryHref("/", DEFAULT_QUERY)).toBe("/");
	});

	it("ignores unknown values", () => {
		let query = parseQuery(new URLSearchParams("q=%20ipa%20&group=nope&sort=bad"));
		expect(query).toEqual({ q: "ipa", group: null, sort: "bjcp" });
	});

	it("builds clean URLs that leave out defaults", () => {
		expect(queryHref("/colour", DEFAULT_QUERY, { group: "sour", sort: "srm" })).toBe(
			"/colour?group=sour&sort=srm",
		);
	});

	it("round-trips a query through its URL", () => {
		let href = queryHref("/", filtered);
		expect(parseQuery(new URL(href, "https://example.com").searchParams)).toEqual(filtered);
	});
});

describe("filters", () => {
	it("counts search and group as filters, but not sort", () => {
		expect(isFiltered(DEFAULT_QUERY)).toBe(false);
		expect(isFiltered({ ...DEFAULT_QUERY, sort: "abv" })).toBe(false);
		expect(isFiltered({ ...DEFAULT_QUERY, q: "ipa" })).toBe(true);
		expect(isFiltered({ ...DEFAULT_QUERY, group: "sour" })).toBe(true);
	});

	it("clears search and group, and keeps the sort", () => {
		expect(clearFilters(filtered)).toEqual({ q: "", group: null, sort: "abv" });
		expect(isFiltered(clearFilters(filtered))).toBe(false);
		expect(queryHref("/", clearFilters(filtered))).toBe("/?sort=abv");
	});
});

describe("the filter form", () => {
	it("keys the form by the whole query, so it resets when any part changes", () => {
		expect(formKey(filtered)).toBe(formKey({ ...filtered }));
		expect(formKey(filtered)).not.toBe(formKey({ ...filtered, q: "porter" }));
		expect(formKey(filtered)).not.toBe(formKey({ ...filtered, group: null }));
		expect(formKey(filtered)).not.toBe(formKey({ ...filtered, sort: "bjcp" }));
	});

	it("carries the params the form has no input for as hidden fields", () => {
		expect(hiddenFields(filtered)).toEqual([["group", "porters-stouts"]]);
		expect(hiddenFields(DEFAULT_QUERY)).toEqual([]);
	});
});
