import type { Guideline } from "./types.ts";

// One lazily loaded chunk per style, so the long-form text stays out of the main bundle.
const files = import.meta.glob<Guideline>("./bjcp-2015/guidelines/*.json", { import: "default" });

/** Load a style's guideline text, or null when there's no style with that slug. */
export async function loadGuideline(slug: string): Promise<Guideline | null> {
	let load = files[`./bjcp-2015/guidelines/${slug}.json`];
	return load ? load() : null;
}
