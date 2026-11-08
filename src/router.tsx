import { createBrowserRouter } from "react-router";

import { ChartPage } from "./pages/chart-page.tsx";
import { HomePage } from "./pages/home-page.tsx";
import { NotFoundPage } from "./pages/not-found-page.tsx";
import { StylePage, styleLoader } from "./pages/style-page.tsx";
import { paths } from "./paths.ts";
import { Layout, LayoutFallback } from "./ui/layout.tsx";

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
