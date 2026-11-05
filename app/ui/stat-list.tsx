import type { Handle } from "remix/component";
import { css } from "remix/component";

import { formatRange, formatStat, type BeerStyle, type StatKey } from "../data/styles.ts";

const PRIMARY: { key: StatKey; label: string; title: string }[] = [
	{ key: "abv", label: "ABV", title: "Alcohol by volume" },
	{ key: "ibu", label: "IBU", title: "International Bitterness Units" },
	{ key: "srm", label: "SRM", title: "Standard Reference Method (colour)" },
];

const SECONDARY: { key: StatKey; label: string; title: string }[] = [
	{ key: "og", label: "OG", title: "Original gravity" },
	{ key: "fg", label: "FG", title: "Final gravity" },
];

const listStyles = css({
	margin: 0,
	display: "grid",
	gridTemplateColumns: "repeat(3, minmax(0, 1fr))",
	gap: "10px 12px",
	"& div": { minWidth: 0 },
	"& dt": {
		fontSize: "12px",
		fontWeight: 700,
		letterSpacing: "0.08em",
		textTransform: "uppercase",
		color: "var(--muted)",
	},
	"& dt abbr": { textDecoration: "none" },
	"& dd": {
		margin: 0,
		fontVariantNumeric: "tabular-nums",
		fontSize: "18px",
		fontWeight: 700,
		letterSpacing: "-0.01em",
	},
	"& .secondary dd": { fontSize: "15px", fontWeight: 600 },
});

const fullStyles = css({
	gridTemplateColumns: "repeat(auto-fill, minmax(140px, 1fr))",
	gap: "16px 20px",
	"& dd": { fontSize: "20px", lineHeight: 1.3 },
	"& .secondary dd": { fontSize: "20px", fontWeight: 700 },
	"& .line": { display: "block" },
	"& .value": { whiteSpace: "nowrap" },
	"& .label": { fontSize: "14px", fontWeight: 500, color: "var(--muted)" },
});

const compactStyles = css({
	gridTemplateColumns: "repeat(6, minmax(0, 1fr))",
	"& .primary": { gridColumn: "span 2" },
	"& .secondary": {
		gridColumn: "span 3",
		display: "flex",
		gap: "6px",
		alignItems: "baseline",
	},
	"& .secondary dd": { fontSize: "14px", fontWeight: 600 },
});

function StatValue(handle: Handle<{ style: BeerStyle; stat: StatKey; full?: boolean }>) {
	return () => {
		let { style, stat, full } = handle.props;
		if (!full) return <dd>{formatStat(stat, style.stats[stat])}</dd>;
		let { ranges } = style.stats[stat];
		if (ranges.length === 0) return <dd>Varies by type</dd>;
		return (
			<dd>
				{ranges.map((range) => (
					<span key={`${range.min}-${range.max}`} class="line">
						<span class="value">{formatRange(stat, range)}</span>
						{range.label ? <span class="label"> {range.label}</span> : null}
					</span>
				))}
			</dd>
		);
	};
}

/**
 * Vital statistics as a definition list.
 * Compact (cards): ABV, IBU and SRM large, OG and FG on one small line.
 * Full (detail page): every stat at the same size, with labelled sub-ranges.
 */
export function StatList(handle: Handle<{ style: BeerStyle; full?: boolean }>) {
	return () => {
		let { style, full } = handle.props;

		return (
			<dl mix={[listStyles, full ? fullStyles : compactStyles]}>
				{PRIMARY.map((stat) => (
					<div key={stat.key} class="primary">
						<dt>
							<abbr title={stat.title}>{stat.label}</abbr>
						</dt>
						<StatValue full={full} stat={stat.key} style={style} />
					</div>
				))}
				{SECONDARY.map((stat) => (
					<div key={stat.key} class="secondary">
						<dt>
							<abbr title={stat.title}>{stat.label}</abbr>
						</dt>
						<StatValue full={full} stat={stat.key} style={style} />
					</div>
				))}
			</dl>
		);
	};
}
