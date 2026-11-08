import { Link } from "react-router";

import {
	IBU_MAX,
	SRM_MAX,
	SRM_SPECTRUM,
	ibuColour,
	rangeGradient,
	srmColour,
} from "../data/srm.ts";
import { formatStatFull, type BeerStyle, type ResultSection, type Stat } from "../data/styles.ts";
import { paths } from "../paths.ts";
import styles from "./range-chart.module.css";
import theme from "./theme.module.css";

export type ChartKind = "srm" | "ibu";

interface ChartConfig {
	max: number;
	step: number;
	unit: string;
	colourAt: (value: number) => string;
}

const CHARTS: Record<ChartKind, ChartConfig> = {
	srm: { max: SRM_MAX, step: 5, unit: "SRM", colourAt: srmColour },
	ibu: { max: IBU_MAX, step: 20, unit: "IBU", colourAt: ibuColour },
};

function pct(value: number, max: number): number {
	return Math.min(100, Math.max(0, (value / max) * 100));
}

/** The bar(s) for one stat on a 0–max scale. */
export function RangeTrack({
	kind,
	stat,
	large = false,
}: {
	kind: ChartKind;
	stat: Stat;
	large?: boolean;
}) {
	let config = CHARTS[kind];
	let className = [styles.track, large && styles.large, stat.ranges.length === 0 && styles.varies]
		.filter(Boolean)
		.join(" ");

	return (
		<div className={className} aria-hidden="true">
			{kind === "srm" ? (
				<div className={styles.spectrum} style={{ background: SRM_SPECTRUM }} />
			) : null}
			<div
				className={styles.grid}
				style={{ backgroundSize: `${(config.step / config.max) * 100}% 100%` }}
			/>
			{stat.ranges.map((range) => {
				let left = pct(range.min, config.max);
				let width = pct(range.max, config.max) - left;
				return (
					<div
						key={`${range.min}-${range.max}`}
						className={styles.bar}
						title={range.label}
						style={{
							left: `${left}%`,
							width: `max(8px, ${width}%)`,
							background: rangeGradient(range, config.colourAt),
						}}
					/>
				);
			})}
		</div>
	);
}

export function RangeAxis({ kind }: { kind: ChartKind }) {
	let config = CHARTS[kind];
	let ticks: number[] = [];
	for (let v = 0; v <= config.max; v += config.step) ticks.push(v);
	return (
		<div className={styles.axis} aria-hidden="true">
			{ticks.map((tick) => (
				<span key={tick} style={{ left: `${pct(tick, config.max)}%` }}>
					{tick}
				</span>
			))}
		</div>
	);
}

function ChartRow({ kind, style }: { kind: ChartKind; style: BeerStyle }) {
	let stat = style.stats[kind];
	let value = formatStatFull(kind, stat);
	return (
		<li className={styles.row}>
			<div className={styles.rowHead}>
				<Link className={styles.name} to={paths.style(style.slug)}>
					<span className={styles.code}>{style.code}</span>
					{style.name}
				</Link>
				<span className={styles.value}>
					{value}
					{stat.ranges.length > 0 ? ` ${CHARTS[kind].unit}` : ""}
				</span>
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
	kind: ChartKind;
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
