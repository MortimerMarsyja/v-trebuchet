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
        'l-blue': '#efedff',
        'm-blue': '#2bc4fa',
        'blue': '#8e8cff',
        'yellow': '#FDCA40',
        'orange': '#F79824',
        'pink': '#f79768',
        'darker': '#2b2b2b',
        'dark': '#31393C',
        'm-dark': '#303030',
        'l-dark': '#5a6163',
        'light': '#f5f5f5',
        'm-light': '#e5e5e5',
      },
    }
  }
}

