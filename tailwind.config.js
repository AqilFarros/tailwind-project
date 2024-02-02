/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      keyframes: {
        ajubAjub: {
          '30%, 38%': {
            boxShadow: '0 0 20px 5px #4c1d95',
            backgroundColor: 'black'
          },

          '40%, 90%': {
            boxShadow: '0 0 5px 5px #4c1d95',
            backgroundColor: 'black'
          },

          '100%, 0%, 25%': {
            boxShadow: '0 0 0 0',
            backgroundColor: '#3f3f46'
          }
        },
      }
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

