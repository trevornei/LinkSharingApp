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
    boxShadow: {
      sm: '0px 2px 4px rgb(11, 10, 55, 0.15)', 
      lg: '0px 8px 20px rgb(18, 16, 99, 0.06)',
    },
    fontSize: {
      headingM: ['32px', { lineHeight: '48px',}],
      headingS: ['16px', { lineHeight: '24px',}],
      bodyM: ['16px', { lineHeight: '24px',}],
      bodyS: ['12px', { lineHeight: '18px',}],
    }
    extend: {
      
    },
  },
  plugins: [],
}

