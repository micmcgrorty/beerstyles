import type { Range } from "./stats.ts";

export const SRM_MAX = 40;
export const IBU_MAX = 120;

// Approximate display colour for each whole SRM value.
const SRM_HEX: Record<number, string> = {
	1: "#FFE699",
	2: "#FFD878",
	3: "#FFCA5A",
	4: "#FFBF42",
	5: "#FBB123",
	6: "#F8A600",
	7: "#F39C00",
	8: "#EA8F00",
	9: "#E58500",
	10: "#DE7C00",
	11: "#D77200",
	12: "#CF6900",
	13: "#CB6200",
	14: "#C35900",
	15: "#BB5100",
	16: "#B54C00",
	17: "#B04500",
	18: "#A63E00",
	19: "#A13700",
	20: "#9B3200",
	21: "#952D00",
	22: "#8E2900",
	23: "#882300",
	24: "#821E00",
	25: "#7B1A00",
	26: "#771900",
	27: "#701400",
	28: "#6A0E00",
	29: "#660D00",
	30: "#5E0B00",
	31: "#5A0A02",
	32: "#560904",
	33: "#520907",
	34: "#4C0505",
	35: "#470606",
	36: "#440607",
	37: "#3F0708",
	38: "#3B0607",
	39: "#3A070B",
	40: "#36080A",
};

function hexToRgb(hex: string): [number, number, number] {
	let n = Number.parseInt(hex.slice(1), 16);
	return [(n >> 16) & 255, (n >> 8) & 255, n & 255];
}

function rgbToHex([r, g, b]: [number, number, number]): string {
	return `#${[r, g, b].map((v) => Math.round(v).toString(16).padStart(2, "0")).join("")}`;
}

function mix(a: string, b: string, t: number): string {
	let [r1, g1, b1] = hexToRgb(a);
	let [r2, g2, b2] = hexToRgb(b);
	let lerp = (from: number, to: number) => from + (to - from) * t;
	return rgbToHex([lerp(r1, r2), lerp(g1, g2), lerp(b1, b2)]);
}

/** Colour for any SRM value, interpolating between whole numbers (so 2.5 or 4.5 work). */
export function srmColour(srm: number): string {
	let v = Math.min(SRM_MAX, Math.max(1, srm));
	let lo = Math.floor(v);
	let hi = Math.ceil(v);
	if (lo === hi) return SRM_HEX[lo];
	return mix(SRM_HEX[lo], SRM_HEX[hi], v - lo).toUpperCase();
}

/** Colour for a bitterness value: pale hop green at 0 to deep green at the top of the scale. */
export function ibuColour(ibu: number): string {
	let t = Math.min(1, Math.max(0, ibu / IBU_MAX));
	return mix("#C9DC8A", "#3E6418", t).toUpperCase();
}

/** Gradient across one range, with a stop for every whole step so it follows the scale. */
export function rangeGradient(
	range: Range,
	colourAt: (v: number) => string,
	direction = "90deg",
): string {
	let steps = Math.max(1, Math.ceil(range.max - range.min));
	let stops: string[] = [];
	for (let i = 0; i <= steps; i++) {
		let v = range.min + ((range.max - range.min) * i) / steps;
		stops.push(`${colourAt(v)} ${((i / steps) * 100).toFixed(1)}%`);
	}
	return `linear-gradient(${direction}, ${stops.join(", ")})`;
}

/** The whole 0–40 SRM spectrum, used as a faint track behind colour bars. */
export const SRM_SPECTRUM = rangeGradient({ min: 1, max: SRM_MAX }, srmColour);
