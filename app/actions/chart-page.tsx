import type { Handle } from "remix/component";
import { css } from "remix/component";

import type { BeerStyle, StyleQuery } from "../data/styles.ts";
import { routes } from "../routes.ts";
import { Layout } from "../ui/layout.tsx";
import { RangeChart, type ChartKind } from "../ui/range-chart.tsx";
import { EmptyResults, StyleFilters } from "../ui/style-filters.tsx";
import { lede, pageTitle } from "../ui/theme.ts";

export interface ChartPageProps {
	kind: ChartKind;
	styles: BeerStyle[];
	total: number;
	query: StyleQuery;
}

const PAGES: Record<
	ChartKind,
	{ title: string; heading: string; description: string; intro: string; label: string; path: string }
> = {
	srm: {
		title: "Colour guide",
		heading: "Colour",
		description: "The colour range of every BJCP 2015 beer style, on the SRM scale.",
		intro:
			"Each bar shows a style's colour range on the SRM scale, from pale straw at the left to black at the right.",
		label: "Colour (SRM)",
		path: routes.colour.href(),
	},
	ibu: {
		title: "Bitterness guide",
		heading: "Bitterness",
		description: "The bitterness range of every BJCP 2015 beer style, in IBUs.",
		intro:
			"Each bar shows a style's bitterness range in International Bitterness Units, from barely bitter at the left to intensely bitter at the right.",
		label: "Bitterness (IBU)",
		path: routes.bitterness.href(),
	},
};

const intro = css({
	display: "flex",
	flexDirection: "column",
	gap: "10px",
	marginBottom: "24px",
});

export function ChartPage(handle: Handle<ChartPageProps>) {
	return () => {
		let { kind, styles, total, query } = handle.props;
		let page = PAGES[kind];

		return (
			<Layout
				title={page.title}
				description={page.description}
				current={kind === "srm" ? "colour" : "bitterness"}
			>
				<div mix={intro}>
					<h1 mix={pageTitle}>{page.heading}</h1>
					<p mix={lede}>{page.intro}</p>
				</div>

				<StyleFilters path={page.path} query={query} count={styles.length} total={total} />

				{styles.length === 0 ? (
					<div mix={css({ marginTop: "24px" })}>
						<EmptyResults path={page.path} query={query} />
					</div>
				) : (
					<RangeChart
						kind={kind}
						styles={styles}
						grouped={query.sort === "bjcp"}
						label={page.label}
					/>
				)}
			</Layout>
		);
	};
}
