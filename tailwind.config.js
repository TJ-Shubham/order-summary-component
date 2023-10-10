/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./dist/*"],
  theme: {
    extend: {
      fontFamily:{
        display:["Red Hat Display", "sans-serif"],
      },
      backgroundImage: {
        'pattern': "url('/images/pattern-background-desktop.svg')",
        'mobile-pattern':'url(./images/pattern-background-mobile.svg)'
      },
      colors: {
        'custom-color': 'hsl(225, 100%, 98%)',
        'heading-color': 'hsl(223, 47%, 23%)',
        'info-color':'hsl(224, 23%, 55%)',
        'button-color':'hsl(245, 75%, 52%)'
      },
      boxShadow: {
        'custom': '0 13px 17px 0px hsl(225, 100%, 94%)',
        'btn-custom': '0px 15px 19px 0px hsl(225, 100%, 94%)'
      },
      borderRadius: {
        'custom': '22px 22px 0 0',
      }
    },
  },
  plugins: [],
}

