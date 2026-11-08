import { Link } from "react-router";

import { styleSwatch } from "../data/srm.ts";
import type { BeerStyle } from "../data/styles.ts";
import { paths } from "../paths.ts";
import { PageMeta } from "../ui/layout.tsx";
import { StatList } from "../ui/stat-list.tsx";
import { EmptyResults, StyleFilters } from "../ui/style-filters.tsx";
import theme from "../ui/theme.module.css";
import styles from "./home-page.module.css";
import { useStyleSearch } from "./use-style-search.ts";

export function HomePage() {
	let search = useStyleSearch();

	return (
		<>
			<PageMeta
				title="BJCP Beer Styles"
				description="Every BJCP 2015 beer style with its strength, bitterness, colour and gravity. Search, filter and compare styles."
			/>

			<div className={styles.intro}>
				<h1 className={theme.pageTitle}>Beer styles</h1>
				<p className={theme.lede}>
					All {search.total} styles from the BJCP 2015 guidelines, with their strength, bitterness,
					colour and gravity ranges.
				</p>
			</div>

			<StyleFilters search={search} />

			{search.count === 0 ? (
				<div className={styles.spaced}>
					<EmptyResults search={search} />
				</div>
			) : null}

			{search.sections.map(({ category, styles: sectionStyles }) =>
				category ? (
					<section
						key={category.number}
						className={styles.section}
						aria-labelledby={`cat-${category.number}`}
					>
						<h2
							id={`cat-${category.number}`}
							className={`${theme.categoryHeading} ${styles.stickyHeading}`}
						>
							<span className={theme.categoryNumber}>{category.number}</span>
							{category.name}
						</h2>
						<ul className={styles.cards}>
							{sectionStyles.map((style) => (
								<StyleCard key={style.slug} style={style} />
							))}
						</ul>
					</section>
				) : (
					<ul key="all" className={`${styles.cards} ${styles.spaced}`}>
						{sectionStyles.map((style) => (
							<StyleCard key={style.slug} style={style} />
						))}
					</ul>
				),
			)}
		</>
	);
}

function StyleCard({ style }: { style: BeerStyle }) {
	let swatch = styleSwatch(style.stats.srm.ranges);

	return (
		<li>
			<article className={styles.card}>
				<span
					className={styles.swatch}
					aria-hidden="true"
					style={{ background: swatch ?? undefined }}
				/>
				<h3 className={styles.title}>
					<Link to={paths.style(style.slug)}>{style.name}</Link>
					<span className={styles.code}>{style.code}</span>
				</h3>
				<StatList style={style} />
				{style.overallImpression ? (
					<p className={styles.summary}>{style.overallImpression}</p>
				) : null}
				<span className={styles.more} aria-hidden="true">
					Full style guide →
				</span>
			</article>
		</li>
	);
}
