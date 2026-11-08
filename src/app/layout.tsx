import type { ReactNode } from "react";
import { Link, NavLink, Outlet, ScrollRestoration } from "react-router";

import { paths } from "./paths.ts";
import styles from "./layout.module.css";
import theme from "../ui/theme.module.css";

export const SITE_NAME = "BJCP Beer Styles";

const NAV = [
	{ label: "Styles", to: paths.home },
	{ label: "Colour", to: paths.colour },
	{ label: "Bitterness", to: paths.bitterness },
];

/** The root route: every page renders inside the shell. */
export function Layout() {
	return (
		<>
			<AppShell>
				<Outlet />
			</AppShell>
			<ScrollRestoration />
		</>
	);
}

/** Shown on a first visit while a route's loader runs: the shell with an empty page. */
export function LayoutFallback() {
	return (
		<AppShell>
			<title>{SITE_NAME}</title>
		</AppShell>
	);
}

/** The header, main nav and footer around every page. */
function AppShell({ children }: { children?: ReactNode }) {
	return (
		<>
			<header className={styles.header}>
				<div className={`${theme.container} ${styles.headerInner}`}>
					<Link to={paths.home} className={styles.brand} aria-label={`${SITE_NAME} home`}>
						<GlassIcon />
						<span className={styles.brandFull}>{SITE_NAME}</span>
						<span className={styles.brandShort}>Beer Styles</span>
					</Link>
					<nav aria-label="Main">
						<ul className={styles.navList}>
							{NAV.map((item) => (
								<li key={item.to}>
									{/* NavLink sets aria-current="page" on the active link. */}
									<NavLink to={item.to} end className={styles.navLink}>
										{item.label}
									</NavLink>
								</li>
							))}
						</ul>
					</nav>
				</div>
			</header>

			<main className={`${theme.container} ${styles.main}`}>{children}</main>

			<footer className={styles.footer}>
				<div className={theme.container}>
					<p>
						Style descriptions and vital statistics are from the{" "}
						<a href="https://www.bjcp.org/beer-styles/">BJCP 2015 Beer Style Guidelines</a>, © Beer
						Judge Certification Program. Colours are approximate.
					</p>
					<p>
						Built by <a href="https://www.micmcgrorty.dev/">Michael McGrorty</a>.
					</p>
				</div>
			</footer>
		</>
	);
}

/** Sets the document title and description. React hoists these into <head>. */
export function PageMeta({ title, description }: { title: string; description: string }) {
	let fullTitle = title === SITE_NAME ? title : `${title} – ${SITE_NAME}`;
	return (
		<>
			<title>{fullTitle}</title>
			<meta name="description" content={description} />
			<meta property="og:title" content={fullTitle} />
			<meta property="og:description" content={description} />
			<meta property="og:type" content="website" />
		</>
	);
}

function GlassIcon() {
	return (
		<svg width="22" height="26" viewBox="0 0 22 26" aria-hidden="true">
			<path d="M3 4h16l-2 19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L3 4Z" fill="#F39C00" />
			<path d="M3 4h16l-.4 4H3.4L3 4Z" fill="#FFF4DA" />
			<path
				d="M3 4h16l-2 19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L3 4Z"
				fill="none"
				stroke="currentColor"
				strokeWidth="1.5"
				strokeLinejoin="round"
			/>
		</svg>
	);
}
