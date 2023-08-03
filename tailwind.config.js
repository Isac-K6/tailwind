/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/index.html"],
  darkMode: 'class',
  theme: {
    container: {
      center: true,
      padding: '16px'
    },
    extend: {
      fontFamily:{
        inter: ['Inter']
      },
      colors: {
        primary: '#14b8a6',
        secondary: '#0f172a',
        tertiary: '#4b5563'
      },
      screens: {
        '2xl': '1320px'
      }
    },
  },
  plugins: [],
}
