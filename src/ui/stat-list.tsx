import { formatRange, formatStat, type BeerStyle, type StatKey } from "../catalogue/styles.ts";
import styles from "./stat-list.module.css";

const PRIMARY: { key: StatKey; label: string; title: string }[] = [
	{ key: "abv", label: "ABV", title: "Alcohol by volume" },
	{ key: "ibu", label: "IBU", title: "International Bitterness Units" },
	{ key: "srm", label: "SRM", title: "Standard Reference Method (colour)" },
];

const SECONDARY: { key: StatKey; label: string; title: string }[] = [
	{ key: "og", label: "OG", title: "Original gravity" },
	{ key: "fg", label: "FG", title: "Final gravity" },
];

/**
 * Vital statistics as a definition list.
 * Compact (cards): ABV, IBU and SRM large, OG and FG on one small line.
 * Full (detail page): every stat at the same size, with labelled sub-ranges.
 */
export function StatList({ style, full = false }: { style: BeerStyle; full?: boolean }) {
	return (
		<dl className={`${styles.list} ${full ? styles.full : styles.compact}`}>
			{PRIMARY.map((stat) => (
				<div key={stat.key} className={styles.primary}>
					<dt>
						<abbr title={stat.title}>{stat.label}</abbr>
					</dt>
					<StatValue style={style} stat={stat.key} full={full} />
				</div>
			))}
			{SECONDARY.map((stat) => (
				<div key={stat.key} className={styles.secondary}>
					<dt>
						<abbr title={stat.title}>{stat.label}</abbr>
					</dt>
					<StatValue style={style} stat={stat.key} full={full} />
				</div>
			))}
		</dl>
	);
}

function StatValue({ style, stat, full }: { style: BeerStyle; stat: StatKey; full: boolean }) {
	if (!full) return <dd>{formatStat(stat, style.stats[stat])}</dd>;
	let { ranges } = style.stats[stat];
	if (ranges.length === 0) return <dd>{formatStat(stat, style.stats[stat], { form: "full" })}</dd>;
	return (
		<dd>
			{ranges.map((range) => (
				<span key={`${range.min}-${range.max}`} className={styles.line}>
					<span className={styles.value}>{formatRange(stat, range)}</span>
					{range.label ? <span className={styles.label}> {range.label}</span> : null}
				</span>
			))}
		</dd>
	);
}
