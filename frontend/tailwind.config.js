/** @type {import('tailwindcss').Config} */
module.exports = {
  purge: [],
  darkMode: false, // or 'media' or 'class'
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",  // Next.js App Router
    "./pages/**/*.{js,ts,jsx,tsx}", // Next.js Pages Router
    "./components/**/*.{js,ts,jsx,tsx}", // Components
  ],
  theme: {
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
