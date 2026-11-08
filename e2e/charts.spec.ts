import { expect, test } from "@playwright/test";

import {
	expectAscending,
	groupChip,
	groupChips,
	main,
	rangeMin,
	resultSummary,
	searchParam,
	sortSelect,
	styleLinks,
	submitFilters,
	totalStyles,
} from "./support.ts";

const CHARTS = [
	{ path: "/colour", heading: "Colour", sort: "Colour (SRM)", param: "srm" },
	{ path: "/bitterness", heading: "Bitterness", sort: "Bitterness (IBU)", param: "ibu" },
];

for (let chart of CHARTS) {
	test.describe(`${chart.heading} chart`, () => {
		test("charts every style", async ({ page }) => {
			let total = await totalStyles(page);
			await page.goto(chart.path);

			await expect(page.getByRole("heading", { level: 1, name: chart.heading })).toBeVisible();
			await expect(styleLinks(page)).toHaveCount(total);
		});

		test("filters by type without leaving the chart", async ({ page }) => {
			let total = await totalStyles(page);
			await page.goto(chart.path);
			let label = await groupChips(page).nth(1).innerText();

			await groupChip(page, label).click();

			await expect(page).toHaveURL(new RegExp(`^[^?]*${chart.path}\\?`));
			await expect(groupChip(page, label)).toHaveAttribute("aria-current", "true");
			let count = await styleLinks(page).count();
			expect(count).toBeGreaterThan(0);
			expect(count).toBeLessThan(total);
			await expect(resultSummary(page)).toContainText(`Showing ${count} of ${total} styles`);
		});

		test(`sorts by ${chart.param.toUpperCase()}`, async ({ page }) => {
			await page.goto(chart.path);
			await sortSelect(page).selectOption({ label: chart.sort });
			await submitFilters(page);

			await expect.poll(() => searchParam(page, "sort")).toBe(chart.param);
			await expect(page).toHaveURL(new RegExp(`^[^?]*${chart.path}\\?`));
			let rows = await main(page)
				.getByRole("listitem")
				.filter({ has: page.locator('a[href^="/styles/"]') })
				.allInnerTexts();
			// Each row shows the charted stat; the style link text comes first and may hold a code
			// like "21A", so read the range after the name.
			expectAscending(rows.map((row) => rangeMin(row.split("\n").at(-1) ?? "")));
		});
	});
}
