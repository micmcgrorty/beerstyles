import { expect, test } from "@playwright/test";

test.describe("compare: choosing styles", () => {
	test("puts each choice in the URL", async ({ page }) => {
		await page.goto("/compare");
		let first = page.getByLabel("First style");
		let second = page.getByLabel("Second style");

		let a = await first.locator("option").nth(1).getAttribute("value");
		await first.selectOption({ index: 1 });
		await expect(page).toHaveURL((url) => url.searchParams.get("a") === a);

		let b = await second.locator("option").nth(2).getAttribute("value");
		await second.selectOption({ index: 2 });
		await expect(page).toHaveURL(
			(url) => url.searchParams.get("a") === a && url.searchParams.get("b") === b,
		);
	});

	test("clearing a choice takes it out of the URL", async ({ page }) => {
		await page.goto("/compare");
		await page.getByLabel("First style").selectOption({ index: 1 });
		await expect(page).toHaveURL((url) => url.searchParams.has("a"));

		await page.getByLabel("First style").selectOption({ index: 0 });

		await expect(page).toHaveURL((url) => !url.searchParams.has("a"));
		await expect(page.getByLabel("First style")).toHaveValue("");
	});

	test("restores both choices from a shared URL", async ({ page, browser }) => {
		await page.goto("/compare");
		let a = await page.getByLabel("First style").locator("option").nth(3).getAttribute("value");
		let b = await page.getByLabel("Second style").locator("option").nth(4).getAttribute("value");
		await page.getByLabel("First style").selectOption({ index: 3 });
		await page.getByLabel("Second style").selectOption({ index: 4 });
		await expect(page).toHaveURL(
			(url) => url.searchParams.get("a") === a && url.searchParams.get("b") === b,
		);

		let shared = await browser.newPage();
		await shared.goto(page.url());

		await expect(shared.getByLabel("First style")).toHaveValue(a!);
		await expect(shared.getByLabel("Second style")).toHaveValue(b!);
		await shared.close();
	});

	test("swaps A and B", async ({ page }) => {
		await page.goto("/compare");
		let a = await page.getByLabel("First style").locator("option").nth(1).getAttribute("value");
		let b = await page.getByLabel("Second style").locator("option").nth(2).getAttribute("value");
		await page.getByLabel("First style").selectOption({ index: 1 });
		await expect(page).toHaveURL((url) => url.searchParams.get("a") === a);
		await page.getByLabel("Second style").selectOption({ index: 2 });
		await expect(page).toHaveURL((url) => url.searchParams.get("b") === b);

		await page.getByRole("link", { name: "Swap styles A and B" }).click();

		await expect(page).toHaveURL(
			(url) => url.searchParams.get("a") === b && url.searchParams.get("b") === a,
		);
		await expect(page.getByLabel("First style")).toHaveValue(b!);
		await expect(page.getByLabel("Second style")).toHaveValue(a!);
	});

	test("back and forward step through choices", async ({ page }) => {
		await page.goto("/compare");
		let a = await page.getByLabel("First style").locator("option").nth(1).getAttribute("value");
		await page.getByLabel("First style").selectOption({ index: 1 });
		await expect(page).toHaveURL((url) => url.searchParams.get("a") === a);
		await page.getByLabel("Second style").selectOption({ index: 2 });
		await expect(page).toHaveURL((url) => url.searchParams.has("b"));

		await page.goBack();

		await expect(page).toHaveURL(
			(url) => url.searchParams.get("a") === a && !url.searchParams.has("b"),
		);
		await expect(page.getByLabel("Second style")).toHaveValue("");

		await page.goForward();

		await expect(page).toHaveURL((url) => url.searchParams.has("b"));
	});

	test("ignores a style it can't find, and says so", async ({ page }) => {
		await page.goto("/compare");
		let known = await page.getByLabel("First style").locator("option").nth(1).getAttribute("value");

		await page.goto(`/compare?a=${known}&b=not-a-real-style`);

		await expect(page.getByRole("status")).toContainText("not-a-real-style");
		await expect(page.getByLabel("First style")).toHaveValue(known!);
		await expect(page.getByLabel("Second style")).toHaveValue("");
	});
});
