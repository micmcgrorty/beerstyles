import { AxeBuilder } from "@axe-core/playwright";
import { expect, test, type Page } from "@playwright/test";

import { styleLinks } from "./support.ts";

async function firstStylePath(page: Page): Promise<string> {
	await page.goto("/");
	return (await styleLinks(page).first().getAttribute("href"))!;
}

const STATIC_PAGES = ["/", "/colour", "/bitterness", "/no/such/page"];

test.describe("accessibility", () => {
	for (let path of STATIC_PAGES) {
		test(`${path} has no axe violations`, async ({ page }) => {
			await page.goto(path);
			let { violations } = await new AxeBuilder({ page }).analyze();
			expect(violations).toEqual([]);
		});
	}

	test("a style page has no axe violations", async ({ page }) => {
		await page.goto(await firstStylePath(page));
		let { violations } = await new AxeBuilder({ page }).analyze();
		expect(violations).toEqual([]);
	});
});

test.describe("layout", () => {
	test("pages don't scroll sideways", async ({ page }) => {
		for (let path of [...STATIC_PAGES, await firstStylePath(page)]) {
			await page.goto(path);
			let overflow = await page.evaluate(
				() => document.documentElement.scrollWidth - document.documentElement.clientWidth,
			);
			expect(overflow, `horizontal overflow on ${path}`).toBeLessThanOrEqual(0);
		}
	});

	test("follows the system colour scheme", async ({ page }) => {
		let background = () => page.evaluate(() => getComputedStyle(document.body).backgroundColor);

		await page.emulateMedia({ colorScheme: "light" });
		await page.goto("/");
		let light = await background();

		await page.emulateMedia({ colorScheme: "dark" });
		let dark = await background();

		expect(dark).not.toBe(light);
	});
});
