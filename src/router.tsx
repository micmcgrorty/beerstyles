import { createBrowserRouter } from "react-router";

import { ChartPage } from "./pages/chart-page.tsx";
import { HomePage } from "./pages/home-page.tsx";
import { NotFoundPage } from "./pages/not-found-page.tsx";
import { StylePage } from "./pages/style-page.tsx";
import { paths } from "./paths.ts";
import { Layout } from "./ui/layout.tsx";

export const router = createBrowserRouter([
	{
		Component: Layout,
		children: [
			{ path: paths.home, Component: HomePage },
			{ path: paths.colour, element: <ChartPage kind="srm" /> },
			{ path: paths.bitterness, element: <ChartPage kind="ibu" /> },
			{ path: "/styles/:slug", Component: StylePage },
			{ path: "*", Component: NotFoundPage },
		],
	},
]);
