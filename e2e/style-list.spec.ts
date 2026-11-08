import { expect, test } from "@playwright/test";

import {
	expectAscending,
	foldAccents,
	groupChip,
	groupChips,
	main,
	rangeMin,
	resultSummary,
	search,
	searchBox,
	searchParam,
	sortSelect,
	styleHrefs,
	styleLinks,
	submitFilters,
	totalStyles,
} from "./support.ts";

test.describe("style list", () => {
	test("lists every style, grouped by category", async ({ page }) => {
		let total = await totalStyles(page);

		await expect(page.getByRole("heading", { level: 1, name: "Beer styles" })).toBeVisible();
		await expect(styleLinks(page)).toHaveCount(total);
		await expect(main(page).getByRole("heading", { level: 2 }).first()).toBeVisible();
	});
});

test.describe("search", () => {
	test("finds a style by name", async ({ page }) => {
		await page.goto("/");
		let link = styleLinks(page).last();
		let name = await link.innerText();
		let href = await link.getAttribute("href");

		await search(page, name);

		expect(await styleHrefs(page)).toContain(href);
		await expect(resultSummary(page)).toContainText(`matching “${name}”`);
	});

	test("finds a style by its code", async ({ page }) => {
		await page.goto("/");
		let href = await styleLinks(page).nth(1).getAttribute("href");
		await page.goto(href!);
		let code = (await page.title()).match(/\(([^)]+)\)/)?.[1];
		expect(code, "style page title includes the code").toBeTruthy();

		await page.goto("/");
		await search(page, code!);

		expect(await styleHrefs(page)).toContain(href);
	});

	test("ignores accents", async ({ page }) => {
		await page.goto("/");
		let names = await styleLinks(page).allInnerTexts();
		let index = names.findIndex((name) => foldAccents(name) !== name);
		test.skip(index === -1, "no style names with accents in the data");
		let href = await styleLinks(page).nth(index).getAttribute("href");

		await search(page, foldAccents(names[index]));

		expect(await styleHrefs(page)).toContain(href);
	});

	test("shows an empty state that leads back to every style", async ({ page }) => {
		let total = await totalStyles(page);

		await search(page, "zzqqxx no such beer");

		await expect(styleLinks(page)).toHaveCount(0);
		await expect(main(page).getByText("No styles match those filters.")).toBeVisible();

		await main(page).getByRole("link", { name: "Show all styles" }).click();

		await expect(styleLinks(page)).toHaveCount(total);
		expect(searchParam(page, "q")).toBeNull();
	});
});

test.describe("group filter", () => {
	test("filters by type and marks the active chip", async ({ page }) => {
		let total = await totalStyles(page);
		let all = groupChip(page, "All");
		await expect(all).toHaveAttribute("aria-current", "true");

		let chip = groupChips(page).nth(1);
		let label = await chip.innerText();
		await chip.click();

		await expect(groupChip(page, label)).toHaveAttribute("aria-current", "true");
		await expect(all).not.toHaveAttribute("aria-current", "true");
		expect(searchParam(page, "group")).toBeTruthy();
		await expect(resultSummary(page)).toContainText(`in ${label}`);

		let count = await styleLinks(page).count();
		expect(count).toBeGreaterThan(0);
		expect(count).toBeLessThan(total);
		await expect(resultSummary(page)).toContainText(`Showing ${count} of ${total} styles`);
	});

	test("combines with search, and clearing resets both", async ({ page }) => {
		let total = await totalStyles(page);
		await groupChips(page).nth(1).click();
		let group = searchParam(page, "group");
		let inGroup = await styleHrefs(page);
		let name = await styleLinks(page).first().innerText();

		await search(page, name);

		expect(searchParam(page, "group")).toBe(group);
		let results = await styleHrefs(page);
		expect(results).toContain(inGroup[0]);
		expect(results.every((href) => inGroup.includes(href))).toBe(true);

		await main(page).getByRole("link", { name: "Clear filters" }).click();

		expect(searchParam(page, "q")).toBeNull();
		expect(searchParam(page, "group")).toBeNull();
		await expect(styleLinks(page)).toHaveCount(total);
		await expect(searchBox(page)).toHaveValue("");
	});
});

test.describe("sort", () => {
	test("sorts by name", async ({ page }) => {
		await page.goto("/");
		await sortSelect(page).selectOption({ label: "Name" });
		await submitFilters(page);

		await expect.poll(() => searchParam(page, "sort")).toBe("name");
		await expect(sortSelect(page)).toHaveValue("name");
		let names = await styleLinks(page).allInnerTexts();
		expect(names).toEqual(names.toSorted((a, b) => a.localeCompare(b, "en")));
	});

	test("sorts by strength", async ({ page }) => {
		await page.goto("/");
		await sortSelect(page).selectOption({ label: "Strength (ABV)" });
		await submitFilters(page);

		await expect.poll(() => searchParam(page, "sort")).toBe("abv");
		let abv = await main(page)
			.locator("dt", { hasText: /^ABV$/ })
			.locator("xpath=following-sibling::dd[1]")
			.allInnerTexts();
		expectAscending(abv.map(rangeMin));
	});

	test("keeps the sort when filtering by type", async ({ page }) => {
		await page.goto("/?sort=name");
		await groupChips(page).nth(1).click();

		expect(searchParam(page, "sort")).toBe("name");
		await expect(sortSelect(page)).toHaveValue("name");
	});
});

test("restores filters from a shared URL", async ({ page, browser }) => {
	await page.goto("/");
	await groupChips(page).nth(1).click();
	let chip = await groupChips(page).nth(1).innerText();
	let name = await styleLinks(page).first().innerText();
	await search(page, name);
	await sortSelect(page).selectOption({ label: "Name" });
	await submitFilters(page);
	await expect.poll(() => searchParam(page, "sort")).toBe("name");
	let results = await styleHrefs(page);

	let fresh = await browser.newPage();
	await fresh.goto(page.url());

	await expect(searchBox(fresh)).toHaveValue(name);
	await expect(sortSelect(fresh)).toHaveValue("name");
	await expect(groupChip(fresh, chip)).toHaveAttribute("aria-current", "true");
	expect(await styleHrefs(fresh)).toEqual(results);
	await fresh.close();
});
