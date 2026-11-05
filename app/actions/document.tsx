import type { Handle, RemixNode } from "remix/component";
import { css } from "remix/component";

export interface DocumentProps {
	children?: RemixNode;
	head?: RemixNode;
	title?: string;
}

const FONT_STACK =
	"'Bricolage Grotesque', ui-sans-serif, system-ui, -apple-system, 'Segoe UI', sans-serif";

// Design tokens live on <body> so every page and component shares them.
const bodyStyles = css({
	"--bg": "#faf6ef",
	"--surface": "#ffffff",
	"--text": "#1f1a14",
	"--muted": "#6b5f50",
	"--accent": "#a35a00",
	"--accent-soft": "#f6e7cf",
	"--rule": "#e7dfd2",
	"--track": "#efe8dc",
	"--grid": "rgba(31, 26, 20, 0.09)",
	"--shadow": "0 1px 2px rgba(31, 26, 20, 0.06), 0 4px 16px rgba(31, 26, 20, 0.06)",
	"@media (prefers-color-scheme: dark)": {
		"--bg": "#14110d",
		"--surface": "#1e1a15",
		"--text": "#f2ece3",
		"--muted": "#b5a893",
		"--accent": "#f0a43a",
		"--accent-soft": "#3a2c18",
		"--rule": "#352e25",
		"--track": "#2a241d",
		"--grid": "rgba(242, 236, 227, 0.08)",
		"--shadow": "0 1px 2px rgba(0, 0, 0, 0.4)",
	},
	"& *, & *::before, & *::after": { boxSizing: "border-box" },
	margin: 0,
	minHeight: "100vh",
	background: "var(--bg)",
	color: "var(--text)",
	fontFamily: FONT_STACK,
	fontSize: "16px",
	lineHeight: 1.5,
	WebkitFontSmoothing: "antialiased",
	MozOsxFontSmoothing: "grayscale",
	"& a": { color: "inherit" },
	"& :focus-visible": {
		outline: "2px solid var(--accent)",
		outlineOffset: "2px",
		borderRadius: "4px",
	},
});

export function Document(handle: Handle<DocumentProps>) {
	return () => {
		let { children, head, title } = handle.props;

		return (
			<html lang="en-GB">
				<head>
					<meta charSet="utf-8" />
					<meta name="viewport" content="width=device-width, initial-scale=1" />
					<meta name="color-scheme" content="light dark" />
					<meta name="theme-color" content="#faf6ef" media="(prefers-color-scheme: light)" />
					<meta name="theme-color" content="#14110d" media="(prefers-color-scheme: dark)" />
					<link rel="icon" type="image/svg+xml" href="/favicon.svg" />
					<link rel="preconnect" href="https://fonts.googleapis.com" />
					<link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
					<link
						rel="stylesheet"
						href="https://fonts.googleapis.com/css2?family=Bricolage+Grotesque:opsz,wght@12..96,400..800&display=swap"
					/>
					<title>{title}</title>
					{head}
				</head>
				<body mix={bodyStyles}>{children}</body>
			</html>
		);
	};
}
