/** @type {import('tailwindcss').Config} */
export default {
  darkMode: 'selector',
  content: ['./src/**/*.tsx'],
  theme: {
    extend: {
      gridTemplateColumns: {
        auth: 'minmax(24rem, 26rem) 1fr',
      },

      backgroundColor: {
        auth: '#12100F',
      },
    },
  },
  plugins: [],
}
