/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'yellow': '#f4ce14',
      'grey': '#495e57',
      't-white': '#f9ffff',
      'bg-grey': '#edefee',
      'f-grey': '#808080',
      'black' : '#020202'
    },
    screens: {
      'sm': '450px',
      // => @media (min-width: 640px) { ... }

      'md': '940px',
      // => @media (min-width: 768px) { ... }

      'lg': '1190px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      fontFamily: {
        markazi: ['Markazi Text', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
        karla: ['Karla', 'sans-serif']
      },
    },
  },
  plugins: [],
}