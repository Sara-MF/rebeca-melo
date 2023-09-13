/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'grape': '#843876',
        'sand': '#FFE8B2',
        'cotton': '#CAEAE9',
        'stone': '#C9DAE1'
      }
    },
  },
  plugins: [],
}
