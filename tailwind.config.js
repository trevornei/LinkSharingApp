/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    screens: {
      tablet: '960px', 
      desktop: '1248',  
    },
    colors: {
      purple: '#633cff',
      purpleH: '#beadff', 
      lightPurple: '#efebff',
      darkGrey: '#333333', 
      grey: '#737373',
      borders: '#d9d9d9',
      lightGrey: '#fafafa',
      white: '#ffffff',
      red: '#ff3939', 
    },
    extend: {
      
    },
  },
  plugins: [],
}

