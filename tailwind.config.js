/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./*.html"],
  theme: {
    screens:{
      sm: '480px',
      md: '768px',
      lg: '976px',
      xl: '1440px'
    },
    extend: {
      colors:{
        'tomato': 'hsl(4, 100%, 67%)',
        'darkSlateGrey': 'hsl(234, 29%, 20%)',
        'Charcoal Grey': 'hsl(235, 18%, 26%)',
        'Grey': 'hsl(231, 7%, 60%)',
      },
      fontFamily:{
        sans: ['Roboto', 'sans-serif'],
      }
    },
  },
  plugins: [],
}

