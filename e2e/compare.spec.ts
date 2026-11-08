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

test.describe("compare: the comparison", () => {
	test("shows both styles side by side", async ({ page }) => {
		await page.goto("/compare");
		let aOption = page.getByLabel("First style").locator("option").nth(1);
		// Option labels read "5B Kölsch": the code, then the name.
		let a = {
			slug: (await aOption.getAttribute("value"))!,
			name: (await aOption.innerText()).split(" ").slice(1).join(" "),
		};
		let bOption = page.getByLabel("First style").locator("option").nth(2);
		// Option labels read "5B Kölsch": the code, then the name.
		let b = {
			slug: (await bOption.getAttribute("value"))!,
			name: (await bOption.innerText()).split(" ").slice(1).join(" "),
		};

		await page.goto(`/compare?a=${a.slug}&b=${b.slug}`);

		await expect(page.getByRole("heading", { level: 1 })).toHaveText(`${a.name} vs ${b.name}`);
		await expect(page).toHaveTitle(new RegExp(`${a.name} vs ${b.name}`));
		await expect(page.getByRole("heading", { level: 2, name: a.name })).toBeVisible();
		await expect(page.getByRole("heading", { level: 2, name: b.name })).toBeVisible();
		let table = page.getByRole("table");
		await expect(table.getByRole("columnheader", { name: a.name })).toBeVisible();
		await expect(table.getByRole("columnheader", { name: b.name })).toBeVisible();
		for (let stat of ["ABV", "IBU", "SRM", "OG", "FG"]) {
			await expect(table.getByRole("rowheader", { name: stat })).toBeVisible();
		}
		await expect(page.getByRole("heading", { level: 2, name: "Aroma" })).toBeVisible();
	});

	test("links each style to its own page", async ({ page }) => {
		await page.goto("/compare");
		let aOption = page.getByLabel("First style").locator("option").nth(1);
		// Option labels read "5B Kölsch": the code, then the name.
		let a = {
			slug: (await aOption.getAttribute("value"))!,
			name: (await aOption.innerText()).split(" ").slice(1).join(" "),
		};
		let bOption = page.getByLabel("First style").locator("option").nth(2);
		// Option labels read "5B Kölsch": the code, then the name.
		let b = {
			slug: (await bOption.getAttribute("value"))!,
			name: (await bOption.innerText()).split(" ").slice(1).join(" "),
		};
		await page.goto(`/compare?a=${a.slug}&b=${b.slug}`);

		await page.getByRole("heading", { level: 2, name: b.name }).getByRole("link").click();

		await expect(page).toHaveURL(`/styles/${b.slug}`);
		await expect(page.getByRole("heading", { level: 1 })).toHaveText(b.name);
	});

	test("with one style chosen, asks for the other", async ({ page }) => {
		await page.goto("/compare");
		let aOption = page.getByLabel("First style").locator("option").nth(1);
		// Option labels read "5B Kölsch": the code, then the name.
		let a = {
			slug: (await aOption.getAttribute("value"))!,
			name: (await aOption.innerText()).split(" ").slice(1).join(" "),
		};

		await page.goto(`/compare?a=${a.slug}`);

		await expect(page.getByRole("heading", { level: 2, name: a.name })).toBeVisible();
		await expect(page.getByText("Choose a second style")).toBeVisible();
		await expect(page.getByRole("table")).toHaveCount(0);
	});

	test("says so when a style is compared with itself", async ({ page }) => {
		await page.goto("/compare");
		let aOption = page.getByLabel("First style").locator("option").nth(1);
		// Option labels read "5B Kölsch": the code, then the name.
		let a = {
			slug: (await aOption.getAttribute("value"))!,
			name: (await aOption.innerText()).split(" ").slice(1).join(" "),
		};

		await page.goto(`/compare?a=${a.slug}&b=${a.slug}`);

		await expect(page.getByText(`You're comparing ${a.name} with itself.`)).toBeVisible();
	});
});
