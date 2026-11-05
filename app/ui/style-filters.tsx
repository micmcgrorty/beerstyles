import type { Handle } from "remix/component";
import { css } from "remix/component";

import { GROUPS, SORTS, groupLabel, queryHref, type StyleQuery } from "../data/styles.ts";
import { srOnly } from "./theme.ts";

export interface StyleFiltersProps {
	/** Page the form submits to and the chips link to. */
	path: string;
	query: StyleQuery;
	count: number;
	total: number;
}

const wrapper = css({
	display: "flex",
	flexDirection: "column",
	gap: "12px",
});

const formStyles = css({
	display: "grid",
	gridTemplateColumns: "1fr auto",
	gap: "8px",
	"@media (min-width: 640px)": { gridTemplateColumns: "1fr auto auto" },
	"& input, & select, & button": {
		font: "inherit",
		minHeight: "44px",
		borderRadius: "10px",
		border: "1px solid var(--rule)",
		background: "var(--surface)",
		color: "var(--text)",
	},
	"& input": {
		padding: "0 14px",
		width: "100%",
		minWidth: 0,
		gridColumn: "1 / -1",
		"@media (min-width: 640px)": { gridColumn: "auto" },
	},
	"& select": { padding: "0 10px" },
	"& .sort": {
		display: "flex",
		alignItems: "center",
		gap: "8px",
		gridColumn: "1 / 2",
		color: "var(--muted)",
		fontSize: "14px",
		"@media (min-width: 640px)": { gridColumn: "auto" },
	},
	"& .sort select": { flex: 1 },
	"& button": {
		padding: "0 18px",
		fontWeight: 700,
		background: "var(--text)",
		color: "var(--bg)",
		borderColor: "var(--text)",
		cursor: "pointer",
	},
});

const chipRow = css({
	listStyle: "none",
	margin: "0 -16px",
	padding: "2px 16px 6px",
	display: "flex",
	gap: "6px",
	overflowX: "auto",
	scrollbarWidth: "thin",
	"@media (min-width: 640px)": { flexWrap: "wrap", overflowX: "visible", margin: 0, padding: 0 },
});

const chip = css({
	display: "inline-flex",
	alignItems: "center",
	minHeight: "36px",
	padding: "0 14px",
	borderRadius: "999px",
	border: "1px solid var(--rule)",
	background: "var(--surface)",
	whiteSpace: "nowrap",
	fontSize: "14px",
	fontWeight: 600,
	textDecoration: "none",
	"&:hover": { borderColor: "var(--muted)" },
	"&[aria-current='true']": {
		background: "var(--text)",
		borderColor: "var(--text)",
		color: "var(--bg)",
	},
});

const summary = css({
	margin: 0,
	color: "var(--muted)",
	fontSize: "14px",
	"& a": { color: "var(--text)", fontWeight: 600, marginLeft: "6px" },
});

export function StyleFilters(handle: Handle<StyleFiltersProps>) {
	return () => {
		let { path, query, count, total } = handle.props;
		let filtered = Boolean(query.q || query.group);
		let searchId = `${handle.id}-q`;
		let sortId = `${handle.id}-sort`;

		return (
			<div mix={wrapper}>
				<form method="get" action={path} role="search" mix={formStyles}>
					<label htmlFor={searchId} mix={srOnly}>
						Search styles
					</label>
					<input
						id={searchId}
						type="search"
						name="q"
						value={query.q}
						placeholder="Search, e.g. stout, Kölsch, 21A"
						autoComplete="off"
					/>
					<span class="sort">
						<label htmlFor={sortId}>Sort</label>
						<select id={sortId} name="sort">
							{SORTS.map((sort) => (
								<option key={sort.id} value={sort.id} selected={sort.id === query.sort}>
									{sort.label}
								</option>
							))}
						</select>
					</span>
					{query.group ? <input type="hidden" name="group" value={query.group} /> : null}
					<button type="submit">Apply</button>
				</form>

				<nav aria-label="Filter by type">
					<ul mix={chipRow}>
						<li>
							<a
								href={queryHref(path, query, { group: null })}
								mix={chip}
								aria-current={query.group === null ? "true" : undefined}
							>
								All
							</a>
						</li>
						{GROUPS.map((group) => (
							<li key={group.id}>
								<a
									href={queryHref(path, query, { group: group.id })}
									mix={chip}
									aria-current={query.group === group.id ? "true" : undefined}
								>
									{group.label}
								</a>
							</li>
						))}
					</ul>
				</nav>

				<p mix={summary} aria-live="polite">
					{filtered ? `Showing ${count} of ${total} styles` : `${total} styles`}
					{query.group ? ` in ${groupLabel(query.group)}` : ""}
					{query.q ? ` matching “${query.q}”` : ""}
					{filtered ? <a href={queryHref(path, query, { q: "", group: null })}>Clear filters</a> : null}
				</p>
			</div>
		);
	};
}

export function EmptyResults(handle: Handle<{ path: string; query: StyleQuery }>) {
	return () => {
		let { path, query } = handle.props;
		return (
			<div
				mix={css({
					padding: "32px 20px",
					borderRadius: "14px",
					border: "1px dashed var(--rule)",
					textAlign: "center",
					color: "var(--muted)",
					"& p": { margin: "0 0 8px" },
					"& a": { color: "var(--text)", fontWeight: 600 },
				})}
			>
				<p>No styles match those filters.</p>
				<a href={queryHref(path, query, { q: "", group: null })}>Show all styles</a>
			</div>
		);
	};
}
