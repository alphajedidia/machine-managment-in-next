import type { Config } from "tailwindcss";
/** @type {import('tailwindcss').Config} */



const config: Config = {
  darkMode: 'selector',
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/react-tailwindcss-datepicker/dist/index.esm.js",
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
        error: {
          100: "#fadad8",
          200: "#f5b5b1",
          300: "#f1918a",
          400: "#ec6c63",
          500: "#e7473c",
          600: "#b93930",
          700: "#8b2b24",
          800: "#5c1c18",
          900: "#2e0e0c",
        },
        success: {
          100: "#cceed4",
          200: "#99dea9",
          300: "#66cd7e",
          400: "#33bd53",
          500: "#00ac28",
          600: "#008a20",
          700: "#006718",
          800: "#004510",
          900: "#002208",
        },
        warning: {
          100: "#fff8cc",
          200: "#fff299",
          300: "#ffeb66",
          400: "#ffe533",
          500: "#ffde00",
          600: "#ccb200",
          700: "#998500",
          800: "#665900",
          900: "#332c00",
        },
        info: {
          100: "#d9f0fa",
          200: "#b3e1f5",
          300: "#8ed2f0",
          400: "#68c3eb",
          500: "#42b4e6",
          600: "#3590b8",
          700: "#286c8a",
          800: "#1a485c",
          900: "#0d242e",
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
  plugins: [
  ],
};
export default config;
