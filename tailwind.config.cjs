const { fontFamily } = require('tailwindcss/defaultTheme')
const colors = require('tailwindcss/colors')
delete colors['lightBlue'] // A bit hackful but fixes - https://github.com/tailwindlabs/tailwindcss/issues/4690
delete colors['warmGray']
delete colors['trueGray']
delete colors['coolGray']
delete colors['blueGray']

module.exports = {
    darkMode: 'class',
    content: [
        './public/**/*.html',
        './src/**/*.{astro,js,ts}'
    ],
    safelist: ['dark'],
    theme: {
        colors: {
            ...colors,
            // Shades-of-X
            // keep one group of colors enabled at a time

            primary: colors.purple[700],
            primaryDark: colors.purple[300],
            primarySecondary: colors.purple[800],
            primarySecondaryDark: colors.purple[500],

            // primary: colors.pink[700],
            // primaryDark: colors.pink[300],
            // primarySecondary: colors.pink[800],
            // primarySecondaryDark: colors.pink[500],

            // primary: colors.orange[700],
            // primaryDark: colors.orange[300],
            // primarySecondary: colors.orange[800],
            // primarySecondaryDark: colors.orange[500],

            // primary: colors.amber[700],
            // primaryDark: colors.amber[300],
            // primarySecondary: colors.amber[800],
            // primarySecondaryDark: colors.amber[500],

            // primary: colors.lime[700],
            // primaryDark: colors.lime[300],
            // primarySecondary: colors.lime[800],
            // primarySecondaryDark: colors.lime[500],

            // primary: colors.indigo[700],
            // primaryDark: colors.indigo[300],
            // primarySecondary: colors.indigo[800],
            // primarySecondaryDark: colors.indigo[500],

            // primary: colors.rose[700],
            // primaryDark: colors.rose[300],
            // primarySecondary: colors.rose[800],
            // primarySecondaryDark: colors.rose[500],
        },
		fontFamily: {
			sans: ['Fira Code', ...fontFamily.sans],
		},
		extend: {
            typography: (theme) => ({
                dark: {
                    css: {
                        color: theme("colors.gray.200"),
                    },
                },
                DEFAULT: {
                    css: {
                        a: {
                            color: theme('colors.primarySecondaryDark'),
                              '&:hover': {
                                color: theme('colors.primary'),
                              },
                        },
                        blockquote: {
                            color: theme('colors.primary'),
                            borderColor: theme('colors.primaryDark')
                        },
                        'blockquote > p::before, p::after': {
                            color: theme('colors.primaryDark'),
                        },
                        h1: {
                            color: theme('colors.primarySecondaryDark'),
                        },
                        h2: {
                            color: theme('colors.primarySecondaryDark'),
                        },
                        h3: {
                            color: theme('colors.primarySecondaryDark'),
                        },
                    }
                },
            }),
		},
	},
    variants: {
        extend: { typography: ["dark"] }
    },
    plugins: [
        require('@tailwindcss/typography'),
        require('@tailwindcss/forms'),
        require('@tailwindcss/line-clamp'),
        require('@tailwindcss/aspect-ratio'),
    ]
};
