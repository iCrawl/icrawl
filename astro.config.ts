import { fileURLToPath, URL } from "node:url";
import image from "@astrojs/image";
import prefetch from "@astrojs/prefetch";
import react from "@astrojs/react";
import { defineConfig } from "astro/config";
import compress from "astro-compress";
import critters from "astro-critters";
import Unocss from "unocss/astro";

export default defineConfig({
	integrations: [
		react(),
		image({
			serviceEntryPoint: "@astrojs/image/sharp",
		}),
		prefetch({
			throttle: 3,
		}),
		Unocss(),
		critters(),
		compress(),
	],
	site: "https://crawl.gg",
});
