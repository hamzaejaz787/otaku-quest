/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans"],
      },
    },
    screens: {
      sm: "450px",
      md: "800px",
    },
  },
  plugins: [],
};
