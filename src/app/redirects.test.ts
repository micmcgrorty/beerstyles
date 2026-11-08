import { describe, expect, it } from "vite-plus/test";

import { allStyles } from "../catalogue/styles.ts";
import { paths } from "./paths.ts";
import { netlifyRedirects } from "./redirects.ts";

describe("netlifyRedirects", () => {
	let lines = netlifyRedirects().trimEnd().split("\n");

	it("serves every page with 200", () => {
		for (let page of [paths.home, paths.colour, paths.bitterness]) {
			expect(lines).toContain(`${page} /index.html 200`);
		}
		for (let style of allStyles) {
			expect(lines).toContain(`${paths.style(style.slug)} /index.html 200`);
		}
	});

	it("ends with a catch-all 404, so it only applies when nothing else matched", () => {
		expect(lines.at(-1)).toBe("/* /index.html 404");
		expect(lines.filter((line) => line.endsWith(" 404"))).toHaveLength(1);
	});
});
