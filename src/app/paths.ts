/** URL builders for every page, so links never hand-write paths. */
export const paths = {
	home: "/",
	colour: "/colour",
	bitterness: "/bitterness",
	style: (slug: string) => `/styles/${encodeURIComponent(slug)}`,
};
