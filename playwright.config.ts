import type { PlaywrightTestConfig } from "@playwright/test";

const config: PlaywrightTestConfig = {
	webServer: {
		command: "yarn build && yarn preview",
		port: 4_173,
	},
	testDir: "__tests__",
};

export default config;
