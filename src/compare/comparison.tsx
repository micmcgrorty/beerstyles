import { Link } from "react-router";

import { paths } from "../app/routes.ts";
import type { LoadedStyle } from "../catalogue/catalogue.ts";
import {
	CHARTED_STATS,
	STATS,
	STAT_KEYS,
	formatStat,
	scaleOf,
	statGradient,
} from "../catalogue/stats.ts";
import { edition } from "../catalogue/styles.ts";
import { RangeTrack } from "../ui/range-track.tsx";
import { StatList } from "../ui/stat-list.tsx";
import theme from "../ui/theme.module.css";
import styles from "./comparison.module.css";

type Side = "a" | "b";

function Badge({ side }: { side: Side }) {
	return <span className={styles.badge}>{side.toUpperCase()}</span>;
}

/** Both chosen styles side by side, or whichever is chosen and a prompt for the other. */
export function ComparisonView({ a, b }: { a: LoadedStyle | null; b: LoadedStyle | null }) {
	if (!a && !b) return null;

	return (
		<div className={styles.comparison}>
			<div className={styles.cards}>
				{a ? (
					<StyleSummary side="a" loaded={a} showStats={!b} />
				) : (
					<ChooseCard side="a" other={b} />
				)}
				{b ? (
					<StyleSummary side="b" loaded={b} showStats={!a} />
				) : (
					<ChooseCard side="b" other={a} />
				)}
			</div>

			{a && b ? (
				<>
					{a.style.slug === b.style.slug ? (
						<p className={styles.notice}>{`You're comparing ${a.style.name} with itself.`}</p>
					) : null}
					<StatsComparison a={a} b={b} />
					<GuidelineComparison a={a} b={b} />
				</>
			) : null}
		</div>
	);
}

function StyleSummary({
	side,
	loaded,
	showStats,
}: {
	side: Side;
	loaded: LoadedStyle;
	showStats: boolean;
}) {
	let { style } = loaded;
	let swatch = statGradient("srm", style.stats.srm);
	return (
		<article className={styles.card}>
			<span
				className={styles.swatch}
				aria-hidden="true"
				style={{ background: swatch ?? undefined }}
			/>
			<div className={styles.cardMeta}>
				<Badge side={side} />
				<span className={styles.code}>{style.code}</span>
				<p className={theme.eyebrow}>{`${style.category.number}. ${style.category.name}`}</p>
			</div>
			<h2 className={styles.cardTitle}>
				<Link to={paths.style(style.slug)}>{style.name}</Link>
			</h2>
			{showStats ? <StatList style={style} /> : null}
			{style.overallImpression ? (
				<p className={styles.impression}>{style.overallImpression}</p>
			) : null}
		</article>
	);
}

function ChooseCard({ side, other }: { side: Side; other: LoadedStyle | null }) {
	let which = side === "a" ? "first" : "second";
	return (
		<div className={styles.choose}>
			<span className={styles.badgeEmpty}>{side.toUpperCase()}</span>
			<p className={styles.chooseTitle}>{`Choose a ${which} style`}</p>
			{other ? (
				<p className={styles.chooseText}>
					{`Pick one from the ${which} list to see it side by side with ${other.style.name}.`}
				</p>
			) : null}
		</div>
	);
}

function StatsComparison({ a, b }: { a: LoadedStyle; b: LoadedStyle }) {
	return (
		<section className={styles.panel} aria-labelledby="compare-stats">
			<h2 id="compare-stats" className={styles.panelTitle}>
				Vital statistics
			</h2>
			<table className={styles.stats}>
				<thead>
					<tr>
						<th scope="col">
							<span className={theme.srOnly}>Statistic</span>
						</th>
						{[a, b].map((loaded, i) => (
							<th key={i} scope="col">
								<span className={styles.who}>
									<Badge side={i === 0 ? "a" : "b"} /> {loaded.style.name}
								</span>
							</th>
						))}
					</tr>
				</thead>
				<tbody>
					{STAT_KEYS.map((key) => (
						<tr key={key}>
							<th scope="row">
								<abbr title={STATS[key].title}>{STATS[key].abbr}</abbr>
							</th>
							<td>{formatStat(key, a.style.stats[key], { form: "full" })}</td>
							<td>{formatStat(key, b.style.stats[key], { form: "full" })}</td>
						</tr>
					))}
				</tbody>
			</table>

			{CHARTED_STATS.map((key) => (
				<div key={key} className={styles.bars}>
					<div className={styles.barsHead}>
						<strong>{STATS[key].label}</strong>
						<span>{`${STATS[key].unit}, same scale for both`}</span>
					</div>
					<div className={styles.barsGrid}>
						{[a, b].map((loaded, i) => (
							<div key={i} className={styles.barRow}>
								<span className={styles.who}>
									<Badge side={i === 0 ? "a" : "b"} />
									<span className={styles.barName}>{loaded.style.name}</span>
								</span>
								<RangeTrack kind={key} stat={loaded.style.stats[key]} large />
							</div>
						))}
						<div className={styles.scale} aria-hidden="true">
							<span>0</span>
							<span>{scaleOf(key).max}</span>
						</div>
					</div>
				</div>
			))}
		</section>
	);
}

function GuidelineComparison({ a, b }: { a: LoadedStyle; b: LoadedStyle }) {
	let sections = edition.sections.filter(({ key }) => a.guideline[key] || b.guideline[key]);
	let examples = a.style.commercialExamples.length + b.style.commercialExamples.length > 0;

	return (
		<div className={styles.sections}>
			{sections.map(({ key, heading }) => (
				<section key={key} className={styles.section}>
					<h2 className={styles.sectionTitle}>{heading}</h2>
					<div className={styles.columns}>
						{[a, b].map((loaded, i) => (
							<div key={i}>
								<p className={styles.columnLabel}>
									<Badge side={i === 0 ? "a" : "b"} /> {loaded.style.name}
								</p>
								<p className={styles.text}>{loaded.guideline[key] ?? "Not described."}</p>
							</div>
						))}
					</div>
				</section>
			))}
			{examples ? (
				<section className={styles.section}>
					<h2 className={styles.sectionTitle}>Commercial examples</h2>
					<div className={styles.columns}>
						{[a, b].map((loaded, i) => (
							<div key={i}>
								<p className={styles.columnLabel}>
									<Badge side={i === 0 ? "a" : "b"} /> {loaded.style.name}
								</p>
								<ul className={styles.pills}>
									{loaded.style.commercialExamples.map((example) => (
										<li key={example} className={theme.pill}>
											{example}
										</li>
									))}
								</ul>
							</div>
						))}
					</div>
				</section>
			) : null}
		</div>
	);
}
