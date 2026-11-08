import { useCallback, useMemo } from "react";
import { useLocation, useSearchParams } from "react-router";

import {
	parseQuery,
	queryHref,
	searchStyles,
	type SearchResult,
	type StyleQuery,
} from "../data/styles.ts";

export interface StyleSearch extends SearchResult {
	/** The search, filter and sort read from the URL. */
	query: StyleQuery;
	/** The current page's path. The filter form submits here. */
	path: string;
	/** This page's URL with the query changed, e.g. `linkTo({ group: "sour" })`. Defaults are left out. */
	linkTo: (changes: Partial<StyleQuery>) => string;
}

/** The current page's style search: the query in the URL, its results, and links to change it. */
export function useStyleSearch(): StyleSearch {
	let [searchParams] = useSearchParams();
	let { pathname } = useLocation();
	let query = useMemo(() => parseQuery(searchParams), [searchParams]);
	let result = useMemo(() => searchStyles(query), [query]);
	let linkTo = useCallback(
		(changes: Partial<StyleQuery>) => queryHref(pathname, query, changes),
		[pathname, query],
	);
	return { ...result, query, path: pathname, linkTo };
}
