import { paths } from "../app/routes.ts";

/** The two styles being compared, by slug: `/compare?a=…&b=…`. Either may be unchosen. */
export interface Comparison {
	a: string | null;
	b: string | null;
}

/**
 * Read a comparison from URL params. Slugs that `isKnown` rejects are dropped and
 * listed in `ignored`, so a mistyped link still shows the half that's valid.
 */
export function parseComparison(
	params: URLSearchParams,
	isKnown: (slug: string) => boolean,
): Comparison & { ignored: string[] } {
	let ignored: string[] = [];
	let read = (name: "a" | "b") => {
		let slug = params.get(name)?.trim() ?? "";
		if (!slug) return null;
		if (isKnown(slug)) return slug;
		ignored.push(slug);
		return null;
	};
	let a = read("a");
	let b = read("b");
	return { a, b, ignored };
}

/** The same comparison with A and B swapped. */
export function swapped({ a, b }: Comparison): string {
	return paths.compare(b, a);
}
