import { describe, expect, it } from "vite-plus/test";

import { DEFAULT_QUERY, parseQuery, queryHref } from "./query.ts";

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
