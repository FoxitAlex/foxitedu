module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        orange: {
          light: '#ffa400',
          dark: '#ff6f00',
          base: '#FF6F00', //#f68b1f
          card: '#FFE7CF',
          cardLight: '#f4f4f4',
          foxit: '#f68b1f',
        },
        blue: {
          discord: '#5865F2',
          background: '#D4EDF2',
          title: '#243463',
          card: '#7C9498'
        },
        welcome: {
          base: '#FFE7CF'
        },
        purple: {
          base: '#EDEDFF'
        }
      },
      height: {
      },
      fontFamily: {
        'open-sans': ['Open Sans', 'Arial', 'sans-serif']
      },
      spacing: {
        '18': '4.5rem',
        '50': '12.5rem',
        '70': '17.5rem',
        '108': '30rem',
        '120': '33rem',
        '128':'34rem',
        '132': '36rem',
        '560px': '35rem',
        '1040px': '65rem',
        '1440px': '90rem'
      },
      backgroundImage: theme => ({
        'welcome-pattern': "url('./img/welcome-bg.png')",
        'footer': "url('./img/footer.png')",
       }),
       backgroundSize: {
        'auto': 'auto',
        'cover': 'cover',
        'contain': 'contain',
        '50%': '50%',
        '60%': '60%',
        '16': '4rem',
      },
      backgroundPosition: {
        'right-4': 'right 1.5rem center',
        'right-2': 'right 1rem center',
      },
      fill: theme => ({
        'red': theme('colors.red.500'),
        'green': theme('colors.green.500'),
        'blue': theme('colors.blue.500'),
        'black': theme('colors.black')
      })
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
