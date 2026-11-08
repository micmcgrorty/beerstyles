import type { Edition } from "../catalogue.ts";
import { GROUPS, type GroupId } from "../query.ts";
import type { Guideline, RawCategory, RawStyle } from "../types.ts";
import catalogue from "./catalogue.json";

// BJCP family tags that map straight to a browsing group.
const FAMILY_GROUPS: Record<string, GroupId> = {
	"pale-lager-family": "pale-lagers",
	"pilsner-family": "pale-lagers",
	"amber-lager-family": "amber-dark-lagers",
	"dark-lager-family": "amber-dark-lagers",
	"bock-family": "amber-dark-lagers",
	"pale-ale-family": "pale-ales",
	"ipa-family": "ipas",
	"amber-ale-family": "amber-brown-ales",
	"brown-ale-family": "amber-brown-ales",
	"porter-family": "porters-stouts",
	"stout-family": "porters-stouts",
	"wheat-beer-family": "wheat",
	"sour-ale-family": "sour",
	"strong-ale-family": "strong",
};

/** 2015 group rules: family tags, a few other tags, and some whole categories by number. */
function groupsFor(style: RawStyle, category: RawCategory): GroupId[] {
	let groups = new Set<GroupId>();
	for (let tag of style.tags) {
		let group = FAMILY_GROUPS[tag];
		if (group) groups.add(group);
	}
	if (style.tags.includes("sour") || style.tags.includes("wild-fermented")) groups.add("sour");
	if (style.tags.includes("very-high-strength")) groups.add("strong");
	if (category.number === 21) groups.add("ipas"); // 21: IPA
	if (category.number >= 24 && category.number <= 26) groups.add("belgian"); // 24–26: Belgian ales
	if (category.number === 27) groups.add("historical"); // 27: Historical Beer
	return GROUPS.map((g) => g.id).filter((id) => groups.has(id));
}

/** The BJCP 2015 Beer Style Guidelines. See README.md for the data and its corrections. */
export const BJCP_2015: Edition = {
	name: "BJCP 2015",
	categories: catalogue,
	groupsFor,
	sections: [
		{ key: "aroma", heading: "Aroma" },
		{ key: "appearance", heading: "Appearance" },
		{ key: "flavor", heading: "Flavour" },
		{ key: "mouthfeel", heading: "Mouthfeel" },
		{ key: "comments", heading: "Comments" },
		{ key: "history", heading: "History" },
		{ key: "ingredients", heading: "Characteristic ingredients" },
		{ key: "comparison", heading: "Style comparison" },
		{ key: "entryInstructions", heading: "Entry instructions" },
	],
	async loadGuideline(slug) {
		// One lazily loaded chunk per style, so the long-form text stays out of the main bundle.
		// The glob sits inside this function because vite.config.ts imports this module (for the
		// redirects' style URLs) before Vite can transform import.meta.glob.
		let files = import.meta.glob<Guideline>("./guidelines/*.json", { import: "default" });
		let load = files[`./guidelines/${slug}.json`];
		return load ? load() : null;
	},
};
