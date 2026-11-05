import type { Handle } from "remix/component";
import { css } from "remix/component";

import { routes } from "../routes.ts";
import { Layout } from "../ui/layout.tsx";
import { lede, pageTitle } from "../ui/theme.ts";

export function NotFoundPage(handle: Handle<{ message?: string }>) {
	return () => (
		<Layout title="Page not found" description="This page doesn't exist.">
			<div
				mix={css({
					display: "grid",
					gap: "14px",
					paddingBlock: "32px",
					"& a": { fontWeight: 700, color: "var(--accent)" },
				})}
			>
				<h1 mix={pageTitle}>Nothing on tap here</h1>
				<p mix={lede}>{handle.props.message ?? "That page doesn't exist."}</p>
				<p>
					<a href={routes.home.href()}>Browse all beer styles</a>
				</p>
			</div>
		</Layout>
	);
}
