/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
  './public/index.html', 
  './public/plantillasweb/plantillas.html'
],
  theme: {
    extend: {
      fontFamily: {
        'Fredoka':['Fredoka','medium','sans-serif'],
        'Fredoka2':['Fredoka','bold','sans-serif'],
        'Fredoka3':['Fredoka','light','sans-serif'],
        'Fredoka4':['Fredoka','regular','sans-serif'],
        'Fredoka5':['Fredoka','semi-bold','sans-serif'],
        },
    },
  },
  plugins: [],
}
