import { Link } from "react-router";

import { paths } from "../app/paths.ts";
import { SCALES, scalePercent, type ScaleKey } from "../catalogue/scales.ts";
import { formatStat, type BeerStyle, type ResultSection } from "../catalogue/styles.ts";
import { RangeTrack } from "../ui/range-track.tsx";
import theme from "../ui/theme.module.css";
import styles from "./range-chart.module.css";

/** Labelled ticks across a whole scale, e.g. 0, 5 … 40 for SRM. */
function RangeAxis({ kind }: { kind: ScaleKey }) {
	let scale = SCALES[kind];
	let ticks: number[] = [];
	for (let v = 0; v <= scale.max; v += scale.step) ticks.push(v);
	return (
		<div className={styles.axis} aria-hidden="true">
			{ticks.map((tick) => (
				<span key={tick} style={{ left: `${scalePercent(kind, tick)}%` }}>
					{tick}
				</span>
			))}
		</div>
	);
}

function ChartRow({ kind, style }: { kind: ScaleKey; style: BeerStyle }) {
	let stat = style.stats[kind];
	return (
		<li className={styles.row}>
			<div className={styles.rowHead}>
				<Link className={styles.name} to={paths.style(style.slug)}>
					<span className={styles.code}>{style.code}</span>
					{style.name}
				</Link>
				<span className={styles.value}>{formatStat(kind, stat, { form: "full", unit: true })}</span>
			</div>
			<RangeTrack kind={kind} stat={stat} />
		</li>
	);
}

/** One row per style, in the sections given, under a sticky axis. */
export function RangeChart({
	kind,
	sections,
	label,
}: {
	kind: ScaleKey;
	sections: ResultSection[];
	label: string;
}) {
	return (
		<div>
			<div className={styles.stickyAxis}>
				<div className={styles.axisLabel}>
					<span>Style</span>
					<span>{label}</span>
				</div>
				<RangeAxis kind={kind} />
			</div>

			{sections.map(({ category, styles: sectionStyles }) =>
				category ? (
					<section
						key={category.number}
						className={styles.section}
						aria-labelledby={`cat-${category.number}`}
					>
						<h2 id={`cat-${category.number}`} className={theme.categoryHeading}>
							<span className={theme.categoryNumber}>{category.number}</span>
							{category.name}
						</h2>
						<ol className={styles.rows}>
							{sectionStyles.map((style) => (
								<ChartRow key={style.slug} kind={kind} style={style} />
							))}
						</ol>
					</section>
				) : (
					<ol key="all" className={`${styles.rows} ${styles.ungrouped}`}>
						{sectionStyles.map((style) => (
							<ChartRow key={style.slug} kind={kind} style={style} />
						))}
					</ol>
				),
			)}
		</div>
	);
}
