import type { GroupId, StyleQuery } from "./query.ts";
import { parseStats, span, type Stat, type StatKey } from "./stats.ts";
import type { Guideline, RawCategory, RawStyle } from "./types.ts";

/**
 * Everything specific to one edition of the BJCP guidelines. The rest of the
 * app reads styles through a catalogue built from an edition, so swapping
 * editions (2015 → 2021) means writing a new Edition, not editing pages.
 */
export interface Edition {
	/** e.g. "BJCP 2015". */
	name: string;
	categories: RawCategory[];
	/** The browsing groups a style belongs to, from its tags and category. Every style needs one. */
	groupsFor: (style: RawStyle, category: RawCategory) => GroupId[];
	/** The guideline fields this edition publishes, in display order. */
	sections: { key: keyof Guideline; heading: string }[];
	/** A style's long-form text, or null when there's no style with that slug. */
	loadGuideline: (slug: string) => Promise<Guideline | null>;
}

export interface Category {
	number: number;
	name: string;
}

export interface BeerStyle extends RawStyle {
	category: Category;
	/** Position in edition order. */
	order: number;
	stats: Record<StatKey, Stat>;
	groups: GroupId[];
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

export interface Catalogue {
	edition: Pick<Edition, "name" | "sections">;
	/** Every style, in edition order. */
	allStyles: BeerStyle[];
	/** A style and its neighbours in edition order, or null for an unknown slug. */
	getStyle: (
		slug: string,
	) => { style: BeerStyle; previous: BeerStyle | null; next: BeerStyle | null } | null;
	/** Search, filter and sort the styles, and lay the results out for display. */
	searchStyles: (query: StyleQuery) => SearchResult;
	loadGuideline: Edition["loadGuideline"];
}

function normalise(text: string): string {
	return text.toLowerCase().normalize("NFD").replace(/[̀-ͯ]/g, "");
}

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

export function createCatalogue(edition: Edition): Catalogue {
	let allStyles: BeerStyle[] = edition.categories.flatMap((category) =>
		category.styles.map((style) => ({
			...style,
			category: { number: category.number, name: category.name },
			order: 0,
			stats: parseStats(style.vitalStatistics),
			groups: edition.groupsFor(style, category),
		})),
	);
	allStyles.forEach((style, i) => {
		style.order = i;
	});

	let bySlug = new Map(allStyles.map((s) => [s.slug, s]));
	let searchText = new Map(
		allStyles.map((s) => [
			s,
			normalise(
				[s.name, s.code, s.category.name, s.overallImpression ?? "", ...s.commercialExamples].join(
					" ",
				),
			),
		]),
	);

	function matchingStyles(query: StyleQuery): BeerStyle[] {
		let terms = normalise(query.q).split(/\s+/).filter(Boolean);
		let results = allStyles.filter((style) => {
			if (query.group && !style.groups.includes(query.group)) return false;
			let haystack = searchText.get(style) ?? "";
			return terms.every((term) => haystack.includes(term));
		});

		if (query.sort === "bjcp") return results;
		if (query.sort === "name")
			return results.toSorted((a, b) => a.name.localeCompare(b.name, "en"));
		return results.toSorted(compareBy(query.sort));
	}

	return {
		edition: { name: edition.name, sections: edition.sections },
		allStyles,
		getStyle(slug) {
			let style = bySlug.get(slug);
			if (!style) return null;
			return {
				style,
				previous: allStyles[style.order - 1] ?? null,
				next: allStyles[style.order + 1] ?? null,
			};
		},
		searchStyles(query) {
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
		},
		loadGuideline: edition.loadGuideline,
	};
}
