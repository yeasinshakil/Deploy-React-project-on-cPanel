/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#2f1c6a',
      'purple': '#673de6',
      'midnight': '#121063',
      'metal': '#565584',
      'tahiti': '#3ab7bf',
      'silver': '#727586',
      'bubble-gum': '#ff77e9',
      'primary-dark': '#5025d1',
      'violet': '#2e1065',
      'blue': '#1d4ed8',
      'white': '#fff',
      'green': 'rgb(0, 182, 122)',
      'lightGray': '#f4f5fa',
      'gray': '#e7e8f8',
    },
    
    extend: {},
  },
  plugins: [],
}

