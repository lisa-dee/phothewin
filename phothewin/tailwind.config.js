/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ["./dist/**/*.{html,css ,js}"],
  theme: {
    extend: {},
  },
  plugins: [],
}

