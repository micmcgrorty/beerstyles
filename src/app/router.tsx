import { createBrowserRouter } from "react-router";

import { ChartPage } from "../charts/chart-page.tsx";
import { HomePage } from "../browse/home-page.tsx";
import { NotFoundPage } from "./not-found-page.tsx";
import { StylePage, styleLoader } from "../style-guide/style-page.tsx";
import { paths } from "./paths.ts";
import { Layout, LayoutFallback } from "./layout.tsx";

export const router = createBrowserRouter([
	{
		Component: Layout,
		HydrateFallback: LayoutFallback,
		children: [
			{ path: paths.home, Component: HomePage },
			{ path: paths.colour, element: <ChartPage kind="srm" /> },
			{ path: paths.bitterness, element: <ChartPage kind="ibu" /> },
			{ path: "/styles/:slug", loader: styleLoader, Component: StylePage },
			{ path: "*", Component: NotFoundPage },
		],
	},
]);
