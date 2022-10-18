/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './public/index.html',
    './public/login/login.html',
    './public/plantillasweb/plantillas.html',
    './public/register/register.html',
    './public/shoppingCart/shoppingCart.html',
    './public/dashBoard/dashBoard.html',
    './public/dashBoard/dashborad-admin.html'
  ],
  theme: {
    fontFamily: {
      'fredoka' : ['Fredoka', 'sans-serif']
    },
    extend: {
      colors: {
        'ship-purple-1': '#270C54',
        'ship-purple-2': '#501465',
        'ship-purple-footer-1': '#231630',
        'ship-purple-footer-2': '#431283',
      },
    },
  },
  plugins: [],
}
