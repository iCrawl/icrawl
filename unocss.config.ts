import { defineConfig, presetIcons, presetUno } from "unocss";

export default defineConfig({
	presets: [presetUno({ dark: "class" }), presetIcons()],
	safelist: ["h-screen"],
});
