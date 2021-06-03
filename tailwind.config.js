module.exports = {
  mode: 'jit',
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        ...require('tailwindcss/colors'),
        background: 'rgba(174,236,239,0.6)',
        primary: '#3066BE',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
