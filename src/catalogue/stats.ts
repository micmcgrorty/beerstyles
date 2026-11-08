/** A style's vital statistics: what each one is, how to parse it, and how to show it. */

import { SRM_MAX, SRM_SPECTRUM, hopGreen, rangeGradient, srmColour } from "./colours.ts";

/** The top of the bitterness scale, in IBU. */
const IBU_MAX = 120;

export interface Range {
	min: number;
	max: number;
	label?: string;
}

export interface Stat {
	/** The figure as published, e.g. "4.2 - 5.3%". */
	text: string;
	/** Parsed ranges. Empty when the guidelines say the value varies by type. */
	ranges: Range[];
}

/** Every vital statistic, in display order. */
export const STAT_KEYS = ["abv", "ibu", "srm", "og", "fg"] as const;

export type StatKey = (typeof STAT_KEYS)[number];

/** A stat drawn as bars on a 0–max scale. */
export interface Scale {
	max: number;
	/** Gap between gridlines and axis ticks. */
	step: number;
	/** Display colour for a value on this scale. */
	colourAt: (value: number) => string;
	/** A faint background showing the whole scale's colours, if it has one. */
	spectrum?: string;
}

export interface StatDefinition {
	/** Short name, e.g. "ABV". */
	abbr: string;
	/** What the abbreviation stands for, e.g. "Alcohol by volume". */
	title: string;
	/** What it measures, in plain words, e.g. "Strength". */
	label: string;
	/** Decimal places to show. Whole numbers are shown as published when unset. */
	decimals?: number;
	/** Written straight after each number, e.g. "%". */
	suffix?: string;
	/** Written after the whole value when asked for, e.g. "IBU". */
	unit?: string;
	/** Offered as a sort option. */
	sortable?: boolean;
	/** Present when the stat is charted and drawn as bars. */
	scale?: Scale;
}

const DEFINITIONS = {
	abv: {
		abbr: "ABV",
		title: "Alcohol by volume",
		label: "Strength",
		decimals: 1,
		suffix: "%",
		sortable: true,
	},
	ibu: {
		abbr: "IBU",
		title: "International Bitterness Units",
		label: "Bitterness",
		unit: "IBU",
		sortable: true,
		scale: { max: IBU_MAX, step: 20, colourAt: (ibu) => hopGreen(ibu / IBU_MAX) },
	},
	srm: {
		abbr: "SRM",
		title: "Standard Reference Method (colour)",
		label: "Colour",
		unit: "SRM",
		sortable: true,
		scale: { max: SRM_MAX, step: 5, colourAt: srmColour, spectrum: SRM_SPECTRUM },
	},
	og: { abbr: "OG", title: "Original gravity", label: "Original gravity", decimals: 3 },
	fg: { abbr: "FG", title: "Final gravity", label: "Final gravity", decimals: 3 },
} satisfies Record<StatKey, StatDefinition>;

/** What each stat is and how to show it. */
export const STATS: Record<StatKey, StatDefinition> = DEFINITIONS;

/** The stats that have a scale, and so get a chart and a bar on each style page. */
export type ChartedStat = {
	[K in StatKey]: (typeof DEFINITIONS)[K] extends { scale: Scale } ? K : never;
}[StatKey];

export function isCharted(key: StatKey): key is ChartedStat {
	return STATS[key].scale !== undefined;
}

/** Charted stats, in the order the style page shows their bars. Tests check it lists every stat with a scale. */
export const CHARTED_STATS: ChartedStat[] = ["srm", "ibu"];

/** The scale of a charted stat. */
export function scaleOf(key: ChartedStat): Scale {
	return DEFINITIONS[key].scale;
}

/** How far along its scale a value sits, as a percentage clamped to 0–100. */
export function scalePercent(key: ChartedStat, value: number): number {
	return Math.min(100, Math.max(0, (value / scaleOf(key).max) * 100));
}

/** A gradient across every range a stat allows, on its scale's colours. Null when it varies by type. */
export function statGradient(key: ChartedStat, stat: Stat, direction = "180deg"): string | null {
	let extent = span(stat.ranges);
	return extent ? rangeGradient(extent, scaleOf(key).colourAt, direction) : null;
}

// ---------------------------------------------------------------------------
// Parsing

const RANGE_PATTERN = /(\d+(?:\.\d+)?)\s*-\s*(\d+(?:\.\d+)?)\s*%?\s*(?:\(([^)]+)\))?/g;

/** Parse "5 - 14 (pale), 15 - 22 (dark)" into ranges. Returns [] for "Variable by type". */
export function parseRanges(text: string): Range[] {
	let ranges: Range[] = [];
	for (let match of text.matchAll(RANGE_PATTERN)) {
		let range: Range = { min: Number(match[1]), max: Number(match[2]) };
		if (match[3]) range.label = match[3].trim();
		ranges.push(range);
	}
	return ranges;
}

/** Parse every published stat, e.g. { abv: "4.2 - 5.3%", … }. */
export function parseStats(published: Record<StatKey, string>): Record<StatKey, Stat> {
	let parse = (key: StatKey): Stat => ({
		text: published[key],
		ranges: parseRanges(published[key]),
	});
	return {
		abv: parse("abv"),
		ibu: parse("ibu"),
		srm: parse("srm"),
		og: parse("og"),
		fg: parse("fg"),
	};
}

/** The overall extent of a set of ranges. */
export function span(ranges: Range[]): Range | null {
	if (ranges.length === 0) return null;
	return {
		min: Math.min(...ranges.map((r) => r.min)),
		max: Math.max(...ranges.map((r) => r.max)),
	};
}

// ---------------------------------------------------------------------------
// Formatting

function formatNumber(key: StatKey, n: number): string {
	let { decimals } = STATS[key];
	return decimals === undefined ? String(n) : n.toFixed(decimals);
}

/** One range, e.g. "4.2–5.3%". */
export function formatRange(key: StatKey, r: Range): string {
	return `${formatNumber(key, r.min)}–${formatNumber(key, r.max)}${STATS[key].suffix ?? ""}`;
}

export interface FormatOptions {
	/**
	 * "short" (default) collapses multi-range values to their overall span: "5–22".
	 * "full" lists each published range: "5–14 (pale), 15–22 (dark)".
	 */
	form?: "short" | "full";
	/** Append the stat's unit, if it has one: "8–12 IBU". Values that vary by type never get one. */
	unit?: boolean;
}

/** A stat for display, e.g. "4.2–5.3%". Values that vary by type read "Varies" (short) or "Varies by type" (full). */
export function formatStat(
	key: StatKey,
	stat: Stat,
	{ form = "short", unit = false }: FormatOptions = {},
): string {
	let extent = span(stat.ranges);
	if (!extent) return form === "short" ? "Varies" : "Varies by type";
	let text =
		form === "short"
			? formatRange(key, extent)
			: stat.ranges
					.map((r) => `${formatRange(key, r)}${r.label ? ` (${r.label})` : ""}`)
					.join(", ");
	let unitWord = STATS[key].unit;
	return unit && unitWord ? `${text} ${unitWord}` : text;
}
