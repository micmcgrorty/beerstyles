import { createController } from "remix/router";

import { allStyles, findStyles, getStyle, parseQuery } from "../data/styles.ts";
import { routes } from "../routes.ts";
import { ChartPage } from "./chart-page.tsx";
import { HomePage } from "./home-page.tsx";
import { NotFoundPage } from "./not-found-page.tsx";
import { StylePage } from "./style-page.tsx";

export default createController(routes, {
	actions: {
		home(context) {
			let query = parseQuery(context.url.searchParams);
			return context.render(
				<HomePage styles={findStyles(query)} total={allStyles.length} query={query} />,
			);
		},

		colour(context) {
			let query = parseQuery(context.url.searchParams);
			return context.render(
				<ChartPage kind="srm" styles={findStyles(query)} total={allStyles.length} query={query} />,
			);
		},

		bitterness(context) {
			let query = parseQuery(context.url.searchParams);
			return context.render(
				<ChartPage kind="ibu" styles={findStyles(query)} total={allStyles.length} query={query} />,
			);
		},

		style(context) {
			let result = getStyle(context.params.slug);
			if (!result) {
				return context.render(
					<NotFoundPage message="We couldn't find that beer style. It may have been renamed." />,
					{ status: 404 },
				);
			}
			return context.render(<StylePage {...result} />);
		},

		notFound(context) {
			return context.render(<NotFoundPage />, { status: 404 });
		},
	},
});
