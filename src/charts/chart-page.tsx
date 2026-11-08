import { PageMeta } from "../app/layout.tsx";
import { STATS, type ChartedStat } from "../catalogue/stats.ts";
import { CHARTS } from "./charts.ts";
import { RangeChart } from "./range-chart.tsx";
import { EmptyResults, StyleFilters } from "../search/style-filters.tsx";
import theme from "../ui/theme.module.css";
import styles from "./chart-page.module.css";
import { useStyleSearch } from "../search/use-style-search.ts";
import { edition } from "../catalogue/styles.ts";

export function ChartPage({ kind }: { kind: ChartedStat }) {
	let search = useStyleSearch();
	let page = CHARTS[kind];

	return (
		<>
			<PageMeta title={page.title} description={page.description(edition.name)} />

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
