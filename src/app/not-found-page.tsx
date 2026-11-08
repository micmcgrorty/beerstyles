import { Link } from "react-router";

import { paths } from "./routes.ts";
import { PageMeta } from "./layout.tsx";
import theme from "../ui/theme.module.css";
import styles from "./not-found-page.module.css";

export function NotFoundPage({ message = "That page doesn't exist." }: { message?: string }) {
	return (
		<div className={styles.notFound}>
			<PageMeta title="Page not found" description="This page doesn't exist." />
			{/* Netlify sends a 404 for unknown URLs; this covers crawlers that render the page anyway. */}
			<meta name="robots" content="noindex" />
			<h1 className={theme.pageTitle}>Nothing on tap here</h1>
			<p className={theme.lede}>{message}</p>
			<p>
				<Link to={paths.home}>Browse all beer styles</Link>
			</p>
		</div>
	);
}
