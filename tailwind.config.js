/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'sage': 'rgb(144, 175, 142)',
        'beige': 'rgb(244, 233, 206)'
      },
    },
  },
  plugins: [],
}