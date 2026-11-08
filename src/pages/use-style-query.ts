import { useMemo } from "react";
import { useSearchParams } from "react-router";

import { allStyles, findStyles, parseQuery } from "../data/styles.ts";

/** The search, filter and sort from the URL, and the styles that match them. */
export function useStyleQuery() {
	let [searchParams] = useSearchParams();
	let query = useMemo(() => parseQuery(searchParams), [searchParams]);
	let styles = useMemo(() => findStyles(query), [query]);
	return { query, styles, total: allStyles.length };
}
