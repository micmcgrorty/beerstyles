import { Fragment, type ReactNode } from "react";

import type { BeerStyle, ResultSection } from "../catalogue/catalogue.ts";
import theme from "./theme.module.css";

/**
 * Search results, laid out as searchStyles returned them: one titled section
 * per BJCP category, or a single flat list. Callers only say how to draw a
 * list of styles; this owns the section markup, headings and their ids.
 */
export function ResultSections({
	sections,
	renderList,
	sectionClassName,
	headingClassName,
}: {
	sections: ResultSection[];
	/** Draw one list of styles. `grouped` is false for the single flat list. */
	renderList: (styles: BeerStyle[], grouped: boolean) => ReactNode;
	sectionClassName?: string;
	headingClassName?: string;
}) {
	return sections.map(({ category, styles }) => {
		if (!category) return <Fragment key="all">{renderList(styles, false)}</Fragment>;
		let id = `cat-${category.number}`;
		return (
			<section key={category.number} className={sectionClassName} aria-labelledby={id}>
				<h2 id={id} className={[theme.categoryHeading, headingClassName].filter(Boolean).join(" ")}>
					<span className={theme.categoryNumber}>{category.number}</span>
					{category.name}
				</h2>
				{renderList(styles, true)}
			</section>
		);
	});
}
