module.exports = {
  content: ["./src/**/*.{html,js}"],

  theme: {
    extend: {
      colors: {
        text: "#161618",
        primary: "#00CC71",
        secondary: "#1e1b4b",
        background01: "#E5E5E5",
        "rgba-6ab5d2-16": "rgba(255, 255, 255, 0.16)",
      },
      fontFamily: {
        manrope: ["Manrope"],
        ibm: ['"IBM Plex Sans"'],
      },
      spacing: {
        1: "4px",
      },

      textShadow: {
        md: "2px 2px 4px rgba(0, 0, 0, 0.5)",
        lg: "4px 4px 6px rgba(0, 0, 0, 0.75)",
      },
      screens: {
        "3xl": "1700px",
      },
    },
  },
  plugins: [
    require("tailwind-scrollbar")({
      preferredStrategy: "pseudoelements",
      nocompatible: true,
    }),
  ],
};
