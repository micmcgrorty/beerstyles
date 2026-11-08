import { expect, test } from "@playwright/test";

test("shows a style's guideline", async ({ page }) => {
	await page.goto("/");
	let style = page.getByRole("main").locator('a[href^="/styles/"]').first();
	let name = await style.innerText();

	await style.click();

	await expect(page.getByRole("heading", { level: 1 })).toHaveText(name);
	expect(await page.title()).toContain(name);
	await expect(page.getByRole("img", { name: /^Colour: / })).toBeVisible();
	for (let stat of ["ABV", "IBU", "SRM", "OG", "FG"]) {
		await expect(page.getByRole("main").getByText(stat, { exact: true })).toBeVisible();
	}
	await expect(page.getByRole("main").getByRole("heading", { level: 2 }).first()).toBeVisible();
});

test("links back to the style list", async ({ page }) => {
	await page.goto("/");
	await page.getByRole("main").locator('a[href^="/styles/"]').first().click();

	await page.getByRole("link", { name: "All styles" }).click();

	await expect(page).toHaveURL("/");
	await expect(page.getByRole("heading", { level: 1, name: "Beer styles" })).toBeVisible();
});

test("browses similar styles by type", async ({ page }) => {
	await page.goto("/");
	let style = page.getByRole("main").locator('a[href^="/styles/"]').first();
	let href = await style.getAttribute("href");
	await style.click();
	let similar = page
		.locator("section", { has: page.getByRole("heading", { name: "Browse similar" }) })
		.getByRole("link")
		.first();
	let label = await similar.innerText();

	await similar.click();

	await expect(page).toHaveURL((url) => url.searchParams.has("group"));
	await expect(
		page
			.getByRole("navigation", { name: "Filter by type" })
			.getByRole("link", { name: label, exact: true }),
	).toHaveAttribute("aria-current", "true");
	await expect(page.getByRole("main").locator(`a[href="${href}"]`)).toBeVisible();
});

test("pages to the next and previous style", async ({ page }) => {
	await page.goto("/");
	let styles = page.getByRole("main").locator('a[href^="/styles/"]');
	let first = (await styles.nth(0).getAttribute("href"))!;
	let second = (await styles.nth(1).getAttribute("href"))!;
	await page.goto(first);
	let pager = page.getByRole("navigation", { name: "Other styles" });

	await expect(pager.getByRole("link", { name: /Previous/ })).toHaveCount(0);
	await pager.getByRole("link", { name: /Next/ }).click();

	await expect(page).toHaveURL(second);

	await pager.getByRole("link", { name: /Previous/ }).click();

	await expect(page).toHaveURL(first);
});

test("the last style has no next link", async ({ page }) => {
	await page.goto("/");
	let last = await page
		.getByRole("main")
		.locator('a[href^="/styles/"]')
		.last()
		.getAttribute("href");

	await page.goto(last!);

	let pager = page.getByRole("navigation", { name: "Other styles" });
	await expect(pager.getByRole("link", { name: /Previous/ })).toBeVisible();
	await expect(pager.getByRole("link", { name: /Next/ })).toHaveCount(0);
});
