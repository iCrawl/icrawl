import react from "@vitejs/plugin-react";
import { defineConfig } from "vitest/config";

export default defineConfig({
	plugins: [react()],
	test: {
		exclude: ["**/node_modules", "**/dist", ".idea", ".git", ".cache"],
		include: ["__tests__/**/*.{test,spec}.{js,mjs,cjs,ts,mts,cts,jsx,tsx}"],
		environment: "happy-dom",
		passWithNoTests: true,
		coverage: {
			enabled: true,
			reporter: ["text", "lcov", "cobertura"],
			provider: "v8",
			include: ["src"],
		},
	},
});
