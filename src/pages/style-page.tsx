import { Link, useParams } from "react-router";

import { IBU_MAX, SRM_MAX, styleSwatch } from "../data/srm.ts";
import {
	DEFAULT_QUERY,
	formatStatFull,
	getStyle,
	groupLabel,
	queryHref,
	type BeerStyle,
} from "../data/styles.ts";
import { paths } from "../paths.ts";
import { PageMeta } from "../ui/layout.tsx";
import { RangeTrack } from "../ui/range-chart.tsx";
import { StatList } from "../ui/stat-list.tsx";
import theme from "../ui/theme.module.css";
import { NotFoundPage } from "./not-found-page.tsx";
import styles from "./style-page.module.css";

const SECTIONS: { key: keyof BeerStyle; heading: string }[] = [
	{ key: "aroma", heading: "Aroma" },
	{ key: "appearance", heading: "Appearance" },
	{ key: "flavor", heading: "Flavour" },
	{ key: "mouthfeel", heading: "Mouthfeel" },
	{ key: "comments", heading: "Comments" },
	{ key: "history", heading: "History" },
	{ key: "ingredients", heading: "Characteristic ingredients" },
	{ key: "comparison", heading: "Style comparison" },
	{ key: "entryInstructions", heading: "Entry instructions" },
];

export function StylePage() {
	let { slug = "" } = useParams();
	let result = getStyle(slug);

	if (!result) {
		return <NotFoundPage message="We couldn't find that beer style. It may have been renamed." />;
	}

	let { style, previous, next } = result;
	let swatch = styleSwatch(style.stats.srm.ranges, "180deg");
	let ibu = formatStatFull("ibu", style.stats.ibu);
	let srm = formatStatFull("srm", style.stats.srm);

	return (
		<>
			<PageMeta
				title={`${style.name} (${style.code})`}
				description={style.overallImpression ?? `BJCP 2015 style guidelines for ${style.name}.`}
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
					aria-label={`Colour: ${srm} SRM`}
					style={{ background: swatch ?? undefined }}
				/>
				<div>
					<StatList style={style} full />
					<div className={styles.tracks}>
						<div>
							<div className={styles.trackHead}>
								<strong>Colour</strong>
								<span>{srm === "Varies by type" ? srm : `${srm} SRM`}</span>
							</div>
							<RangeTrack kind="srm" stat={style.stats.srm} large />
							<div className={styles.scale} aria-hidden="true">
								<span>0</span>
								<span>{SRM_MAX}</span>
							</div>
						</div>
						<div>
							<div className={styles.trackHead}>
								<strong>Bitterness</strong>
								<span>{ibu === "Varies by type" ? ibu : `${ibu} IBU`}</span>
							</div>
							<RangeTrack kind="ibu" stat={style.stats.ibu} large />
							<div className={styles.scale} aria-hidden="true">
								<span>0</span>
								<span>{IBU_MAX}</span>
							</div>
						</div>
					</div>
				</div>
			</div>

			<div className={styles.body}>
				{SECTIONS.map((section) => {
					let text = style[section.key];
					if (typeof text !== "string" || !text) return null;
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
