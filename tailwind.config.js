/** @type {import('tailwindcss').Config} */module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./public/index.html",
  ],
  theme: {
    extend: {
      textAlign: {
        justify: 'justify',
      },
      textJustify: {
        interWord: 'inter-word',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      addUtilities({
        '.text-justify': {
          'text-align': 'justify',
          'hyphens': 'auto',
        },
      }, ['responsive', 'hover']);
    },
    function ({ addUtilities }) {
      addUtilities({
        '.text-justify-inter-word': {
          'text-align': 'justify',
          'text-justify': 'inter-word',
        },
      }, ['responsive', 'hover']);
    },
  ],
  darkMode: 'class',
};
