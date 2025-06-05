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
        // “Brown Medicine”–inspired palette
        primary: {
          light: "#F5F2ED",  // pale beige
          DEFAULT: "#A65E2E", // rich terracotta / brown‐red
          dark: "#6D3F25",   // deep espresso brown
        },
        secondary: {
          light: "#EDE7E2",  // off‐white / light sand
          DEFAULT: "#776A5E", // muted taupe
          dark: "#3D332D",   // charcoal brown
        },
        accent: {
          light: "#D8C7B9",  // cream
          DEFAULT: "#B49274", // camel
          dark: "#8C6F53",   // deep camel
        },
        neutral: {
          white: "#FFFFFF",
          black: "#000000",
          grayLight: "#F9F9F9",
          gray: "#CCCCCC",
          grayDark: "#555555",
        },
      },
      fontFamily: {
        // Choose an elegant, modern sans‐serif (e.g. Inter, Helvetica Neue, etc.)
        sans: ["Inter", "ui‐sans‐serif", "system-ui", "-apple-system", "BlinkMacSystemFont", "Segoe UI", "Roboto", "Helvetica Neue", "Arial", "sans-serif"],
      },
    },
  },
  plugins: [],
};