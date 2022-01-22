import { defineConfig } from 'vite-plugin-windicss';
import defaultConfig from 'windicss/defaultConfig';

export default defineConfig({
	theme: {
		extend: {
			fontFamily: {
				sans: ['Inter', ...defaultConfig.theme.fontFamily.sans],
			},
			animation: { blink: 'blink 1s linear infinite' },
			keyframes: { blink: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '0' } } },
		},
	},
});
