import { PageMeta } from "../app/layout.tsx";
import { STATS, type ChartedStat } from "../catalogue/stats.ts";
import { RangeChart } from "./range-chart.tsx";
import { EmptyResults, StyleFilters } from "../search/style-filters.tsx";
import theme from "../ui/theme.module.css";
import styles from "./chart-page.module.css";
import { useStyleSearch } from "../search/use-style-search.ts";

const PAGES: Record<ChartedStat, { title: string; description: string; intro: string }> = {
	srm: {
		title: "Colour guide",
		description: "The colour range of every BJCP 2015 beer style, on the SRM scale.",
		intro:
			"Each bar shows a style's colour range on the SRM scale, from pale straw at the left to black at the right.",
	},
	ibu: {
		title: "Bitterness guide",
		description: "The bitterness range of every BJCP 2015 beer style, in IBUs.",
		intro:
			"Each bar shows a style's bitterness range in International Bitterness Units, from barely bitter at the left to intensely bitter at the right.",
	},
};

export function ChartPage({ kind }: { kind: ChartedStat }) {
	let search = useStyleSearch();
	let page = PAGES[kind];

	return (
		<>
			<PageMeta title={page.title} description={page.description} />

			<div className={styles.intro}>
				<h1 className={theme.pageTitle}>{STATS[kind].label}</h1>
				<p className={theme.lede}>{page.intro}</p>
			</div>

			<StyleFilters search={search} />

			{search.count === 0 ? (
				<div className={styles.empty}>
					<EmptyResults search={search} />
				</div>
			) : (
				<RangeChart kind={kind} sections={search.sections} />
			)}
		</>
	);
}
