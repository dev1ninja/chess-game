/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,jsx,ts,tsx}",
    "./components/**/*.{js,jsx,ts,tsx}",
    "./layout/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'blue-0': 'rgb(67, 143, 254)',
        'dark-0': 'rgb(38, 37, 34)',
        'dark-1': 'rgb(56, 53, 49)',
        'brown-0': 'rgb(240, 217, 181)',
        'brown-1': 'rgb(181, 136, 99)',
      }
    },
  },
  plugins: [
    require('tailwind-scrollbar')
  ],
  variants: {
    scrollbar: ['rounded']
  }
}
