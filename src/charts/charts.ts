import type { ChartedStat } from "../catalogue/stats.ts";

/**
 * One chart page per charted stat: where it lives and what it says. The route
 * table, router, nav and links all come from here, and the Record type makes
 * every stat with a scale have a chart. Plain data, because vite.config.ts
 * loads the route table at build time.
 */
export interface ChartDefinition {
	/** URL of the chart page, e.g. "/colour". */
	path: string;
	/** Page title, e.g. "Colour guide". */
	title: string;
	/** Meta description, given the edition's name. */
	description: (editionName: string) => string;
	/** The lede under the heading. */
	intro: string;
}

export const CHARTS: Record<ChartedStat, ChartDefinition> = {
	srm: {
		path: "/colour",
		title: "Colour guide",
		description: (editionName) =>
			`The colour range of every ${editionName} beer style, on the SRM scale.`,
		intro:
			"Each bar shows a style's colour range on the SRM scale, from pale straw at the left to black at the right.",
	},
	ibu: {
		path: "/bitterness",
		title: "Bitterness guide",
		description: (editionName) =>
			`The bitterness range of every ${editionName} beer style, in IBUs.`,
		intro:
			"Each bar shows a style's bitterness range in International Bitterness Units, from barely bitter at the left to intensely bitter at the right.",
	},
};
