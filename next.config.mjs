import bundleAnalyzer from "@next/bundle-analyzer";

const withBundleAnalyzer = bundleAnalyzer({
	enabled: process.env.ANALYZE === "true",
});

export default withBundleAnalyzer({
	reactStrictMode: true,
	experimental: {
		typedRoutes: true,
		ppr: true,
	},
	images: {
		dangerouslyAllowSVG: true,
		contentDispositionType: "attachment",
		contentSecurityPolicy: "default-src 'self'; frame-src 'none'; sandbox;",
	},
	poweredByHeader: false,
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
});
