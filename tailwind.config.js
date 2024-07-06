/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      
      colors:{
        'chose':{
          10:'#2AD87F',
          20:'#1E242B',
          50: '#B7BBBE',
          60: '#D9DBDD'
        }
      },
      margin: {
        '22': '530px'
      },
    },
  },
  plugins: [],
}

