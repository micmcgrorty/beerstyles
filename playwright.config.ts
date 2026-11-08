import { defineConfig, devices } from "@playwright/test";

const PORT = 4173;

// Set E2E_BASE_URL to run the suite against a deployed site instead of a local server.
const externalBaseURL = process.env.E2E_BASE_URL;

export default defineConfig({
	testDir: "./e2e",
	fullyParallel: true,
	forbidOnly: Boolean(process.env.CI),
	retries: process.env.CI ? 2 : 0,
	reporter: process.env.CI
		? [["github"], ["html", { open: "never" }]]
		: [["list"], ["html", { open: "never" }]],
	use: {
		baseURL: externalBaseURL ?? `http://localhost:${PORT}`,
		trace: "on-first-retry",
	},
	projects: [
		{ name: "desktop", use: { ...devices["Desktop Chrome"] } },
		{ name: "mobile", use: { ...devices["Pixel 7"] } },
	],
	webServer: externalBaseURL
		? undefined
		: {
				command: "npm run start",
				url: `http://localhost:${PORT}`,
				env: { PORT: String(PORT) },
				reuseExistingServer: !process.env.CI,
			},
});
