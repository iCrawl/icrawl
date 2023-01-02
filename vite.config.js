import { sveltekit } from "@sveltejs/kit/vite";
import Unocss from "unocss/vite";

/** @type {import('vite').UserConfig} */
const config = {
	plugins: [Unocss(), sveltekit()],
	test: {
		include: ["src/**/*.{test,spec}.{js,ts}"],
	},
};

export default config;
