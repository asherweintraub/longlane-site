module.exports = {
  purge: ['./dist/*.html'],
  content: ['./dist/*.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        'display': ['Fredoka One'],
        'fancy': ['Labrada']
      },
      colors: {
        'dirt': {
          DEFAULT: '#966C4A',
          'dark': '#5A4739'
        },
        'grass': {
          'light': '#5FAD56',
          DEFAULT: '#065f46',
          'dark': '#33602E'
        },
        moss: '#5a8245',
        'pop': '#779CAB'
      },
      spacing: {
        '5/4': '125%',
      },
      maxWidth: {
        '4/5': '80%',
      },
      animation: {
        'spin-slow': 'spin 60s linear infinite',
      }
    },
  },
  variants: {
  extend: {},
  },
  plugins: [],
};
