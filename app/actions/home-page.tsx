import type { Handle } from "remix/component";
import { css } from "remix/component";

import { styleSwatch } from "../data/srm.ts";
import { groupByCategory, type BeerStyle, type StyleQuery } from "../data/styles.ts";
import { routes } from "../routes.ts";
import { Layout } from "../ui/layout.tsx";
import { StatList } from "../ui/stat-list.tsx";
import { EmptyResults, StyleFilters } from "../ui/style-filters.tsx";
import { categoryHeading, lede, pageTitle } from "../ui/theme.ts";

export interface HomePageProps {
	styles: BeerStyle[];
	total: number;
	query: StyleQuery;
}

const intro = css({
	display: "flex",
	flexDirection: "column",
	gap: "10px",
	marginBottom: "24px",
});

const sectionStyles = css({
	marginTop: "32px",
});

const stickyHeading = css({
	position: "sticky",
	top: 0,
	zIndex: 1,
	padding: "10px 0",
	background: "var(--bg)",
});

const cardList = css({
	listStyle: "none",
	margin: "8px 0 0",
	padding: 0,
	display: "grid",
	gap: "12px",
	"@media (min-width: 720px)": { gridTemplateColumns: "repeat(2, minmax(0, 1fr))" },
});

const cardStyles = css({
	position: "relative",
	height: "100%",
	display: "flex",
	flexDirection: "column",
	gap: "14px",
	padding: "16px 16px 16px 26px",
	borderRadius: "14px",
	background: "var(--surface)",
	border: "1px solid var(--rule)",
	boxShadow: "var(--shadow)",
	overflow: "hidden",
	"& .swatch": {
		position: "absolute",
		left: 0,
		top: 0,
		bottom: 0,
		width: "10px",
	},
	"& .title": {
		margin: 0,
		display: "flex",
		alignItems: "baseline",
		justifyContent: "space-between",
		gap: "12px",
		fontSize: "19px",
		fontWeight: 750,
		letterSpacing: "-0.015em",
		lineHeight: 1.25,
	},
	"& .title a": { textDecoration: "none" },
	// whole card is clickable via the title link
	"& .title a::after": { content: '""', position: "absolute", inset: 0 },
	"& .code": { flexShrink: 0, fontSize: "13px", fontWeight: 700, color: "var(--muted)" },
	"& .summary": {
		margin: 0,
		color: "var(--muted)",
		display: "-webkit-box",
		WebkitLineClamp: 3,
		WebkitBoxOrient: "vertical",
		overflow: "hidden",
	},
	"& .more": {
		marginTop: "auto",
		fontSize: "14px",
		fontWeight: 700,
		color: "var(--accent)",
	},
	"&:hover": { borderColor: "var(--muted)" },
	"&:focus-within": { outline: "2px solid var(--accent)", outlineOffset: "2px" },
	"& a:focus-visible": { outline: "none" },
});

function StyleCard(handle: Handle<{ style: BeerStyle }>) {
	return () => {
		let { style } = handle.props;
		let swatch = styleSwatch(style.stats.srm.ranges);

		return (
			<li>
				<article mix={cardStyles}>
					<span
						class="swatch"
						aria-hidden="true"
						style={{
							background:
								swatch ??
								"repeating-linear-gradient(135deg, var(--track) 0 6px, var(--rule) 6px 12px)",
						}}
					/>
					<h3 class="title">
						<a href={routes.style.href({ slug: style.slug })}>{style.name}</a>
						<span class="code">{style.code}</span>
					</h3>
					<StatList style={style} />
					{style.overallImpression ? <p class="summary">{style.overallImpression}</p> : null}
					<span class="more" aria-hidden="true">
						Full style guide →
					</span>
				</article>
			</li>
		);
	};
}

export function HomePage(handle: Handle<HomePageProps>) {
	return () => {
		let { styles, total, query } = handle.props;
		let grouped = query.sort === "bjcp";

		return (
			<Layout
				title="BJCP Beer Styles"
				description="Every BJCP 2015 beer style with its strength, bitterness, colour and gravity. Search, filter and compare styles."
				current="styles"
			>
				<div mix={intro}>
					<h1 mix={pageTitle}>Beer styles</h1>
					<p mix={lede}>
						All {total} styles from the BJCP 2015 guidelines, with their strength, bitterness,
						colour and gravity ranges.
					</p>
				</div>

				<StyleFilters path={routes.home.href()} query={query} count={styles.length} total={total} />

				{styles.length === 0 ? (
					<div mix={css({ marginTop: "24px" })}>
						<EmptyResults path={routes.home.href()} query={query} />
					</div>
				) : grouped ? (
					groupByCategory(styles).map((group) => (
						<section
							key={group.category.number}
							mix={sectionStyles}
							aria-labelledby={`cat-${group.category.number}`}
						>
							<h2 id={`cat-${group.category.number}`} mix={[categoryHeading, stickyHeading]}>
								<span class="num">{group.category.number}</span>
								{group.category.name}
							</h2>
							<ul mix={cardList}>
								{group.styles.map((style) => (
									<StyleCard key={style.slug} style={style} />
								))}
							</ul>
						</section>
					))
				) : (
					<ul mix={[cardList, css({ marginTop: "24px" })]}>
						{styles.map((style) => (
							<StyleCard key={style.slug} style={style} />
						))}
					</ul>
				)}
			</Layout>
		);
	};
}
