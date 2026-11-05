import type { Handle } from "remix/component";
import { css } from "remix/component";

import { IBU_MAX, SRM_MAX, SRM_SPECTRUM, ibuColour, rangeGradient, srmColour } from "../data/srm.ts";
import {
	formatStatFull,
	groupByCategory,
	type BeerStyle,
	type Stat,
} from "../data/styles.ts";
import { routes } from "../routes.ts";
import { categoryHeading } from "./theme.ts";

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

// ---------------------------------------------------------------------------
// Track: the bar(s) for one stat on a 0–max scale

const trackBase = css({
	position: "relative",
	height: "14px",
	borderRadius: "999px",
	background: "var(--track)",
	overflow: "hidden",
	// gridlines are drawn by a layer so they sit above the faint spectrum
	"& .grid": {
		position: "absolute",
		inset: 0,
		backgroundImage: "linear-gradient(to right, var(--grid) 1px, transparent 1px)",
	},
	"& .bar": {
		position: "absolute",
		top: 0,
		bottom: 0,
		borderRadius: "999px",
		boxShadow: "inset 0 0 0 1px rgba(0, 0, 0, 0.18)",
	},
});

const trackLarge = css({ height: "18px" });

const srmTrack = css({
	"&::before": {
		content: '""',
		position: "absolute",
		inset: 0,
		background: SRM_SPECTRUM,
		opacity: 0.22,
	},
});

const variesTrack = css({
	backgroundImage:
		"repeating-linear-gradient(135deg, var(--grid) 0 6px, transparent 6px 12px)",
});

export function RangeTrack(handle: Handle<{ kind: ChartKind; stat: Stat; large?: boolean }>) {
	return () => {
		let { kind, stat, large } = handle.props;
		let config = CHARTS[kind];
		let mixes = [trackBase];
		if (large) mixes.push(trackLarge);
		if (kind === "srm") mixes.push(srmTrack);
		if (stat.ranges.length === 0) mixes.push(variesTrack);

		return (
			<div mix={mixes} aria-hidden="true">
				<div
					class="grid"
					style={{ backgroundSize: `${(config.step / config.max) * 100}% 100%` }}
				/>
				{stat.ranges.map((range) => {
					let left = pct(range.min, config.max);
					let width = pct(range.max, config.max) - left;
					return (
						<div
							key={`${range.min}-${range.max}`}
							class="bar"
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
	};
}

// ---------------------------------------------------------------------------
// Axis

const axisStyles = css({
	position: "relative",
	height: "20px",
	fontSize: "12px",
	fontWeight: 600,
	fontVariantNumeric: "tabular-nums",
	color: "var(--muted)",
	"& span": {
		position: "absolute",
		top: 0,
		transform: "translateX(-50%)",
	},
	"& span:first-child": { transform: "none" },
	"& span:last-child": { transform: "translateX(-100%)" },
});

export function RangeAxis(handle: Handle<{ kind: ChartKind }>) {
	return () => {
		let config = CHARTS[handle.props.kind];
		let ticks: number[] = [];
		for (let v = 0; v <= config.max; v += config.step) ticks.push(v);
		return (
			<div mix={axisStyles} aria-hidden="true">
				{ticks.map((tick) => (
					<span key={tick} style={{ left: `${pct(tick, config.max)}%` }}>
						{tick}
					</span>
				))}
			</div>
		);
	};
}

// ---------------------------------------------------------------------------
// Full chart: one row per style

const stickyAxis = css({
	position: "sticky",
	top: 0,
	zIndex: 2,
	marginTop: "8px",
	padding: "10px 0 6px",
	background: "var(--bg)",
	borderBottom: "1px solid var(--rule)",
	"& .label": {
		display: "flex",
		justifyContent: "space-between",
		marginBottom: "4px",
		fontSize: "12px",
		fontWeight: 700,
		letterSpacing: "0.08em",
		textTransform: "uppercase",
		color: "var(--muted)",
	},
});

const sectionStyles = css({
	marginTop: "28px",
	"& h2": { marginBottom: "6px" },
});

const rowList = css({
	listStyle: "none",
	margin: 0,
	padding: 0,
});

const rowStyles = css({
	padding: "10px 0",
	borderBottom: "1px solid var(--rule)",
	"& .head": {
		display: "flex",
		justifyContent: "space-between",
		alignItems: "baseline",
		gap: "12px",
		marginBottom: "6px",
	},
	"& .name": {
		fontWeight: 650,
		textDecoration: "none",
		"&:hover": { textDecoration: "underline", textUnderlineOffset: "2px" },
	},
	"& .code": { color: "var(--muted)", fontSize: "13px", marginRight: "6px", fontWeight: 600 },
	"& .value": {
		flexShrink: 0,
		fontVariantNumeric: "tabular-nums",
		color: "var(--muted)",
		fontSize: "14px",
		textAlign: "right",
	},
});

function ChartRow(handle: Handle<{ kind: ChartKind; style: BeerStyle }>) {
	return () => {
		let { kind, style } = handle.props;
		let stat = style.stats[kind];
		let value = formatStatFull(kind, stat);
		return (
			<li mix={rowStyles}>
				<div class="head">
					<a class="name" href={routes.style.href({ slug: style.slug })}>
						<span class="code">{style.code}</span>
						{style.name}
					</a>
					<span class="value">
						{value}
						{stat.ranges.length > 0 ? ` ${CHARTS[kind].unit}` : ""}
					</span>
				</div>
				<RangeTrack kind={kind} stat={stat} />
			</li>
		);
	};
}

export function RangeChart(
	handle: Handle<{ kind: ChartKind; styles: BeerStyle[]; grouped: boolean; label: string }>,
) {
	return () => {
		let { kind, styles, grouped, label } = handle.props;

		return (
			<div>
				<div mix={stickyAxis}>
					<div class="label">
						<span>Style</span>
						<span>{label}</span>
					</div>
					<RangeAxis kind={kind} />
				</div>

				{grouped ? (
					groupByCategory(styles).map((group) => (
						<section
							key={group.category.number}
							mix={sectionStyles}
							aria-labelledby={`cat-${group.category.number}`}
						>
							<h2 id={`cat-${group.category.number}`} mix={categoryHeading}>
								<span class="num">{group.category.number}</span>
								{group.category.name}
							</h2>
							<ol mix={rowList}>
								{group.styles.map((style) => (
									<ChartRow key={style.slug} kind={kind} style={style} />
								))}
							</ol>
						</section>
					))
				) : (
					<ol mix={[rowList, css({ marginTop: "8px" })]}>
						{styles.map((style) => (
							<ChartRow key={style.slug} kind={kind} style={style} />
						))}
					</ol>
				)}
			</div>
		);
	};
}
