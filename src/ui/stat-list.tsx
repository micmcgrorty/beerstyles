import { type BeerStyle } from "../catalogue/catalogue.ts";
import { STATS, formatRange, formatStat, type StatKey } from "../catalogue/stats.ts";
import styles from "./stat-list.module.css";

const PRIMARY: StatKey[] = ["abv", "ibu", "srm"];
const SECONDARY: StatKey[] = ["og", "fg"];

/**
 * Vital statistics as a definition list.
 * Compact (cards): ABV, IBU and SRM large, OG and FG on one small line.
 * Full (detail page): every stat at the same size, with labelled sub-ranges.
 */
export function StatList({ style, full = false }: { style: BeerStyle; full?: boolean }) {
	return (
		<dl className={`${styles.list} ${full ? styles.full : styles.compact}`}>
			{PRIMARY.map((key) => (
				<div key={key} className={styles.primary}>
					<dt>
						<abbr title={STATS[key].title}>{STATS[key].abbr}</abbr>
					</dt>
					<StatValue style={style} stat={key} full={full} />
				</div>
			))}
			{SECONDARY.map((key) => (
				<div key={key} className={styles.secondary}>
					<dt>
						<abbr title={STATS[key].title}>{STATS[key].abbr}</abbr>
					</dt>
					<StatValue style={style} stat={key} full={full} />
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
