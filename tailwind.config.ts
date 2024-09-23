module.exports = {
  theme: {
    colors: {
      primary: '#0a102f',
      black: 'black',
      white: 'white',
      accent: '#06cfd7',
    },
    animation: {
      'rotation-slow': 'rotation 6s linear infinite',
    },
    keyframes: {
      rotation: {
        '0%': { transform: 'rotate(0deg)' },
        '100%': { transform: 'rotate(360deg)' },
      }
    }
  },
}