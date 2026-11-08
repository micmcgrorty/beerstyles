import catalogue from "./bjcp-2015/catalogue.json";
import { STATS, STAT_KEYS, parseStats, span, type Stat, type StatKey } from "./stats.ts";
import type { RawCategory, RawStyle } from "./types.ts";

const categories: RawCategory[] = catalogue;

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
		stats: parseStats(style.vitalStatistics),
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

/** BJCP order, name, or any stat. Only stats marked sortable are offered as options. */
export type SortId = "bjcp" | "name" | StatKey;

/** The sort options, e.g. "Bitterness (IBU)". */
export const SORTS: { id: SortId; label: string }[] = [
	{ id: "bjcp", label: "BJCP order" },
	{ id: "name", label: "Name" },
	...STAT_KEYS.filter((key) => STATS[key].sortable).map((key) => ({
		id: key,
		label: `${STATS[key].label} (${STATS[key].abbr})`,
	})),
];

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
	return text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

const searchText = new Map(
	allStyles.map((s) => [
		s,
		normalise(
			[s.name, s.code, s.category.name, s.overallImpression ?? "", ...s.commercialExamples].join(
				" ",
			),
		),
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

function matchingStyles(query: StyleQuery): BeerStyle[] {
	let terms = normalise(query.q).split(/\s+/).filter(Boolean);
	let results = allStyles.filter((style) => {
		if (query.group && !style.groups.includes(query.group)) return false;
		let haystack = searchText.get(style) ?? "";
		return terms.every((term) => haystack.includes(term));
	});

	if (query.sort === "bjcp") return results;
	if (query.sort === "name") return results.toSorted((a, b) => a.name.localeCompare(b.name, "en"));
	return results.toSorted(compareBy(query.sort));
}

/** A run of results to render together: one BJCP category, or (category null) one flat list. */
export interface ResultSection {
	category: Category | null;
	styles: BeerStyle[];
}

export interface SearchResult {
	/** Number of styles matching the query. */
	count: number;
	/** Number of styles in the catalogue. */
	total: number;
	/** In BJCP order, one section per category. Sorted by anything else, a single flat section. Empty when nothing matches. */
	sections: ResultSection[];
}

/** Search, filter and sort the catalogue, and lay the results out for display. */
export function searchStyles(query: StyleQuery): SearchResult {
	let styles = matchingStyles(query);
	let sections: ResultSection[] = [];
	if (query.sort !== "bjcp") {
		if (styles.length > 0) sections.push({ category: null, styles });
	} else {
		for (let style of styles) {
			let last = sections.at(-1);
			if (last?.category?.number === style.category.number) last.styles.push(style);
			else sections.push({ category: style.category, styles: [style] });
		}
	}
	return { count: styles.length, total: allStyles.length, sections };
}
