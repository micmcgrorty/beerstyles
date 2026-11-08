import { paths } from "../paths.ts";
import { PageMeta } from "../ui/layout.tsx";
import { RangeChart, type ChartKind } from "../ui/range-chart.tsx";
import { EmptyResults, StyleFilters } from "../ui/style-filters.tsx";
import theme from "../ui/theme.module.css";
import styles from "./chart-page.module.css";
import { useStyleQuery } from "./use-style-query.ts";

const PAGES: Record<
	ChartKind,
	{
		title: string;
		heading: string;
		description: string;
		intro: string;
		label: string;
		path: string;
	}
> = {
	srm: {
		title: "Colour guide",
		heading: "Colour",
		description: "The colour range of every BJCP 2015 beer style, on the SRM scale.",
		intro:
			"Each bar shows a style's colour range on the SRM scale, from pale straw at the left to black at the right.",
		label: "Colour (SRM)",
		path: paths.colour,
	},
	ibu: {
		title: "Bitterness guide",
		heading: "Bitterness",
		description: "The bitterness range of every BJCP 2015 beer style, in IBUs.",
		intro:
			"Each bar shows a style's bitterness range in International Bitterness Units, from barely bitter at the left to intensely bitter at the right.",
		label: "Bitterness (IBU)",
		path: paths.bitterness,
	},
};

export function ChartPage({ kind }: { kind: ChartKind }) {
	let { query, styles: results, total } = useStyleQuery();
	let page = PAGES[kind];

	return (
		<>
			<PageMeta title={page.title} description={page.description} />

			<div className={styles.intro}>
				<h1 className={theme.pageTitle}>{page.heading}</h1>
				<p className={theme.lede}>{page.intro}</p>
			</div>

			<StyleFilters path={page.path} query={query} count={results.length} total={total} />

			{results.length === 0 ? (
				<div className={styles.empty}>
					<EmptyResults path={page.path} query={query} />
				</div>
			) : (
				<RangeChart
					kind={kind}
					styles={results}
					grouped={query.sort === "bjcp"}
					label={page.label}
				/>
			)}
		</>
	);
}
