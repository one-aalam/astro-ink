const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')

module.exports = {
    mode: 'jit',
    darkMode: 'class',
    purge: ['./public/**/*.html', './src/**/*.{astro,js,ts}'],
    theme: {
        colors: {
            ...colors,
            // Shades-of-X
            primary: colors.purple[700],
            primaryDark: colors.purple[300],
            primarySecondary: colors.purple[800],
            primarySecondaryDark: colors.purple[500],
        },
		fontFamily: {
			sans: ['Fira Code', ...fontFamily.sans],
		},
		extend: {
		}
	},
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ]
};
