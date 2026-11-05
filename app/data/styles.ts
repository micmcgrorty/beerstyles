import { categories } from "./bjcp-2015.ts";
import type { RawStyle } from "./types.ts";

export interface Range {
	min: number;
	max: number;
	label?: string;
}

export interface Stat {
	/** The figure as published, e.g. "4.2 - 5.3%". */
	text: string;
	/** Parsed ranges. Empty when the guidelines say the value varies by type. */
	ranges: Range[];
}

export type StatKey = "abv" | "og" | "fg" | "ibu" | "srm";

export interface Category {
	number: number;
	name: string;
}

export interface BeerStyle extends RawStyle {
	category: Category;
	/** Position in BJCP order. */
	order: number;
	stats: Record<StatKey, Stat>;
	groups: GroupId[];
}

// ---------------------------------------------------------------------------
// Parsing

const RANGE_PATTERN = /(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)\s*%?\s*(?:\(([^)]+)\))?/g;

/** Parse "5 - 14 (pale), 15 - 22 (dark)" into ranges. Returns [] for "Variable by type". */
export function parseRanges(text: string): Range[] {
	let ranges: Range[] = [];
	for (let match of text.matchAll(RANGE_PATTERN)) {
		let range: Range = { min: Number(match[1]), max: Number(match[2]) };
		if (match[3]) range.label = match[3].trim();
		ranges.push(range);
	}
	return ranges;
}

/** The overall extent of a set of ranges. */
export function span(ranges: Range[]): Range | null {
	if (ranges.length === 0) return null;
	return {
		min: Math.min(...ranges.map((r) => r.min)),
		max: Math.max(...ranges.map((r) => r.max)),
	};
}

const STAT_FORMAT: Record<StatKey, { decimals?: number; unit: string }> = {
	abv: { decimals: 1, unit: "%" },
	og: { decimals: 3, unit: "" },
	fg: { decimals: 3, unit: "" },
	ibu: { unit: "" },
	srm: { unit: "" },
};

function formatNumber(key: StatKey, n: number): string {
	let { decimals } = STAT_FORMAT[key];
	return decimals === undefined ? String(n) : n.toFixed(decimals);
}

export function formatRange(key: StatKey, r: Range): string {
	return `${formatNumber(key, r.min)}–${formatNumber(key, r.max)}${STAT_FORMAT[key].unit}`;
}

/**
 * A short display form of a stat, e.g. "4.2–5.3%".
 * Multi-range values (Saison) collapse to their overall span.
 */
export function formatStat(key: StatKey, stat: Stat): string {
	let extent = span(stat.ranges);
	return extent ? formatRange(key, extent) : "Varies";
}

/** Each published range on its own, e.g. ["5–14 (pale)", "15–22 (dark)"]. */
export function formatStatLines(key: StatKey, stat: Stat): string[] {
	if (stat.ranges.length === 0) return ["Varies by type"];
	return stat.ranges.map((r) => `${formatRange(key, r)}${r.label ? ` (${r.label})` : ""}`);
}

/** The full published form with en dashes, e.g. "5–14 (pale), 15–22 (dark)". */
export function formatStatFull(key: StatKey, stat: Stat): string {
	return formatStatLines(key, stat).join(", ");
}

// ---------------------------------------------------------------------------
// Browsing groups (broader than the BJCP family tags, so every style has one)

export const GROUPS = [
	{ id: "pale-lagers", label: "Pale lagers" },
	{ id: "amber-dark-lagers", label: "Amber & dark lagers" },
	{ id: "pale-ales", label: "Pale ales" },
	{ id: "ipas", label: "IPAs" },
	{ id: "amber-brown-ales", label: "Amber & brown ales" },
	{ id: "porters-stouts", label: "Porters & stouts" },
	{ id: "wheat", label: "Wheat beers" },
	{ id: "belgian", label: "Belgian ales" },
	{ id: "sour", label: "Sours" },
	{ id: "strong", label: "Strong ales" },
	{ id: "historical", label: "Historical" },
] as const;

export type GroupId = (typeof GROUPS)[number]["id"];

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

function groupsFor(style: RawStyle, categoryNumber: number): GroupId[] {
	let groups = new Set<GroupId>();
	for (let tag of style.tags) {
		let group = FAMILY_GROUPS[tag];
		if (group) groups.add(group);
	}
	if (style.tags.includes("sour") || style.tags.includes("wild-fermented")) groups.add("sour");
	if (categoryNumber === 21) groups.add("ipas");
	if (categoryNumber >= 24 && categoryNumber <= 26) groups.add("belgian");
	if (categoryNumber === 27) groups.add("historical");
	if (style.tags.includes("very-high-strength")) groups.add("strong");
	return GROUPS.map((g) => g.id).filter((id) => groups.has(id));
}

export function groupLabel(id: GroupId): string {
	return GROUPS.find((g) => g.id === id)?.label ?? id;
}

// ---------------------------------------------------------------------------
// The style list

export const allStyles: BeerStyle[] = categories.flatMap((category) =>
	category.styles.map((style) => ({
		...style,
		category: { number: category.number, name: category.name },
		order: 0,
		stats: {
			abv: { text: style.vitalStatistics.abv, ranges: parseRanges(style.vitalStatistics.abv) },
			og: { text: style.vitalStatistics.og, ranges: parseRanges(style.vitalStatistics.og) },
			fg: { text: style.vitalStatistics.fg, ranges: parseRanges(style.vitalStatistics.fg) },
			ibu: { text: style.vitalStatistics.ibu, ranges: parseRanges(style.vitalStatistics.ibu) },
			srm: { text: style.vitalStatistics.srm, ranges: parseRanges(style.vitalStatistics.srm) },
		},
		groups: groupsFor(style, category.number),
	})),
);
allStyles.forEach((style, i) => {
	style.order = i;
});

const bySlug = new Map(allStyles.map((s) => [s.slug, s]));

export function getStyle(slug: string) {
	let style = bySlug.get(slug);
	if (!style) return null;
	return {
		style,
		previous: allStyles[style.order - 1] ?? null,
		next: allStyles[style.order + 1] ?? null,
	};
}

// ---------------------------------------------------------------------------
// Search, filter and sort (driven by URL search params)

export const SORTS = [
	{ id: "bjcp", label: "BJCP order" },
	{ id: "name", label: "Name" },
	{ id: "abv", label: "Strength (ABV)" },
	{ id: "ibu", label: "Bitterness (IBU)" },
	{ id: "srm", label: "Colour (SRM)" },
] as const;

export type SortId = (typeof SORTS)[number]["id"];

export interface StyleQuery {
	q: string;
	group: GroupId | null;
	sort: SortId;
}

export const DEFAULT_QUERY: StyleQuery = { q: "", group: null, sort: "bjcp" };

export function parseQuery(params: URLSearchParams): StyleQuery {
	let q = (params.get("q") ?? "").trim().slice(0, 100);
	let groupParam = params.get("group");
	let group = GROUPS.find((g) => g.id === groupParam)?.id ?? null;
	let sortParam = params.get("sort");
	let sort = SORTS.find((s) => s.id === sortParam)?.id ?? "bjcp";
	return { q, group, sort };
}

/** Build `path?…` for a query, leaving out defaults so URLs stay clean. */
export function queryHref(path: string, query: StyleQuery, changes: Partial<StyleQuery> = {}) {
	let next = { ...query, ...changes };
	let params = new URLSearchParams();
	if (next.q) params.set("q", next.q);
	if (next.group) params.set("group", next.group);
	if (next.sort !== "bjcp") params.set("sort", next.sort);
	let search = params.toString();
	return search ? `${path}?${search}` : path;
}

function normalise(text: string): string {
	return text
		.toLowerCase()
		.normalize("NFD")
		.replace(/[̀-ͯ]/g, "");
}

const searchText = new Map(
	allStyles.map((s) => [
		s,
		normalise([s.name, s.code, s.category.name, s.overallImpression ?? "", ...s.commercialExamples].join(" ")),
	]),
);

function compareBy(key: StatKey) {
	return (a: BeerStyle, b: BeerStyle) => {
		let sa = span(a.stats[key].ranges);
		let sb = span(b.stats[key].ranges);
		if (!sa && !sb) return a.order - b.order;
		if (!sa) return 1;
		if (!sb) return -1;
		return sa.min - sb.min || sa.max - sb.max || a.order - b.order;
	};
}

export function findStyles(query: StyleQuery): BeerStyle[] {
	let terms = normalise(query.q).split(/\s+/).filter(Boolean);
	let results = allStyles.filter((style) => {
		if (query.group && !style.groups.includes(query.group)) return false;
		let haystack = searchText.get(style) ?? "";
		return terms.every((term) => haystack.includes(term));
	});

	switch (query.sort) {
		case "name":
			return results.sort((a, b) => a.name.localeCompare(b.name, "en"));
		case "abv":
		case "ibu":
		case "srm":
			return results.sort(compareBy(query.sort));
		default:
			return results;
	}
}

export interface CategoryGroup {
	category: Category;
	styles: BeerStyle[];
}

/** Group styles under their BJCP category, keeping the order given. */
export function groupByCategory(styles: BeerStyle[]): CategoryGroup[] {
	let groups: CategoryGroup[] = [];
	for (let style of styles) {
		let last = groups.at(-1);
		if (last && last.category.number === style.category.number) last.styles.push(style);
		else groups.push({ category: style.category, styles: [style] });
	}
	return groups;
}
