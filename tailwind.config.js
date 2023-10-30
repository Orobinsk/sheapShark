/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
      'primary': '#e70012',
      'secondary': '#ac000c',
      'primary-text': '#4f4f4f',
      'secondary-text': '#959595',
      'white': '#fff',
    },
      animation: {
        spring: 'spring .4s ease-in',
      },
      keyframes: {
        spring: {
          '0%': { transform: 'scaleX(1) scaleY(1)'},
          '60%':{transform: 'scaleX(1.15) scaleY(1.15)'},
          '85%':{transform: 'scaleX(1.04) scaleY(1.04)'},
          '100%': { transform: 'scaleX(1.1) scaleY(1.1)' }
        }
      }
    },
  },
  plugins: [],
}

