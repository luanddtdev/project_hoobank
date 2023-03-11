/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        'primary': '#00040F',
        'dimWhite': 'rgba(255, 255, 255, 0.7)'
      }
    },
  },
  plugins: [],
}
