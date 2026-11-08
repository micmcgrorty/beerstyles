import react from "@vitejs/plugin-react";
import { defineConfig } from "vite-plus";

import { netlifyRedirects } from "./src/app/redirects.ts";

export default defineConfig({
	plugins: [
		react(),
		{
			// Writes dist/_redirects, so Netlify returns 404 for URLs that aren't pages.
			name: "netlify-redirects",
			apply: "build",
			generateBundle() {
				this.emitFile({ type: "asset", fileName: "_redirects", source: netlifyRedirects() });
			},
		},
	],
	preview: {
		port: 4173,
		strictPort: true,
	},
	test: {
		include: ["src/**/*.test.ts"],
	},
	fmt: {
		useTabs: true,
		printWidth: 100,
		ignorePatterns: ["package-lock.json", "dist/**"],
	},
	lint: {
		plugins: ["typescript", "unicorn", "oxc", "import", "react", "jsx-a11y", "vitest"],
		categories: {
			correctness: "error",
			suspicious: "warn",
		},
		rules: {
			"react/react-in-jsx-scope": "off",
			// Flags the colour swatch's role="img", which has no tag equivalent.
			"jsx-a11y/prefer-tag-over-role": "off",
			"import/no-unassigned-import": ["warn", { allow: ["**/*.css"] }],
		},
		env: {
			browser: true,
			builtin: true,
		},
		ignorePatterns: ["dist/**"],
		options: {
			typeAware: true,
			typeCheck: true,
		},
	},
});
