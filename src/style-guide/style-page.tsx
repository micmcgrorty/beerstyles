import { Link, useLoaderData, type LoaderFunctionArgs } from "react-router";

import { edition, loadStyle } from "../catalogue/styles.ts";
import { DEFAULT_QUERY, groupLabel, queryHref } from "../catalogue/query.ts";
import { CHARTED_STATS, STATS, formatStat, scaleOf, statGradient } from "../catalogue/stats.ts";
import { paths } from "../app/routes.ts";
import { PageMeta } from "../app/layout.tsx";
import { RangeTrack } from "../ui/range-track.tsx";
import { StatList } from "../ui/stat-list.tsx";
import theme from "../ui/theme.module.css";
import { NotFoundPage } from "../app/not-found-page.tsx";
import styles from "./style-page.module.css";

/** Finds the style in the catalogue and loads its guideline text. Null when the slug is unknown. */
export async function styleLoader({ params }: LoaderFunctionArgs) {
	return loadStyle(params.slug ?? "");
}

export function StylePage() {
	let data = useLoaderData<typeof styleLoader>();

	if (!data) {
		return <NotFoundPage message="We couldn't find that beer style. It may have been renamed." />;
	}

	let { style, previous, next, guideline } = data;
	let swatch = statGradient("srm", style.stats.srm);

	return (
		<>
			<PageMeta
				title={`${style.name} (${style.code})`}
				description={
					style.overallImpression ?? `${edition.name} style guidelines for ${style.name}.`
				}
			/>

			<Link to={paths.home} className={styles.backLink}>
				← All styles
			</Link>

			<header className={styles.header}>
				<div className={styles.meta}>
					<span className={styles.code}>{style.code}</span>
					<p className={theme.eyebrow}>
						{style.category.number}. {style.category.name}
					</p>
				</div>
				<h1 className={theme.pageTitle}>{style.name}</h1>
				{style.overallImpression ? (
					<p className={styles.overall}>{style.overallImpression}</p>
				) : null}
			</header>

			<div className={styles.panel}>
				<div
					className={styles.glass}
					role="img"
					aria-label={`Colour: ${formatStat("srm", style.stats.srm, { form: "full", unit: true })}`}
					style={{ background: swatch ?? undefined }}
				/>
				<div>
					<StatList style={style} full />
					<div className={styles.tracks}>
						{CHARTED_STATS.map((key) => (
							<div key={key}>
								<div className={styles.trackHead}>
									<strong>{STATS[key].label}</strong>
									<span>{formatStat(key, style.stats[key], { form: "full", unit: true })}</span>
								</div>
								<RangeTrack kind={key} stat={style.stats[key]} large />
								<div className={styles.scale} aria-hidden="true">
									<span>0</span>
									<span>{scaleOf(key).max}</span>
								</div>
							</div>
						))}
					</div>
				</div>
			</div>

			<p className={styles.compare}>
				<Link to={paths.compare(style.slug)} className={styles.compareLink}>
					{`Compare ${style.name} with another style →`}
				</Link>
			</p>

			<div className={styles.body}>
				{edition.sections.map((section) => {
					let text = guideline[section.key];
					if (!text) return null;
					return (
						<section key={section.key}>
							<h2>{section.heading}</h2>
							<p>{text}</p>
						</section>
					);
				})}

				{style.commercialExamples.length > 0 ? (
					<section>
						<h2>Commercial examples</h2>
						<ul>
							{style.commercialExamples.map((example) => (
								<li key={example} className={theme.pill}>
									{example}
								</li>
							))}
						</ul>
					</section>
				) : null}

				<section>
					<h2>Browse similar</h2>
					<ul>
						{style.groups.map((group) => (
							<li key={group}>
								<Link
									className={`${theme.pill} ${styles.tag}`}
									to={queryHref(paths.home, DEFAULT_QUERY, { group })}
								>
									{groupLabel(group)}
								</Link>
							</li>
						))}
					</ul>
				</section>

				{style.tags.length > 0 ? (
					<section>
						<h2>BJCP tags</h2>
						<ul>
							{style.tags.map((tag) => (
								<li key={tag} className={theme.pill}>
									{tag}
								</li>
							))}
						</ul>
					</section>
				) : null}
			</div>

			<nav className={styles.pager} aria-label="Other styles">
				{previous ? (
					<Link to={paths.style(previous.slug)}>
						<span>← Previous · {previous.code}</span>
						<strong>{previous.name}</strong>
					</Link>
				) : null}
				{next ? (
					<Link className={styles.next} to={paths.style(next.slug)}>
						<span>Next · {next.code} →</span>
						<strong>{next.name}</strong>
					</Link>
				) : null}
			</nav>
		</>
	);
}
