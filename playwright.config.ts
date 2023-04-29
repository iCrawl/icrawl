import { fileURLToPath } from "node:url";
import type { PlaywrightTestConfig } from "@playwright/test";
import { devices } from "@playwright/test";

const PORT = process.env.PORT ?? 3_000;
const baseURL = `http://localhost:${PORT}`;

export default {
	timeout: 60 * 1_000,
	testDir: fileURLToPath(new URL("e2e", import.meta.url)),
	retries: 2,
	outputDir: "test-results/",

	webServer: {
		command: "yarn dev",
		url: baseURL,
		env: {
			NODE_ENV: "test",
		},
		timeout: 120 * 1_000,
		reuseExistingServer: !process.env.CI,
	},

	use: {
		baseURL,
		trace: "retry-with-trace",
		video: "retry-with-video",
	},

	projects: [
		{
			name: "Desktop Chrome",
			use: {
				...devices["Desktop Chrome"],
			},
		},
		{
			name: "Desktop Firefox",
			use: {
				...devices["Desktop Firefox"],
			},
		},
		{
			name: "Desktop Safari",
			use: {
				...devices["Desktop Safari"],
			},
		},
		{
			name: "Mobile Chrome",
			use: {
				...devices["Pixel 5"],
			},
		},
		{
			name: "Mobile Safari",
			use: devices["iPhone 12"],
		},
	],
} satisfies PlaywrightTestConfig;
