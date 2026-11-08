import { createBrowserRouter, type RouteObject } from "react-router";

import { HomePage } from "../browse/home-page.tsx";
import { ChartPage } from "../charts/chart-page.tsx";
import { ComparePage, compareLoader } from "../compare/compare-page.tsx";
import { StylePage, styleLoader } from "../style-guide/style-page.tsx";
import { Layout, LayoutFallback } from "./layout.tsx";
import { NotFoundPage } from "./not-found-page.tsx";
import { ROUTE_IDS, route, type RouteId } from "./routes.ts";

/** What renders at each route in the route table. */
function page(id: RouteId): Omit<RouteObject, "path" | "index" | "children"> {
	switch (id) {
		case "home":
			return { Component: HomePage };
		case "style":
			return { loader: styleLoader, Component: StylePage };
		case "compare":
			return { loader: compareLoader, Component: ComparePage };
		default:
			return { element: <ChartPage kind={id} /> };
	}
}

export const router = createBrowserRouter([
	{
		Component: Layout,
		HydrateFallback: LayoutFallback,
		children: [
			...ROUTE_IDS.map((id) => ({ path: route(id).path, ...page(id) })),
			{ path: "*", Component: NotFoundPage },
		],
	},
]);
