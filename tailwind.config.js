/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      screens: {
        "2xsm": "360px",
        xsm: "480px",
        "2md": "850px",
        "3xl": "1700px",
      },
      spacing: {
        sectionGapXl: "14rem",
        sectionGapLg: "11rem",
        sectionGapMd: "7.5rem",
        sectionGapSm: "4rem",
        elementGapSm: "1.4rem",
        elementGapMd: "3rem",
      },
      boxShadow: {
        large: "0 10px 60px -5px rgba(0,0,0,0.3)",
      },
      colors: {
        primary: "#228B22",
        primaryLight: "#389738",
        primaryLightest: "#7ab97a",
        textPrimary: "#1C1B1B",
        textMediumLight: "#1c1b1bcc",
        textLight: "#1c1b1b99",
        lightGray: "#f5f5f5",
        lightBorder: "#ddd",
      },
      fontFamily: {
        default: "'Open Sans', sans-serif;",
      },
      borderRadius: {
        default: "5px",
        defaultLg: "10px",
      },
    },
  },
  plugins: [],
};
