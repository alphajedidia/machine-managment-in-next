import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          100: "#fff4cf",
          200: "#ffe89e",
          300: "#fedd6e",
          400: "#fed13d",
          500: "#fec60d",
          600: "#cb9e0a",
          700: "#987708",
          800: "#664f05",
          900: "#332803",
        },
        secondary: {
          100: "#cccccc",
          200: "#999999",
          300: "#666667",
          400: "#333334",
          500: "#000001",
          600: "#000001",
          700: "#000001",
          800: "#000000",
          900: "#000000",
        },
        tertiary: {
          100: "#fefefe",
          200: "#fdfdfd",
          300: "#fcfcfc",
          400: "#fbfbfb",
          500: "#fafafa",
          600: "#c8c8c8",
          700: "#969696",
          800: "#646464",
          900: "#323232",
        },
      },
      fontFamily: {
        sans: ["Roboto", "Helvetica", "Arial", "sans-serif"],
        serif: ["Merriweather", "Georgia", "serif"],
        mono: ["Roboto Mono", "Menlo", "monospace"],
      },
      fontSize: {
        xs: ".75rem", // Extra Small
        sm: ".875rem", // Small
        base: "1rem", // Base
        lg: "1.125rem", // Large
        xl: "1.25rem", // Extra Large
        "2xl": "1.5rem", // 2 Extra Large
        "3xl": "1.875rem", // 3 Extra Large
        "4xl": "2.25rem", // 4 Extra Large
        "5xl": "3rem", // 5 Extra Large
        "6xl": "4rem", // 6 Extra Large
      },
      fontWeight: {
        thin: "100",
        light: "300",
        normal: "400",
        medium: "500",
        semibold: "600",
        bold: "700",
        extrabold: "800",
        black: "900",
      },
      lineHeight: {
        none: "1",
        tight: "1.25",
        snug: "1.375",
        normal: "1.5",
        relaxed: "1.625",
        loose: "2",
      },
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
    },
  },
  plugins: [],
};
export default config;
