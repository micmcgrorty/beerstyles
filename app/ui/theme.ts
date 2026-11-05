import { css } from "remix/component";

/** Centred page column. */
export const container = css({
	width: "100%",
	maxWidth: "960px",
	marginInline: "auto",
	paddingInline: "16px",
	"@media (min-width: 640px)": { paddingInline: "24px" },
});

/** Hide visually but keep for screen readers. */
export const srOnly = css({
	position: "absolute",
	width: "1px",
	height: "1px",
	padding: 0,
	margin: "-1px",
	overflow: "hidden",
	clip: "rect(0, 0, 0, 0)",
	whiteSpace: "nowrap",
	border: 0,
});

/** Small uppercase label, used above stat values and as eyebrows. */
export const eyebrow = css({
	margin: 0,
	fontSize: "12px",
	fontWeight: 700,
	letterSpacing: "0.08em",
	textTransform: "uppercase",
	color: "var(--muted)",
});

export const pageTitle = css({
	margin: 0,
	fontSize: "clamp(30px, 6vw, 44px)",
	fontWeight: 800,
	letterSpacing: "-0.03em",
	lineHeight: 1.05,
});

export const lede = css({
	margin: 0,
	maxWidth: "60ch",
	color: "var(--muted)",
	fontSize: "17px",
});

/** Category heading used to group styles. */
export const categoryHeading = css({
	margin: 0,
	display: "flex",
	alignItems: "baseline",
	gap: "10px",
	fontSize: "18px",
	fontWeight: 750,
	letterSpacing: "-0.01em",
	"& .num": {
		fontSize: "13px",
		fontWeight: 700,
		color: "var(--accent)",
		minWidth: "2ch",
	},
});

/** Pill used for tags and commercial examples. */
export const pill = css({
	display: "inline-block",
	padding: "4px 10px",
	borderRadius: "999px",
	background: "var(--track)",
	fontSize: "14px",
	lineHeight: 1.4,
});
