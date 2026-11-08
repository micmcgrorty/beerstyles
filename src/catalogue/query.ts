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
