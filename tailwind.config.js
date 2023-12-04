/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily:{
        "font-global": "'Roboto', sans-serif",
      },
      fontSize:{
        "tamaño-letra-global":"1rem",
      },
      maxWidth:{
        "maximo-ancho": "1400px",
        "max-ancho-img":"100%",
      },
      height:{
        "mini-icons-height":"3rem",
      }
    },
  },
  plugins: [],
}

