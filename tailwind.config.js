/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: "#050C15",
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
        heading: ['Montserrat', 'sans-serif'],
        accent: ['Satisfy', 'cursive'],
        tagline: ['Overstreet', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

