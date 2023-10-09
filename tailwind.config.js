/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        roboto: ["Roboto", "sans"],
        montserrat: ["Montserrat", "sans"],
      },
      screens: {
        sm: "450px",
        md: "800px",
        lg: "1024px",
        xl: "1280px",
        "2xl": "1536px",
      },
      gridTemplateColumns: {
        fluid: "repeat(auto-fit,minmax(15rem,1fr))",
      },
      minHeight: {
        100: "600px",
      },
    },
  },
  plugins: [],
};
