const { colors } = require('tailwindcss/colors')
const { backgroundColor } = require('tailwindcss/defaultTheme')
const { fontFamily } = require('tailwindcss/defaultTheme')

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: ['class'],
  content: [
    './app/**/*.{js,ts,jsx,tsx}',
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    container: {
      center: true,
      padding: '1.5rem',
      screens: {
        '2xl': '1360px',
      },
    },
    extend: {
      // fontFamily: {
      //   sans: ['var(--font-poppins)', ...fontFamily.sans],
      // },
      colors: {
        ...colors,
        'light-blue': '#eeeeff',
        'dark-blue': '#4066ff',
        'light-gray': 'rgb(140 139 139)',
      },
      backgroundColor: {
        ...backgroundColor,
      "primary-black":"#131110",
      }
    },
  },
  plugins: [],
}
