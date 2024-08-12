/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        'merriweather': ["Merriweather", "serif"],
        "roboto": ["Roboto", 'sans - serif' ],
        "montserrat": ["Montserrat", "sans-serif"]
      },
    },
  },
  plugins: [],
};

