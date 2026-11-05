import type { Handle, RemixNode } from "remix/component";
import { css } from "remix/component";

import { Document } from "../actions/document.tsx";
import { routes } from "../routes.ts";
import { container } from "./theme.ts";

export type NavKey = "styles" | "colour" | "bitterness";

export interface LayoutProps {
	title: string;
	description: string;
	current?: NavKey;
	children?: RemixNode;
}

const SITE_NAME = "BJCP Beer Styles";

const NAV: { key: NavKey; label: string; href: string }[] = [
	{ key: "styles", label: "Styles", href: routes.home.href() },
	{ key: "colour", label: "Colour", href: routes.colour.href() },
	{ key: "bitterness", label: "Bitterness", href: routes.bitterness.href() },
];

const headerStyles = css({
	background: "var(--surface)",
	borderBottom: "1px solid var(--rule)",
});

const headerInner = css({
	display: "flex",
	alignItems: "center",
	justifyContent: "space-between",
	gap: "12px",
	minHeight: "60px",
});

const brandStyles = css({
	display: "inline-flex",
	alignItems: "center",
	gap: "8px",
	minHeight: "44px",
	fontWeight: 800,
	fontSize: "17px",
	letterSpacing: "-0.02em",
	textDecoration: "none",
	whiteSpace: "nowrap",
	"& svg": { flexShrink: 0 },
	"& .full, & .short": { display: "none" },
	"@media (min-width: 400px)": { "& .short": { display: "inline" } },
	"@media (min-width: 560px)": {
		"& .full": { display: "inline" },
		"& .short": { display: "none" },
	},
});

const navList = css({
	listStyle: "none",
	margin: 0,
	padding: 0,
	display: "flex",
	gap: "4px",
});

const navLink = css({
	display: "inline-flex",
	alignItems: "center",
	minHeight: "44px",
	padding: "0 10px",
	borderRadius: "8px",
	fontWeight: 600,
	textDecoration: "none",
	color: "var(--muted)",
	"&:hover": { color: "var(--text)", background: "var(--track)" },
	"&[aria-current='page']": {
		color: "var(--text)",
		boxShadow: "inset 0 -3px 0 var(--accent)",
		borderRadius: "8px 8px 0 0",
	},
});

const mainStyles = css({
	paddingBlock: "28px 56px",
	"@media (min-width: 640px)": { paddingBlock: "40px 72px" },
});

const footerStyles = css({
	borderTop: "1px solid var(--rule)",
	paddingBlock: "24px 32px",
	color: "var(--muted)",
	fontSize: "14px",
	"& p": { margin: "0 0 6px", maxWidth: "70ch" },
	"& a": { color: "var(--text)", textUnderlineOffset: "2px" },
});

function GlassIcon() {
	return () => (
		<svg width="22" height="26" viewBox="0 0 22 26" aria-hidden="true">
			<path d="M3 4h16l-2 19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L3 4Z" fill="#F39C00" />
			<path d="M3 4h16l-.4 4H3.4L3 4Z" fill="#FFF4DA" />
			<path
				d="M3 4h16l-2 19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2L3 4Z"
				fill="none"
				stroke="currentColor"
				stroke-width="1.5"
				stroke-linejoin="round"
			/>
		</svg>
	);
}

export function Layout(handle: Handle<LayoutProps>) {
	return () => {
		let { title, description, current, children } = handle.props;
		let fullTitle = title === SITE_NAME ? title : `${title} – ${SITE_NAME}`;

		return (
			<Document
				title={fullTitle}
				head={
					<>
						<meta name="description" content={description} />
						<meta property="og:title" content={fullTitle} />
						<meta property="og:description" content={description} />
						<meta property="og:type" content="website" />
					</>
				}
			>
				<header mix={headerStyles}>
					<div mix={[container, headerInner]}>
						<a href={routes.home.href()} mix={brandStyles} aria-label={`${SITE_NAME} home`}>
							<GlassIcon />
							<span class="full">{SITE_NAME}</span>
							<span class="short">Beer Styles</span>
						</a>
						<nav aria-label="Main">
							<ul mix={navList}>
								{NAV.map((item) => (
									<li key={item.key}>
										<a
											href={item.href}
											mix={navLink}
											aria-current={item.key === current ? "page" : undefined}
										>
											{item.label}
										</a>
									</li>
								))}
							</ul>
						</nav>
					</div>
				</header>

				<main mix={[container, mainStyles]}>{children}</main>

				<footer mix={footerStyles}>
					<div mix={container}>
						<p>
							Style descriptions and vital statistics are from the{" "}
							<a href="https://www.bjcp.org/beer-styles/">
								BJCP 2015 Beer Style Guidelines
							</a>
							, © Beer Judge Certification Program. Colours are approximate.
						</p>
						<p>
							Built by <a href="https://www.micmcgrorty.dev/">Michael McGrorty</a>.
						</p>
					</div>
				</footer>
			</Document>
		);
	};
}
