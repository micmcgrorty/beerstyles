import { createBrowserRouter, type RouteObject } from "react-router";

import { HomePage } from "../browse/home-page.tsx";
import { ChartPage } from "../charts/chart-page.tsx";
import { StylePage, styleLoader } from "../style-guide/style-page.tsx";
import { Layout, LayoutFallback } from "./layout.tsx";
import { NotFoundPage } from "./not-found-page.tsx";
import { ROUTES, ROUTE_IDS, type RouteId } from "./routes.ts";

/** What renders at each route in the route table. Every route must have one. */
const PAGES: Record<RouteId, Omit<RouteObject, "path" | "index" | "children">> = {
	home: { Component: HomePage },
	colour: { element: <ChartPage kind="srm" /> },
	bitterness: { element: <ChartPage kind="ibu" /> },
	style: { loader: styleLoader, Component: StylePage },
};

export const router = createBrowserRouter([
	{
		Component: Layout,
		HydrateFallback: LayoutFallback,
		children: [
			...ROUTE_IDS.map((id) => ({ path: ROUTES[id].path, ...PAGES[id] })),
			{ path: "*", Component: NotFoundPage },
		],
	},
]);
