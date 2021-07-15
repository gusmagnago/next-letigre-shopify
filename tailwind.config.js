module.exports = {
  purge: ["./pages/**/*.{js,ts,jsx,tsx}", "./components/**/*.{js,ts,jsx,tsx}"],
  darkMode: false,
  theme: {
    extend: {
      height: (theme) => ({
        112: "28rem",
        120: "30rem",
      }),
      minHeight: (theme) => ({
        80: "20rem",
      }),
      colors: {
        palette: {
          lighter: "#FFFFFF",
          light: "#E7E7E7",
          primary: "#111827",
          dark: "#EF0909",
          black: "#000000",
        },
      },
      screens: {
        sm: "640px",
      },
      letterSpacing: {
        tightest: "-.075em",
        tighter: "-.05em",
        tight: "-.025em",
        normal: "0",
        wide: ".025em",
        wider: ".05em",
        widest: ".25em",
        widest: ".30em",
      },
      fontFamily: {
        primary: ['"Fira Sans Condensed", "sans-serif"'],
      },
      backgroundImage: (theme) => ({
        "hero-pattern": "url('/heroimg.jpg')",
      }),
      borderColor: (theme) => ({
        primary: "#111827",
        danger: "#000000",
      }),
    },
  },
  variants: {
    extend: { width: ["responsive", "hover"] },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};
