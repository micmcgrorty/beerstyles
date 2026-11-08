import { expect, test } from "@playwright/test";

test("pages don't scroll sideways", async ({ page }) => {
	await page.goto("/");
	let stylePage = await page
		.getByRole("main")
		.locator('a[href^="/styles/"]')
		.first()
		.getAttribute("href");

	for (let path of ["/", "/colour", "/bitterness", stylePage!, "/no/such/page"]) {
		await page.goto(path);

		let overflow = await page.evaluate(
			() => document.documentElement.scrollWidth - document.documentElement.clientWidth,
		);
		expect(overflow, `horizontal overflow on ${path}`).toBeLessThanOrEqual(0);
	}
});

test("follows the system colour scheme", async ({ page }) => {
	await page.emulateMedia({ colorScheme: "light" });
	await page.goto("/");
	let light = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);

	await page.emulateMedia({ colorScheme: "dark" });

	let dark = await page.evaluate(() => getComputedStyle(document.body).backgroundColor);
	expect(dark).not.toBe(light);
});
