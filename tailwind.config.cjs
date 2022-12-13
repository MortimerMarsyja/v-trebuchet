/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  plugins: [],
  theme: {
    extend: {
      colors: {
        'light-blue': '#243c5a',
        'dark-blue': '#2176FF',
        'yellow': '#FDCA40',
        'orange': '#F79824',
        'darker': '#2b2b2b',
        'dark': '#31393C',
        'mid-dark': '#464d50',
        'soft-dark': '#5a6163',
        'light': '#f5f5f5',
        'mid-light': '#e5e5e5',
      },
    }
  }
}
