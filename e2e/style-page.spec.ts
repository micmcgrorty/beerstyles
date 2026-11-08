import { expect, test, type Page } from "@playwright/test";

import { groupChip, main, searchParam, styleLinks } from "./support.ts";

async function openStyle(page: Page, index: number): Promise<{ name: string; href: string }> {
	await page.goto("/");
	let link = styleLinks(page).nth(index);
	let name = await link.innerText();
	let href = (await link.getAttribute("href"))!;
	await link.click();
	await expect(page).toHaveURL(href);
	return { name, href };
}

function section(page: Page, heading: string) {
	return main(page).locator("section", { has: page.getByRole("heading", { name: heading }) });
}

test("shows a style's guideline", async ({ page }) => {
	let { name } = await openStyle(page, 0);

	await expect(page.getByRole("heading", { level: 1 })).toHaveText(name);
	await expect(page).toHaveTitle(new RegExp(name.replace(/[.*+?^${}()|[\]\\]/g, "\\$&")));
	await expect(main(page).getByRole("img", { name: /^Colour: / })).toBeVisible();

	for (let stat of ["ABV", "IBU", "SRM", "OG", "FG"]) {
		await expect(main(page).locator("dt", { hasText: new RegExp(`^${stat}$`) })).toBeVisible();
	}

	await expect(main(page).getByRole("heading", { level: 2 }).first()).toBeVisible();
});

test("links back to the style list", async ({ page }) => {
	await openStyle(page, 0);

	await main(page).getByRole("link", { name: "All styles" }).click();

	await expect(page).toHaveURL("/");
	await expect(page.getByRole("heading", { level: 1, name: "Beer styles" })).toBeVisible();
});

test("browses similar styles by type", async ({ page }) => {
	let { href } = await openStyle(page, 0);
	let similar = section(page, "Browse similar").getByRole("link").first();
	let label = await similar.innerText();

	await similar.click();

	expect(searchParam(page, "group")).toBeTruthy();
	await expect(groupChip(page, label)).toHaveAttribute("aria-current", "true");
	await expect(styleLinks(page).and(page.locator(`[href="${href}"]`))).toHaveCount(1);
});

test("pages to the next and previous style", async ({ page }) => {
	await page.goto("/");
	let [first, second] = await styleLinks(page).evaluateAll((links) =>
		links.slice(0, 2).map((a) => a.getAttribute("href")!),
	);
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
	let last = await styleLinks(page).last().getAttribute("href");
	await page.goto(last!);
	let pager = page.getByRole("navigation", { name: "Other styles" });

	await expect(pager.getByRole("link", { name: /Previous/ })).toBeVisible();
	await expect(pager.getByRole("link", { name: /Next/ })).toHaveCount(0);
});
