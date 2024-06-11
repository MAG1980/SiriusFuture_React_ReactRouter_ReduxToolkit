/** @type {import('tailwindcss').Config} */

const defaultTheme = require('tailwindcss/defaultTheme')
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "primary-color": "var(--primary-color)",
        "primary-additional-color": "var(--primary-additional-color)",
        "primary-accent-color": "var(--primary-accent-color)",
        "secondary-color": "var(--secondary-color)",
        "secondary-accent-color": "var(--secondary-accent-color)",
        "third-color": "var(--third-color)",
        "fourth-color": "var(--fourth-color)",
        "fifth-color": "var(--fifth-color)",
        "sixth-color": "var(--sixth-color)",
      },
      fontFamily:{
        //Шрифт по-умолчанию
        'sans': ['"Circe Rounded"',  ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

