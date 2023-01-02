import { defineConfig, presetIcons, presetUno } from "unocss";

export default defineConfig({
	presets: [presetUno({ dark: "class" }), presetIcons()],
	safelist: ["dark:bg-dark-800", "h-screen", "bg-white"],
});
