/** @type {import('tailwindcss').Config} */
export default {
	content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
	mode: 'jit',
	theme: {
		extend: {
			animation: {
				blob: 'blob 20s infinite',
				blob2: 'blob 18s infinite',
				blob3: 'blob 16s infinite',
				blob4: 'blob 24s infinite',
				blob5: 'blob 26s infinite',
			},
			fontFamily: {
				sans: ['Proxima Nova'],
			},
			keyframes: {
				blob: {
					'0%, 100%': {
						transform: 'translate(0, 0) scale(1)',
					},
					'25%': {
						transform: 'translate(20px, -50px) scale(1.1)',
					},
					'50%': {
						transform: 'translate(0, 20px) scale(1)',
					},
					'75%': {
						transform: 'translate(-20px, -15px) scale(0.9)',
					},
				},
			},
		},
	},
	plugins: [],
};
