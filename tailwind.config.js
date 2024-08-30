/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}","index.html","login.html","signup.html","cart.html","shop.html","artists.html","about.html"],
  theme: {
    
    extend: {
      colors:{
        'darkGreen':'#001E09',
        'lightGreen':'#98C9A3',
        'white':'#FFFFFF',
        'menu':'#F6E96B',
        'login':'#A2CA71',
        'black':'#000000',
        'gray':'#bbbbbb'
      },
      screens:{
        'xs':'344px',
        'IphoneSE':'375px'
      }
    },
  },
  plugins: [],
}