import type { Config } from 'tailwindcss';

const config: Config = {
	content: [
		'./src/pages/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/components/**/*.{js,ts,jsx,tsx,mdx}',
		'./src/app/**/*.{js,ts,jsx,tsx,mdx}',
	],
	theme: {
		extend: {
			colors: {
				primary: {
					DEFAULT: '#30df7e',
					50: '#f0fdf4',
					100: '#b3ffcd',
					200: '#87f7b2',
					300: '#5ceb97',
					400: '#30df7e',
					500: '#20b670',
					600: '#188b61',
					700: '#115f45',
					800: '#0b3d34',
				},
				secondary: 'rgb(16 29 35)',
			},
		},
	},
	plugins: [],
};
export default config;
