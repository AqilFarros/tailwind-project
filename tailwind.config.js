/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/flowbite/**/*.js",
  ],
  theme: {
    extend: {
      textStrokeWidth: {
        '1': '1px',
        '40': '40px'
      },
      textStrokeColor: theme => theme('colors'),
    },
  },
  plugins: [
    require('flowbite/plugin'),
  ],
}

