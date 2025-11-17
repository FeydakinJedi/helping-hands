/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // Components
    "./src/**/*.{js,ts,jsx,tsx}",  // Ensure src/ is included
    "./styles/**/*.css", // Scan your styles
    "./globals.css", // Ensure Tailwind reads it
  ],
  theme: {
    extend: {
      colors: {
        primary: "#fc5f2b",  // Vibrant Orange
        secondary: "#8cc63f", // Green
        background: "#fefadc", // Warm Cream
        highlight: "#d01e32", // Strong Red
        accent: "#f4f300", // Bright Yellow
        text: "#5f463a", // Deep Brown
        muted: "#7b848d", // Cool Gray
        border: "#a6a69a", // Neutral Gray
        shadow: "#b3ae97", // Soft Neutral
        soft: "#efe9dc", // Soft Beige
        contrast: "#d1b699", // Light Neutral
        deep: "#793531", // Dark Brown
        warm: "#7d604c", // Warm Brown
      },
    },
  },
  plugins: [],
}
