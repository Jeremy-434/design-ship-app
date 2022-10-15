/** @type {import('tailwindcss').Config} */
module.exports = {

  darkMode: 'class',
  content: [
    './public/index.html',
    './public/plantillasweb/plantillas.html',
    './public/login/login.html',
    './public/plugins/plugins.html',
    './public/web-design/card-1.html',
    './public/web-design/card-2.html'
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

  extend: {
    dropShadow: {
      '3xl': '0 35px 35px rgba(0, 0, 0, 0.25)',
      '4xl': [
          '3xl 35px 35px rgba(0, 0, 0, 0.25)',
          '4xl 45px 65px rgba(0, 0, 0, 0.15)'
      ]
    }
  }
}
