/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        merriweather: ["Merriweather", "serif"],
        roboto: ["Roboto", "sans - serif"],
        montserrat: ["Montserrat", "sans-serif"],
      },
      backgroundImage:{
        'desktop-image': " url('/src/assets/background-image.jpg')"
      },
    },
  },
  plugins: [],
};

