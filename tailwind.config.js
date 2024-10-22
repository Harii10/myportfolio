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
          60: '#D9DBDD',
          70 : '#555558'
        }
      },
      margin: {
        '22': '530px'
      },
      width:{
        '81': '900px'
      }
    },
  },
  plugins: [],
}

