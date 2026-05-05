/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#f25f56",
        greyColor: "#828282",
        secondery: "#fffaf1",
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
        marcellus: ["Marcellus", "serif"],
      },
    },
    plugins: [],
  },
};
