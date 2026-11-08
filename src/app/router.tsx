import { createBrowserRouter, type RouteObject } from "react-router";

import { HomePage } from "../browse/home-page.tsx";
import { Layout, LayoutError, LayoutFallback } from "./layout.tsx";
import { NotFoundPage } from "./not-found-page.tsx";
import { ROUTE_IDS, route, type RouteId } from "./routes.ts";

/**
 * What renders at each route in the route table. The home page is in the main bundle;
 * every other page is its own chunk, loaded when it's first visited.
 */
function page(id: RouteId): Omit<RouteObject, "path" | "index" | "children"> {
	switch (id) {
		case "home":
			return { Component: HomePage };
		case "style":
			return {
				lazy: async () => {
					let { StylePage, styleLoader } = await import("../style-guide/style-page.tsx");
					return { loader: styleLoader, Component: StylePage };
				},
			};
		case "compare":
			return {
				lazy: async () => {
					let { ComparePage, compareLoader } = await import("../compare/compare-page.tsx");
					return { loader: compareLoader, Component: ComparePage };
				},
			};
		default:
			return {
				lazy: async () => {
					let { ChartPage } = await import("../charts/chart-page.tsx");
					return { element: <ChartPage kind={id} /> };
				},
			};
	}
}

export const router = createBrowserRouter([
	{
		Component: Layout,
		HydrateFallback: LayoutFallback,
		ErrorBoundary: LayoutError,
		children: [
			...ROUTE_IDS.map((id) => ({ path: route(id).path, ...page(id) })),
			{ path: "*", Component: NotFoundPage },
		],
	},
]);
