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
        fluid: "repeat(auto-fit,minmax(350px,1fr))",
        "fluid-2": "repeat(auto-fit, minmax(250px, 1fr))",
        "fluid-3": "repeat(auto-fit, 320px)",
      },
      height: {
        xmd: "180px",
        xxl: "250px",
        xs: "300px",
        sm: "400px",
        lg: "850px",
      },
      width: { sm: "300px" },
      minHeight: {
        250: "150px",
        xs: "350px",
      },
      maxWidth: {
        xxs: "250px",
        sm: "350px",
      },
      maxHeight: {
        xxs: "175px",
        lg: "420px",
      },
    },
  },
  plugins: [],
};
