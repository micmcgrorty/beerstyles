import { useId, useMemo } from "react";
import { Link, useNavigate, useSearchParams } from "react-router";

import { PageMeta } from "../app/layout.tsx";
import { paths } from "../app/routes.ts";
import { DEFAULT_QUERY } from "../catalogue/query.ts";
import { edition, getStyle, searchStyles } from "../catalogue/styles.ts";
import theme from "../ui/theme.module.css";
import { parseComparison, swapped, type Comparison } from "./compare-query.ts";
import styles from "./compare-page.module.css";

const isKnown = (slug: string) => getStyle(slug) !== null;

export function ComparePage() {
	let [searchParams] = useSearchParams();
	let { a, b, ignored } = useMemo(() => parseComparison(searchParams, isKnown), [searchParams]);

	return (
		<>
			<PageMeta
				title="Compare styles"
				description={`Compare any two ${edition.name} beer styles side by side.`}
			/>

			<div className={styles.intro}>
				<h1 className={theme.pageTitle}>Compare styles</h1>
				<p className={theme.lede}>
					Pick any two styles to compare their statistics and guidelines side by side. The link
					updates as you choose, so you can share it.
				</p>
			</div>

			<StylePickers comparison={{ a, b }} />

			{ignored.length > 0 ? (
				<p className={styles.notice} role="status">
					{`We couldn't find ${ignored.map((slug) => `“${slug}”`).join(" or ")}, so that choice was left empty.`}
				</p>
			) : null}
		</>
	);
}

/** Every style, grouped by category in BJCP order, for the two dropdowns. */
function useStyleOptions() {
	return useMemo(
		() =>
			searchStyles(DEFAULT_QUERY).sections.map((section) => ({
				label: section.category ? `${section.category.number}. ${section.category.name}` : "",
				styles: section.styles.map((style) => ({
					slug: style.slug,
					label: `${style.code} ${style.name}`,
				})),
			})),
		[],
	);
}

function StylePickers({ comparison }: { comparison: Comparison }) {
	let { a, b } = comparison;
	let navigate = useNavigate();
	let groups = useStyleOptions();
	let aId = useId();
	let bId = useId();

	let picker = (id: string, side: "a" | "b", label: string, value: string | null) => (
		<div className={styles.picker}>
			<label htmlFor={id} className={styles.pickerLabel}>
				<span className={styles.badge}>{side.toUpperCase()}</span> {label}
			</label>
			{/* Controlled by the URL, so it always shows what the URL says (after back, forward,
			    swap). flushSync renders the new URL straight away instead of in a transition,
			    so the select never briefly shows its old value. */}
			<select
				id={id}
				value={value ?? ""}
				onChange={(event) => {
					let slug = event.target.value || null;
					let to = side === "a" ? paths.compare(slug, b) : paths.compare(a, slug);
					void navigate(to, { flushSync: true });
				}}
			>
				<option value="">Choose a style…</option>
				{groups.map((group) => (
					<optgroup key={group.label} label={group.label}>
						{group.styles.map((style) => (
							<option key={style.slug} value={style.slug}>
								{style.label}
							</option>
						))}
					</optgroup>
				))}
			</select>
		</div>
	);

	return (
		<div className={styles.pickers} role="group" aria-label="Choose styles to compare">
			{picker(aId, "a", "First style", a)}
			{a || b ? (
				<Link to={swapped(comparison)} className={styles.swap} aria-label="Swap styles A and B">
					<svg
						width="20"
						height="20"
						viewBox="0 0 24 24"
						fill="none"
						stroke="currentColor"
						strokeWidth="2"
						strokeLinecap="round"
						strokeLinejoin="round"
						aria-hidden="true"
					>
						<path d="m7 4-4 4 4 4" />
						<path d="M3 8h14" />
						<path d="m17 20 4-4-4-4" />
						<path d="M21 16H7" />
					</svg>
					<span className={styles.swapText}>Swap</span>
				</Link>
			) : (
				<span className={styles.swapSpacer} />
			)}
			{picker(bId, "b", "Second style", b)}
		</div>
	);
}
