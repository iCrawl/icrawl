/**
 * @type {import('next').NextConfig}
 */
export default {
	reactStrictMode: true,
	poweredByHeader: false,
	images: {
		dangerouslyAllowSVG: true,
		contentDispositionType: "attachment",
		contentSecurityPolicy: "default-src 'self'; frame-src 'none'; sandbox;",
	},
	logging: {
		fetches: {
			fullUrl: true,
		},
	},
	eslint: {
		ignoreDuringBuilds: true,
	},
	typescript: {
		ignoreBuildErrors: true,
	},
	experimental: {
		ppr: true,
		reactCompiler: true,
	},
};
