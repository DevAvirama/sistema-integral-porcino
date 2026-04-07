/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      colors: {
        'sena-green': '#39A900',
        'sena-blue': '#00324D',
        'sena-yellow': '#FFC000',
      }
    },
  },
  plugins: [],
}
