/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: { sans: ["Inter", "sans-serif"] },
      colors: {
        primary: {
          50: "#eff6ff",
          100: "#dbeafe",
          200: "#bfdbfe",
          300: "#93c5fd",
          500: "#3b82f6",
          600: "#1d64d6",
          700: "#1d4ed8",
          900: "#1e3a8a",
        },
        footer: "#0f172a",
      },
    },
  },
  plugins: [],
};