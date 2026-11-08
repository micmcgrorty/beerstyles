import { STATS, STAT_KEYS, type StatKey } from "./stats.ts";

// ---------------------------------------------------------------------------
// Browsing groups: broader than BJCP categories or family tags, so every style has one.
// Each edition decides which groups its styles belong to.

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

export function groupLabel(id: GroupId): string {
	return GROUPS.find((g) => g.id === id)?.label ?? id;
}

// ---------------------------------------------------------------------------
// Sorting

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

// ---------------------------------------------------------------------------
// The query in the URL: ?q=…&group=…&sort=…

export interface StyleQuery {
	q: string;
	group: GroupId | null;
	sort: SortId;
}

export const DEFAULT_QUERY: StyleQuery = { q: "", group: null, sort: "bjcp" };

/** Read a query from URL params. Missing or unknown values fall back to the defaults. */
export function parseQuery(params: URLSearchParams): StyleQuery {
	let q = (params.get("q") ?? DEFAULT_QUERY.q).trim().slice(0, 100);
	let groupParam = params.get("group");
	let group = GROUPS.find((g) => g.id === groupParam)?.id ?? DEFAULT_QUERY.group;
	let sortParam = params.get("sort");
	let sort = SORTS.find((s) => s.id === sortParam)?.id ?? DEFAULT_QUERY.sort;
	return { q, group, sort };
}

/** The URL params for a query, leaving out defaults so URLs stay clean. */
function toParams(query: StyleQuery): URLSearchParams {
	let params = new URLSearchParams();
	if (query.q !== DEFAULT_QUERY.q) params.set("q", query.q);
	if (query.group !== DEFAULT_QUERY.group && query.group) params.set("group", query.group);
	if (query.sort !== DEFAULT_QUERY.sort) params.set("sort", query.sort);
	return params;
}

/** Build `path?…` for a query, with optional changes applied. */
export function queryHref(path: string, query: StyleQuery, changes: Partial<StyleQuery> = {}) {
	let search = toParams({ ...query, ...changes }).toString();
	return search ? `${path}?${search}` : path;
}

/** Search and group filter the list; sort only orders it. */
export function isFiltered(query: StyleQuery): boolean {
	return query.q !== DEFAULT_QUERY.q || query.group !== DEFAULT_QUERY.group;
}

/** The query with search and group cleared, keeping the sort. */
export function clearFilters(query: StyleQuery): StyleQuery {
	return { ...query, q: DEFAULT_QUERY.q, group: DEFAULT_QUERY.group };
}

// ---------------------------------------------------------------------------
// The filter form: a GET form whose inputs are named after the query params.

/** The params the filter form has inputs for. */
const FORM_FIELDS = new Set(["q", "sort"]);

/** Changes whenever any part of the query changes. Key the form with it, so its uncontrolled inputs reset. */
export function formKey(query: StyleQuery): string {
	return toParams(query).toString();
}

/** Params the form has no input for, as [name, value] pairs for hidden inputs, so submitting keeps them. */
export function hiddenFields(query: StyleQuery): [string, string][] {
	return [...toParams(query)].filter(([name]) => !FORM_FIELDS.has(name));
}
