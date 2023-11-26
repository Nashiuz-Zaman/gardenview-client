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
        sectionGapLg: "11rem",
        sectionGapMd: "9rem",
        sectionGapSm: "5rem",
        elementGapSm: "1.4rem",
        elementGapMd: "3rem",
      },
      colors: {
        primary: "#00A3B4",
        primaryLight: "#33b5c3",
        primaryLightest: "#b3e3e9",
        textPrimary: "#1C1B1B",
        textMediumLight: "#1c1b1bcc",
        textLight: "#1c1b1b99",
        lightGray: "#f5f5f5",
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
