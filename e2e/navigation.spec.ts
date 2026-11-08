import { expect, test } from "@playwright/test";

import { main, search, searchBox, searchParam, styleHrefs, styleLinks } from "./support.ts";

const PAGES = [
	{ nav: "Styles", path: "/", heading: "Beer styles" },
	{ nav: "Colour", path: "/colour", heading: "Colour" },
	{ nav: "Bitterness", path: "/bitterness", heading: "Bitterness" },
];

function mainNav(page: import("@playwright/test").Page) {
	return page.getByRole("navigation", { name: "Main" });
}

test("the main nav reaches every page and marks the current one", async ({ page }) => {
	await page.goto("/");

	for (let target of PAGES) {
		await mainNav(page).getByRole("link", { name: target.nav }).click();

		await expect(page).toHaveURL(target.path);
		await expect(page.getByRole("heading", { level: 1, name: target.heading })).toBeVisible();
		await expect(mainNav(page).getByRole("link", { name: target.nav })).toHaveAttribute(
			"aria-current",
			"page",
		);
		for (let other of PAGES.filter((p) => p !== target)) {
			await expect(mainNav(page).getByRole("link", { name: other.nav })).not.toHaveAttribute(
				"aria-current",
				"page",
			);
		}
	}
});

test("the site name links home", async ({ page }) => {
	await page.goto("/colour");

	await page.getByRole("banner").getByRole("link", { name: /home$/ }).click();

	await expect(page).toHaveURL("/");
});

test("back and forward restore the filtered list", async ({ page }) => {
	await page.goto("/");
	let name = await styleLinks(page).first().innerText();
	await search(page, name);
	let filteredUrl = page.url();
	let results = await styleHrefs(page);

	await styleLinks(page).first().click();
	await expect(page.getByRole("heading", { level: 1 })).toHaveText(name);

	await page.goBack();
	await expect(page).toHaveURL(filteredUrl);
	await expect(searchBox(page)).toHaveValue(name);
	expect(await styleHrefs(page)).toEqual(results);

	await page.goForward();
	await expect(page.getByRole("heading", { level: 1 })).toHaveText(name);

	await page.goBack();
	await page.goBack();
	await expect(page).toHaveURL("/");
	expect(searchParam(page, "q")).toBeNull();
	await expect(searchBox(page)).toHaveValue("");
});

test.describe("not found", () => {
	for (let path of ["/styles/not-a-real-style", "/no/such/page"]) {
		test(`shows a not-found page for ${path}`, async ({ page }) => {
			// No status assertion: a static SPA host serves every path with 200.
			await page.goto(path);

			await expect(
				page.getByRole("heading", { level: 1, name: "Nothing on tap here" }),
			).toBeVisible();

			await main(page).getByRole("link", { name: "Browse all beer styles" }).click();
			await expect(page).toHaveURL("/");
		});
	}
});
