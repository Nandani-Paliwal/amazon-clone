/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        headerbg: '#131921',
        searchicon: '#cd9042',
        white: 'white',
        button: '#f0c14b',
        subtotal: '#f3f3f3',
        darkgray: '#111',
        paymentH1: 'rgb(234, 237, 237)'
      },
      zIndex: {
        '-1': -1,
        '1': 1,
        '100': 100
      },
      maxHeight: {
        '97': '400px'
      },
      borderColor: {
        'bordercolor': '#a88734 #9c7e31 #846129',
        'subtotalborder': '#dddddd'
      },
      width: {
        '98': '98%'
      }
    },
  },
  plugins: [],
}
