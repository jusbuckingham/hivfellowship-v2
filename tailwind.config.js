// tailwind.config.js
/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: "#C82333", // deep red
          light: "#E04858",   // hover
          dark: "#A01F29"     // active
        },
        secondary: {
          DEFAULT: "#333333", // main text
          light: "#4A4A4A",
          dark: "#1A1A1A"
        },
        accent: {
          DEFAULT: "#FFD100", // gold
          light: "#FFE040",
          dark: "#CCAA00"
        },
        neutral: {
          background: "#F2F2F2", // page bg
          white: "#FFFFFF",
          black: "#000000"
        }
      },
      fontFamily: {
        // Choose an elegant, modern sans‐serif (e.g. Inter, Helvetica Neue, etc.)
        sans: ["Inter", "ui‐sans‐serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};