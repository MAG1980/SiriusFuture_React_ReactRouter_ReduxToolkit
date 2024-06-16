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
        "primary": "var(--primary-color)",
        "primary-additional": "var(--primary-additional-color)",
        "primary-accent": "var(--primary-accent-color)",
        "secondary": "var(--secondary-color)",
        "secondary-accent": "var(--secondary-accent-color)",
        "third": "var(--third-color)",
        "fourth": "var(--fourth-color)",
        "fifth": "var(--fifth-color)",
        "sixth": "var(--sixth-color)",
        "seventh": "var(--seventh-color)",
        "eighth": "var(--eighth-color)",
        "ninth": "var(--ninth-color)",
        "tenth": "var(--tenth-color)",
        "eleventh": "var(--eleventh-color)",
        "twelfth": "var(--twelfth-color)",
      },
      fontFamily:{
        //Шрифт по-умолчанию
        'sans': ['"Circe Rounded"',  ...defaultTheme.fontFamily.sans]
      }
    },
  },
  plugins: [],
}

