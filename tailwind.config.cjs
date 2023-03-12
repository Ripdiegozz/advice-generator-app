/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'lato': ["Lato, sans-serif"],
        'serif': ["Figtree, sans-serif"]
      },
    },
  },
  plugins: [],
}
