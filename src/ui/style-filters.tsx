import { useId } from "react";
import { Form, Link } from "react-router";

import { GROUPS, SORTS, groupLabel, queryHref, type StyleQuery } from "../data/styles.ts";
import styles from "./style-filters.module.css";
import theme from "./theme.module.css";

export interface StyleFiltersProps {
	/** Page the form submits to and the chips link to. */
	path: string;
	query: StyleQuery;
	count: number;
	total: number;
}

/** Search, sort and group chips. All state lives in the URL query string. */
export function StyleFilters({ path, query, count, total }: StyleFiltersProps) {
	let filtered = Boolean(query.q || query.group);
	let searchId = useId();
	let sortId = useId();

	return (
		<div className={styles.wrapper}>
			{/*
			 * A GET form: submitting navigates to `path?q=…&sort=…`, like a plain HTML form.
			 * The key remounts the uncontrolled inputs when the URL changes (back, clear filters).
			 */}
			<Form
				key={`${query.q}|${query.sort}|${query.group}`}
				method="get"
				action={path}
				role="search"
				className={styles.form}
			>
				<label htmlFor={searchId} className={theme.srOnly}>
					Search styles
				</label>
				<input
					id={searchId}
					type="search"
					name="q"
					defaultValue={query.q}
					placeholder="Search, e.g. stout, Kölsch, 21A"
					autoComplete="off"
				/>
				<span className={styles.sort}>
					<label htmlFor={sortId}>Sort</label>
					<select id={sortId} name="sort" defaultValue={query.sort}>
						{SORTS.map((sort) => (
							<option key={sort.id} value={sort.id}>
								{sort.label}
							</option>
						))}
					</select>
				</span>
				{query.group ? <input type="hidden" name="group" value={query.group} /> : null}
				<button type="submit">Apply</button>
			</Form>

			<nav aria-label="Filter by type">
				<ul className={styles.chips}>
					<li>
						<Link
							to={queryHref(path, query, { group: null })}
							className={styles.chip}
							aria-current={query.group === null ? "true" : undefined}
						>
							All
						</Link>
					</li>
					{GROUPS.map((group) => (
						<li key={group.id}>
							<Link
								to={queryHref(path, query, { group: group.id })}
								className={styles.chip}
								aria-current={query.group === group.id ? "true" : undefined}
							>
								{group.label}
							</Link>
						</li>
					))}
				</ul>
			</nav>

			<p className={styles.summary} aria-live="polite">
				{filtered ? `Showing ${count} of ${total} styles` : `${total} styles`}
				{query.group ? ` in ${groupLabel(query.group)}` : ""}
				{query.q ? ` matching “${query.q}”` : ""}
				{filtered ? (
					<Link to={queryHref(path, query, { q: "", group: null })}>Clear filters</Link>
				) : null}
			</p>
		</div>
	);
}

export function EmptyResults({ path, query }: { path: string; query: StyleQuery }) {
	return (
		<div className={styles.empty}>
			<p>No styles match those filters.</p>
			<Link to={queryHref(path, query, { q: "", group: null })}>Show all styles</Link>
		</div>
	);
}
