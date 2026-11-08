import { expect, test } from "@playwright/test";

const PAGES = [
	{ nav: "Styles", path: "/", heading: "Beer styles" },
	{ nav: "Colour", path: "/colour", heading: "Colour" },
	{ nav: "Bitterness", path: "/bitterness", heading: "Bitterness" },
];

test("the main nav reaches every page and marks the current one", async ({ page }) => {
	await page.goto("/");
	let nav = page.getByRole("navigation", { name: "Main" });

	for (let target of PAGES) {
		await nav.getByRole("link", { name: target.nav }).click();

		await expect(page).toHaveURL(target.path);
		await expect(page.getByRole("heading", { level: 1, name: target.heading })).toBeVisible();
		await expect(nav.locator('[aria-current="page"]')).toHaveText(target.nav);
	}
});

test("the site name links home", async ({ page }) => {
	await page.goto("/colour");

	await page.getByRole("banner").getByRole("link", { name: /home$/ }).click();

	await expect(page).toHaveURL("/");
});

test("back and forward restore the filtered list", async ({ page }) => {
	await page.goto("/");
	let styles = page.getByRole("main").locator('a[href^="/styles/"]');
	let name = await styles.first().innerText();
	await page.getByRole("searchbox", { name: "Search styles" }).fill(name);
	await page.getByRole("searchbox", { name: "Search styles" }).press("Enter");
	await expect(page).toHaveURL((url) => url.searchParams.get("q") === name);
	let results = await styles.allInnerTexts();

	await styles.first().click();
	await expect(page.getByRole("heading", { level: 1 })).toHaveText(name);

	await page.goBack();

	await expect(page).toHaveURL((url) => url.searchParams.get("q") === name);
	await expect(page.getByRole("searchbox", { name: "Search styles" })).toHaveValue(name);
	await expect(styles).toHaveText(results);

	await page.goForward();

	await expect(page.getByRole("heading", { level: 1 })).toHaveText(name);

	await page.goBack();
	await page.goBack();

	await expect(page).toHaveURL("/");
	await expect(page.getByRole("searchbox", { name: "Search styles" })).toHaveValue("");
});

for (let path of ["/styles/not-a-real-style", "/no/such/page"]) {
	test(`shows a not-found page for ${path}`, async ({ page }) => {
		// No status assertion: a static SPA host serves every path with 200.
		await page.goto(path);

		await expect(
			page.getByRole("heading", { level: 1, name: "Nothing on tap here" }),
		).toBeVisible();

		await page.getByRole("link", { name: "Browse all beer styles" }).click();

		await expect(page).toHaveURL("/");
	});
}
