import type { Handle } from "remix/component";
import { css } from "remix/component";

import { IBU_MAX, SRM_MAX, styleSwatch } from "../data/srm.ts";
import { formatStatFull, groupLabel, queryHref, DEFAULT_QUERY, type BeerStyle } from "../data/styles.ts";
import { routes } from "../routes.ts";
import { Layout } from "../ui/layout.tsx";
import { RangeTrack } from "../ui/range-chart.tsx";
import { StatList } from "../ui/stat-list.tsx";
import { eyebrow, pageTitle, pill } from "../ui/theme.ts";

export interface StylePageProps {
	style: BeerStyle;
	previous: BeerStyle | null;
	next: BeerStyle | null;
}

const SECTIONS: { key: keyof BeerStyle; heading: string }[] = [
	{ key: "aroma", heading: "Aroma" },
	{ key: "appearance", heading: "Appearance" },
	{ key: "flavor", heading: "Flavour" },
	{ key: "mouthfeel", heading: "Mouthfeel" },
	{ key: "comments", heading: "Comments" },
	{ key: "history", heading: "History" },
	{ key: "ingredients", heading: "Characteristic ingredients" },
	{ key: "comparison", heading: "Style comparison" },
	{ key: "entryInstructions", heading: "Entry instructions" },
];

const backLink = css({
	display: "inline-flex",
	alignItems: "center",
	minHeight: "44px",
	marginTop: "-10px",
	fontWeight: 600,
	color: "var(--muted)",
	textDecoration: "none",
	"&:hover": { color: "var(--text)" },
});

const header = css({
	display: "grid",
	gap: "12px",
	marginBottom: "24px",
	"& .meta": { display: "flex", flexWrap: "wrap", gap: "6px 14px", alignItems: "baseline" },
	"& .code": {
		padding: "2px 10px",
		borderRadius: "999px",
		background: "var(--accent-soft)",
		color: "var(--text)",
		fontWeight: 700,
		fontSize: "14px",
	},
	"& .overall": { margin: 0, fontSize: "19px", lineHeight: 1.55, maxWidth: "65ch" },
});

const panel = css({
	display: "grid",
	gap: "20px",
	padding: "20px",
	borderRadius: "16px",
	background: "var(--surface)",
	border: "1px solid var(--rule)",
	boxShadow: "var(--shadow)",
	"@media (min-width: 720px)": { gridTemplateColumns: "120px 1fr", alignItems: "start" },
	"& .glass": {
		width: "72px",
		height: "96px",
		borderRadius: "6px 6px 14px 14px",
		boxShadow: "inset 0 0 0 1px rgba(0,0,0,0.18)",
		"@media (min-width: 720px)": { width: "100px", height: "132px" },
	},
	"& .tracks": { display: "grid", gap: "14px", marginTop: "4px" },
	"& .track-head": {
		display: "flex",
		justifyContent: "space-between",
		marginBottom: "6px",
		fontSize: "14px",
		color: "var(--muted)",
	},
	"& .track-head strong": { color: "var(--text)", fontWeight: 650 },
	"& .scale": {
		display: "flex",
		justifyContent: "space-between",
		marginTop: "3px",
		fontSize: "12px",
		color: "var(--muted)",
	},
});

const body = css({
	display: "grid",
	gap: "28px",
	marginTop: "36px",
	"& section h2": {
		margin: "0 0 6px",
		fontSize: "18px",
		fontWeight: 750,
		letterSpacing: "-0.01em",
	},
	"& section p": { margin: 0, maxWidth: "70ch" },
	"& ul": {
		listStyle: "none",
		margin: 0,
		padding: 0,
		display: "flex",
		flexWrap: "wrap",
		gap: "6px",
	},
	"& .tag": { textDecoration: "none" },
	"& .tag:hover": { textDecoration: "underline" },
});

const pager = css({
	display: "grid",
	gap: "10px",
	marginTop: "48px",
	paddingTop: "20px",
	borderTop: "1px solid var(--rule)",
	"@media (min-width: 640px)": { gridTemplateColumns: "1fr 1fr" },
	"& a": {
		display: "grid",
		gap: "2px",
		padding: "12px 16px",
		borderRadius: "12px",
		border: "1px solid var(--rule)",
		background: "var(--surface)",
		textDecoration: "none",
	},
	"& a:hover": { borderColor: "var(--muted)" },
	"& .next": { textAlign: "right", gridColumn: "-2" },
	"& span": { fontSize: "13px", color: "var(--muted)" },
	"& strong": { fontWeight: 700 },
});

export function StylePage(handle: Handle<StylePageProps>) {
	return () => {
		let { style, previous, next } = handle.props;
		let swatch = styleSwatch(style.stats.srm.ranges, "180deg");
		let ibu = formatStatFull("ibu", style.stats.ibu);
		let srm = formatStatFull("srm", style.stats.srm);

		return (
			<Layout
				title={`${style.name} (${style.code})`}
				description={style.overallImpression ?? `BJCP 2015 style guidelines for ${style.name}.`}
			>
				<a href={routes.home.href()} mix={backLink}>
					← All styles
				</a>

				<header mix={header}>
					<div class="meta">
						<span class="code">{style.code}</span>
						<p mix={eyebrow}>
							{style.category.number}. {style.category.name}
						</p>
					</div>
					<h1 mix={pageTitle}>{style.name}</h1>
					{style.overallImpression ? <p class="overall">{style.overallImpression}</p> : null}
				</header>

				<div mix={panel}>
					<div
						class="glass"
						role="img"
						aria-label={`Colour: ${srm} SRM`}
						style={{
							background:
								swatch ??
								"repeating-linear-gradient(135deg, var(--track) 0 6px, var(--rule) 6px 12px)",
						}}
					/>
					<div>
						<StatList style={style} full />
						<div class="tracks">
							<div>
								<div class="track-head">
									<strong>Colour</strong>
									<span>{srm === "Varies by type" ? srm : `${srm} SRM`}</span>
								</div>
								<RangeTrack kind="srm" stat={style.stats.srm} large />
								<div class="scale" aria-hidden="true">
									<span>0</span>
									<span>{SRM_MAX}</span>
								</div>
							</div>
							<div>
								<div class="track-head">
									<strong>Bitterness</strong>
									<span>{ibu === "Varies by type" ? ibu : `${ibu} IBU`}</span>
								</div>
								<RangeTrack kind="ibu" stat={style.stats.ibu} large />
								<div class="scale" aria-hidden="true">
									<span>0</span>
									<span>{IBU_MAX}</span>
								</div>
							</div>
						</div>
					</div>
				</div>

				<div mix={body}>
					{SECTIONS.map((section) => {
						let text = style[section.key];
						if (typeof text !== "string" || !text) return null;
						return (
							<section key={section.key}>
								<h2>{section.heading}</h2>
								<p>{text}</p>
							</section>
						);
					})}

					{style.commercialExamples.length > 0 ? (
						<section>
							<h2>Commercial examples</h2>
							<ul>
								{style.commercialExamples.map((example) => (
									<li key={example} mix={pill}>
										{example}
									</li>
								))}
							</ul>
						</section>
					) : null}

					<section>
						<h2>Browse similar</h2>
						<ul>
							{style.groups.map((group) => (
								<li key={group}>
									<a
										class="tag"
										mix={pill}
										href={queryHref(routes.home.href(), DEFAULT_QUERY, { group })}
									>
										{groupLabel(group)}
									</a>
								</li>
							))}
						</ul>
					</section>

					{style.tags.length > 0 ? (
						<section>
							<h2>BJCP tags</h2>
							<ul>
								{style.tags.map((tag) => (
									<li key={tag} mix={pill}>
										{tag}
									</li>
								))}
							</ul>
						</section>
					) : null}
				</div>

				<nav mix={pager} aria-label="Other styles">
					{previous ? (
						<a href={routes.style.href({ slug: previous.slug })}>
							<span>← Previous · {previous.code}</span>
							<strong>{previous.name}</strong>
						</a>
					) : null}
					{next ? (
						<a class="next" href={routes.style.href({ slug: next.slug })}>
							<span>Next · {next.code} →</span>
							<strong>{next.name}</strong>
						</a>
					) : null}
				</nav>
			</Layout>
		);
	};
}
