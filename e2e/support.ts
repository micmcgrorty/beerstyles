import { expect, type Locator, type Page } from "@playwright/test";

/*
 * Shared helpers for the e2e suite.
 *
 * The suite must pass against both the Remix app and the React rewrite, and must
 * survive a data update (BJCP 2015 → 2021). So:
 * - locate elements by role, label and URL, never by class or DOM shape
 * - read expected values from the page instead of hard-coding style data
 * - identify a style by its `/styles/:slug` href, which is stable across both apps
 */

export function main(page: Page): Locator {
	return page.getByRole("main");
}

/** Links to style pages in the main content: the cards on `/`, the rows on the charts. */
export function styleLinks(page: Page): Locator {
	return main(page).locator('a[href^="/styles/"]');
}

export async function styleHrefs(page: Page): Promise<string[]> {
	return styleLinks(page).evaluateAll((links) => links.map((a) => a.getAttribute("href") ?? ""));
}

export function searchBox(page: Page): Locator {
	return page.getByRole("searchbox", { name: "Search styles" });
}

export function sortSelect(page: Page): Locator {
	return page.getByLabel("Sort");
}

export function groupChips(page: Page): Locator {
	return page.getByRole("navigation", { name: "Filter by type" }).getByRole("link");
}

export function groupChip(page: Page, label: string): Locator {
	return page
		.getByRole("navigation", { name: "Filter by type" })
		.getByRole("link", { name: label, exact: true });
}

/** The result summary under the filters: "101 styles" or "Showing 5 of 101 styles in …". */
export function resultSummary(page: Page): Locator {
	return main(page).getByText(/^(Showing \d+ of )?\d+ styles/);
}

/** Submit the filter form the way a keyboard user would. */
export async function submitFilters(page: Page): Promise<void> {
	await searchBox(page).press("Enter");
}

export async function search(page: Page, text: string): Promise<void> {
	await searchBox(page).fill(text);
	await submitFilters(page);
	await expect.poll(() => searchParam(page, "q")).toBe(text);
}

export function searchParam(page: Page, name: string): string | null {
	return new URL(page.url()).searchParams.get(name);
}

/** The total number of styles, read from the unfiltered summary ("101 styles"). */
export async function totalStyles(page: Page): Promise<number> {
	await page.goto("/");
	let text = await resultSummary(page).innerText();
	let total = Number(text.match(/^(\d+) styles/)?.[1]);
	expect(total, `unfiltered summary "${text}"`).toBeGreaterThan(0);
	return total;
}

/**
 * The lower bound of the first range in a displayed stat, e.g. "4.2–5.3%" → 4.2.
 * Values that vary by type sort last, so they read as Infinity.
 */
export function rangeMin(text: string): number {
	let match = text.match(/(\d+(?:\.\d+)?)\s*–/);
	return match ? Number(match[1]) : Number.POSITIVE_INFINITY;
}

export function expectAscending(values: number[]): void {
	expect(values.length).toBeGreaterThan(1);
	expect(values).toEqual(values.toSorted((a, b) => a - b));
}

/** Strip accents, so "Kölsch" → "Kolsch". */
export function foldAccents(text: string): string {
	return text.normalize("NFD").replace(/\p{Diacritic}/gu, "");
}
