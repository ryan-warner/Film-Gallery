/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primaryColor: "#F6F6F4",
        secondaryColor: "#000000",
        primaryAccent: "#828CF7",
        secondaryAccent: "#D9B4FE"
      }
    },
  },
  plugins: [],
}
