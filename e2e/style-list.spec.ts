import { expect, test } from "@playwright/test";

test("lists every style, grouped by category", async ({ page }) => {
	await page.goto("/");
	// The unfiltered summary reads "N styles".
	let total = parseInt(
		await page
			.getByRole("main")
			.getByText(/^\d+ styles$/)
			.innerText(),
	);

	await expect(page.getByRole("heading", { level: 1, name: "Beer styles" })).toBeVisible();
	await expect(page.getByRole("main").locator('a[href^="/styles/"]')).toHaveCount(total);
	await expect(page.getByRole("main").getByRole("heading", { level: 2 }).first()).toBeVisible();
});

test.describe("search", () => {
	test("finds a style by name", async ({ page }) => {
		await page.goto("/");
		let style = page.getByRole("main").locator('a[href^="/styles/"]').last();
		// textContent, not innerText: the browser skips rendering off-screen cards, and innerText is empty for those.
		let name = (await style.textContent())!;
		let href = await style.getAttribute("href");

		await page.getByRole("searchbox", { name: "Search styles" }).fill(name);
		await page.getByRole("searchbox", { name: "Search styles" }).press("Enter");

		await expect(page).toHaveURL((url) => url.searchParams.get("q") === name);
		await expect(page.getByRole("main").locator(`a[href="${href}"]`)).toBeVisible();
		await expect(page.getByRole("main").getByText(`matching “${name}”`)).toBeVisible();
	});

	test("finds a style by its code", async ({ page }) => {
		await page.goto("/");
		let href = await page
			.getByRole("main")
			.locator('a[href^="/styles/"]')
			.nth(1)
			.getAttribute("href");
		await page.goto(href!);
		// Style page titles read "Name (code) – BJCP Beer Styles". Wait for the page to set it.
		await expect(page).toHaveTitle(/\(.+\)/);
		let code = (await page.title()).match(/\(([^)]+)\)/)![1];

		await page.goto("/");
		await page.getByRole("searchbox", { name: "Search styles" }).fill(code);
		await page.getByRole("searchbox", { name: "Search styles" }).press("Enter");

		await expect(page).toHaveURL((url) => url.searchParams.get("q") === code);
		await expect(page.getByRole("main").locator(`a[href="${href}"]`)).toBeVisible();
	});

	test("ignores accents", async ({ page }) => {
		await page.goto("/");
		let styles = page.getByRole("main").locator('a[href^="/styles/"]');
		await expect(styles.first()).toBeVisible();
		let names = await styles.allTextContents();
		let unaccented = names.map((name) => name.normalize("NFD").replace(/\p{Diacritic}/gu, ""));
		let index = names.findIndex((name, i) => unaccented[i] !== name);
		test.skip(index === -1, "no style names with accents in the data");
		let href = await styles.nth(index).getAttribute("href");

		await page.getByRole("searchbox", { name: "Search styles" }).fill(unaccented[index]);
		await page.getByRole("searchbox", { name: "Search styles" }).press("Enter");

		await expect(page).toHaveURL((url) => url.searchParams.has("q"));
		await expect(page.getByRole("main").locator(`a[href="${href}"]`)).toBeVisible();
	});

	test("shows an empty state that leads back to every style", async ({ page }) => {
		await page.goto("/");
		let styles = page.getByRole("main").locator('a[href^="/styles/"]');
		let total = parseInt(
			await page
				.getByRole("main")
				.getByText(/^\d+ styles$/)
				.innerText(),
		);

		await page.getByRole("searchbox", { name: "Search styles" }).fill("zzqqxx no such beer");
		await page.getByRole("searchbox", { name: "Search styles" }).press("Enter");

		await expect(page.getByText("No styles match those filters.")).toBeVisible();
		await expect(styles).toHaveCount(0);

		await page.getByRole("link", { name: "Show all styles" }).click();

		await expect(page).toHaveURL((url) => !url.searchParams.has("q"));
		await expect(styles).toHaveCount(total);
	});
});

test.describe("group filter", () => {
	test("filters by type and marks the active chip", async ({ page }) => {
		await page.goto("/");
		let styles = page.getByRole("main").locator('a[href^="/styles/"]');
		let total = parseInt(
			await page
				.getByRole("main")
				.getByText(/^\d+ styles$/)
				.innerText(),
		);
		let chips = page.getByRole("navigation", { name: "Filter by type" }).getByRole("link");
		let all = page
			.getByRole("navigation", { name: "Filter by type" })
			.getByRole("link", { name: "All", exact: true });
		await expect(all).toHaveAttribute("aria-current", "true");

		let label = await chips.nth(1).innerText();
		await chips.nth(1).click();

		await expect(page).toHaveURL((url) => url.searchParams.has("group"));
		await expect(
			page
				.getByRole("navigation", { name: "Filter by type" })
				.getByRole("link", { name: label, exact: true }),
		).toHaveAttribute("aria-current", "true");
		await expect(all).not.toHaveAttribute("aria-current");
		let count = await styles.count();
		expect(count).toBeGreaterThan(0);
		expect(count).toBeLessThan(total);
		await expect(page.getByText(`Showing ${count} of ${total} styles in ${label}`)).toBeVisible();
	});

	test("combines with search, and clearing resets both", async ({ page }) => {
		await page.goto("/");
		let styles = page.getByRole("main").locator('a[href^="/styles/"]');
		let total = parseInt(
			await page
				.getByRole("main")
				.getByText(/^\d+ styles$/)
				.innerText(),
		);
		await page.getByRole("navigation", { name: "Filter by type" }).getByRole("link").nth(1).click();
		await expect(page).toHaveURL((url) => url.searchParams.has("group"));
		await expect(page.getByText(/^Showing \d+ of \d+ styles in /)).toBeVisible();
		let inGroup = await styles.count();
		let name = await styles.first().innerText();

		await page.getByRole("searchbox", { name: "Search styles" }).fill(name);
		await page.getByRole("searchbox", { name: "Search styles" }).press("Enter");

		await expect(page).toHaveURL(
			(url) => url.searchParams.get("q") === name && url.searchParams.has("group"),
		);
		await expect(page.getByText(`matching “${name}”`)).toBeVisible();
		let count = await styles.count();
		expect(count).toBeGreaterThan(0);
		expect(count).toBeLessThanOrEqual(inGroup);

		await page.getByRole("link", { name: "Clear filters" }).click();

		await expect(page).toHaveURL((url) => url.search === "");
		await expect(styles).toHaveCount(total);
		await expect(page.getByRole("searchbox", { name: "Search styles" })).toHaveValue("");
	});
});

test.describe("sort", () => {
	test("sorts by name", async ({ page }) => {
		await page.goto("/");

		await page.getByLabel("Sort").selectOption({ label: "Name" });
		await page.getByRole("searchbox", { name: "Search styles" }).press("Enter");

		await expect(page).toHaveURL((url) => url.searchParams.get("sort") === "name");
		await expect(page.getByLabel("Sort")).toHaveValue("name");
		// Retry: the list can re-render a moment after the URL changes.
		await expect(async () => {
			let names = await page.getByRole("main").locator('a[href^="/styles/"]').allTextContents();
			expect(names).toEqual(names.toSorted((a, b) => a.localeCompare(b, "en")));
		}).toPass();
	});

	test("sorts by strength", async ({ page }) => {
		await page.goto("/");

		await page.getByLabel("Sort").selectOption({ label: "Strength (ABV)" });
		await page.getByRole("searchbox", { name: "Search styles" }).press("Enter");

		await expect(page).toHaveURL((url) => url.searchParams.get("sort") === "abv");
		// Retry: the list can re-render a moment after the URL changes.
		await expect(async () => {
			let abv = await page
				.getByRole("main")
				.locator("dt", { hasText: /^ABV$/ })
				.locator("xpath=following-sibling::dd[1]")
				.allTextContents();
			// "4.2–5.3%" → 4.2; styles that vary by type have no range and sort last.
			let mins = abv.map((text) => Number(text.match(/[\d.]+(?=\s*–)/)?.[0] ?? Infinity));
			expect(mins.length).toBeGreaterThan(1);
			expect(mins).toEqual(mins.toSorted((a, b) => a - b));
		}).toPass();
	});

	test("keeps the sort when filtering by type", async ({ page }) => {
		await page.goto("/?sort=name");

		await page.getByRole("navigation", { name: "Filter by type" }).getByRole("link").nth(1).click();

		await expect(page).toHaveURL(
			(url) => url.searchParams.get("sort") === "name" && url.searchParams.has("group"),
		);
		await expect(page.getByLabel("Sort")).toHaveValue("name");
	});
});

test("restores filters from a shared URL", async ({ page, browser }) => {
	await page.goto("/");
	let chips = page.getByRole("navigation", { name: "Filter by type" }).getByRole("link");
	let label = await chips.nth(1).innerText();
	await chips.nth(1).click();
	await expect(chips.nth(1)).toHaveAttribute("aria-current", "true");
	await page.getByLabel("Sort").selectOption({ label: "Name" });
	await page.getByRole("searchbox", { name: "Search styles" }).press("Enter");
	await expect(page).toHaveURL(
		(url) => url.searchParams.get("sort") === "name" && url.searchParams.has("group"),
	);
	let results: string[] = [];
	// Retry: the list can re-render a moment after the URL changes.
	await expect(async () => {
		results = await page.getByRole("main").locator('a[href^="/styles/"]').allTextContents();
		expect(results).toEqual(results.toSorted((a, b) => a.localeCompare(b, "en")));
	}).toPass();

	let shared = await browser.newPage();
	await shared.goto(page.url());

	await expect(shared.getByLabel("Sort")).toHaveValue("name");
	await expect(
		shared
			.getByRole("navigation", { name: "Filter by type" })
			.getByRole("link", { name: label, exact: true }),
	).toHaveAttribute("aria-current", "true");
	await expect(shared.getByRole("main").locator('a[href^="/styles/"]')).toHaveText(results);
	await shared.close();
});
