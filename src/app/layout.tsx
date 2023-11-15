import type { Metadata, Viewport } from "next";
import type { PropsWithChildren } from "react";
import { inter, jetBrainsMono } from "~/util/fonts";
import { Providers } from "./providers";

import "@unocss/reset/tailwind-compat.css";
import "~/styles/global.css";

export const viewport: Viewport = {
	themeColor: [
		{ media: "(prefers-color-scheme: light)", color: "#f5f5f5" },
		{ media: "(prefers-color-scheme: dark)", color: "#171717" },
	],
	colorScheme: "light dark",
};

export const metadata: Metadata = {
	title: {
		default: "crawl.gg",
		template: "%s | crawl.gg",
	},
	icons: {
		other: [
			{
				url: "/favicon-32x32.png",
				sizes: "32x32",
				type: "image/png",
			},
			{
				url: "/favicon-16x16.png",
				sizes: "16x16",
				type: "image/png",
			},
		],
		apple: [
			"/apple-touch-icon.png",
			{
				url: "/safari-pinned-tab.svg",
				rel: "mask-icon",
			},
		],
	},

	manifest: "/site.webmanifest",

	appleWebApp: {
		title: "crawl.gg",
	},

	applicationName: "crawl.gg",

	openGraph: {
		siteName: "crawl.gg",
		type: "website",
		title: "crawl.gg",
	},

	other: {
		"msapplication-TileColor": "#171717",
	},
};

export default async function RootLayout({ children }: PropsWithChildren) {
	return (
		<html className={`${inter.variable} ${jetBrainsMono.variable}`} lang="en" suppressHydrationWarning>
			<body className="bg-neutral-100 antialiased dark:bg-neutral-900 dark:text-neutral-200">
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
