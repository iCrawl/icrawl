import { defineConfig, presetTypography, presetUno } from "unocss";

export default defineConfig({
	theme: {
		fontFamily: {
			sans: "var(--font-inter)",
			mono: "var(--font-mono)",
		},
	},
	presets: [presetUno({ dark: "class" }), presetTypography()],
});
