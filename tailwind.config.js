  /** @type {import('tailwindcss').Config} */

const { fontFamily} = require ('tailwindcss/defaultTheme')
module.exports = {
  content: [
    "./pages/**/*.{html,js}",
    "./Components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    './public/**/*.html'
    
  ],
  theme: {   
    extend: {
      fontFamily: {
        mont: ['var(--font-mont)', ...fontFamily.sans],
      },
 
      animation: {
        'spin-slow': 'spin 7s linear infinite',
      },
     
    },

  },
  plugins: [],
}




