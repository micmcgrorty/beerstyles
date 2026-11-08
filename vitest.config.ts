import { defineConfig } from "vitest/config";

export default defineConfig({
	test: {
		// app/actions tests still run on `remix test` until the e2e suite replaces them.
		include: ["app/data/**/*.test.ts"],
	},
});
