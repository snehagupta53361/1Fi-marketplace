/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        brand: { DEFAULT: "#6E3FF2", dark: "#4B21C4", light: "#8B5CF6" },
        surface: { DEFAULT: "#FFFFFF", muted: "#F5F4FA" },
        ink: { DEFAULT: "#141221", muted: "#6B7280" },
      },
      borderRadius: { xl: "16px", "2xl": "20px" },
      boxShadow: { card: "0 2px 10px rgba(20, 18, 33, 0.06)" },
    },
  },
  plugins: [],
};
