import { defineConfig, presetTypography, presetUno } from "unocss";

export default defineConfig({
	content: {
		filesystem: ["src/**/*.tsx"],
	},
	theme: {
		fontFamily: {
			sans: "var(--font-inter)",
			mono: "var(--font-mono)",
		},
	},
	presets: [presetUno({ dark: "class" }), presetTypography()],
});
