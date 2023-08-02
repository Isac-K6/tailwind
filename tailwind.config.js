/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*{html,js}"],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily:{
        inter: ['Inter']
      },
      colors: {
        primary: '#3258a8'
      },
      animation: {
        'spin-slow' : 'spin 3s linear infinite',
        'wiggle-slow': 'wiggle 1s ease-in-out infinite'
      },
      keyframes: {
        wiggle: {
          '0%, 100%': { transform: 'rotate(-3deg)' },
          '50%': { transform: 'rotate(3deg)' }
        }
      }
    },
  },
  plugins: [],
}
