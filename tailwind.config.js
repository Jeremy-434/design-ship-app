/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: [
    './public/index.html',
    './public/plantillasweb/plantillas.html',
    './public/login/login.html',
    './public/forms-LogIn-Register.js',
    './public/shoppingCart/shoppingCart.html',
    './public/plantillasweb/card-1.html',
    './public/plantillasweb/card-2.html',
    './public/plantillasweb/card-3.html',
    './public/plantillasweb/card-4.html',
    './public/plantillasweb/card-5.html',
    './public/plantillasweb/card-6.html',
    './public/plantillasweb/plugin-1.html',
    './public/plantillasweb/plugin-2.html',
    './public/plantillasweb/plugin-3.html',
    './public/plantillasweb/plugin-4.html',
    './public/plantillasweb/plugin-5.html',
    './public/plantillasweb/plugin-6.html',
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
