module.exports = {
  purge: [],
  theme: {
    extend: {
      fontFamily: {
        body: ['Nunito']
      },
      transformOrigin: {
        "0" : "0%",
      },
      zIndex: {
        "-1": "-1",
      },
      colors: {
        'light-red' : '#bd260f',
        'hover-light-red' : '#a31f0b',
        'light-orange' : '#ed8b02',
        'hover-light-orange' : '#c47302',
        'light-green' : '#048c0d',
        'hover-light-green' : '#036e0a'
      },
    },
  },
  variants: {
    borderColor: ['responsive', 'hover', 'focus', 'focus-within',],
  },
  plugins: [],
}
