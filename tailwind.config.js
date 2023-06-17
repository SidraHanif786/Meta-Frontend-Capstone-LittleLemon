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