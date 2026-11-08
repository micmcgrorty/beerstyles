import { expect, test } from "@playwright/test";

const CHARTS = [
	{ path: "/colour", heading: "Colour", sortLabel: "Colour (SRM)", sort: "srm" },
	{ path: "/bitterness", heading: "Bitterness", sortLabel: "Bitterness (IBU)", sort: "ibu" },
];

for (let chart of CHARTS) {
	test.describe(`${chart.heading} chart`, () => {
		test("charts every style", async ({ page }) => {
			await page.goto(chart.path);
			// The unfiltered summary reads "N styles".
			let total = parseInt(
				await page
					.getByRole("main")
					.getByText(/^\d+ styles$/)
					.innerText(),
			);

			await expect(page.getByRole("heading", { level: 1, name: chart.heading })).toBeVisible();
			await expect(page.getByRole("main").locator('a[href^="/styles/"]')).toHaveCount(total);
		});

		test("filters by type without leaving the chart", async ({ page }) => {
			await page.goto(chart.path);
			let rows = page.getByRole("main").locator('a[href^="/styles/"]');
			let total = parseInt(
				await page
					.getByRole("main")
					.getByText(/^\d+ styles$/)
					.innerText(),
			);
			let chips = page.getByRole("navigation", { name: "Filter by type" }).getByRole("link");
			let label = await chips.nth(1).innerText();

			await chips.nth(1).click();

			await expect(page).toHaveURL(
				(url) => url.pathname === chart.path && url.searchParams.has("group"),
			);
			await expect(
				page
					.getByRole("navigation", { name: "Filter by type" })
					.getByRole("link", { name: label, exact: true }),
			).toHaveAttribute("aria-current", "true");
			let count = await rows.count();
			expect(count).toBeGreaterThan(0);
			expect(count).toBeLessThan(total);
		});

		test(`sorts by ${chart.sort.toUpperCase()}`, async ({ page }) => {
			await page.goto(chart.path);

			await page.getByLabel("Sort").selectOption({ label: chart.sortLabel });
			await page.getByRole("searchbox", { name: "Search styles" }).press("Enter");

			await expect(page).toHaveURL(
				(url) => url.pathname === chart.path && url.searchParams.get("sort") === chart.sort,
			);
			// Retry: the chart can re-render a moment after the URL changes.
			await expect(async () => {
				let rows = await page
					.getByRole("main")
					.getByRole("listitem")
					.filter({ has: page.locator('a[href^="/styles/"]') })
					.allInnerTexts();
				// Each row ends with the charted range, e.g. "8–12 IBU" → 8.
				// Styles that vary by type have no range and sort last.
				let mins = rows.map((text) => Number(text.match(/[\d.]+(?=\s*–)/)?.[0] ?? Infinity));
				expect(mins.length).toBeGreaterThan(1);
				expect(mins).toEqual(mins.toSorted((a, b) => a - b));
			}).toPass();
		});
	});
}
