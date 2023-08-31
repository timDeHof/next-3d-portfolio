/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      typography: (theme) => {
        return {
          dark: {
            css: {
              color: theme('colors.gray.300'),
              a: {
                color: theme('colors.white'),
                '&:hover': {
                  color: theme('colors.white'),
                },
              },
              h1: {
                color: theme('colors.white'),
              },
              h2: {
                color: theme('colors.white'),
              },
              h3: {
                color: theme('colors.gray.200'),
              },
              h4: {
                color: theme('colors.gray.200'),
              },
              h5: {
                color: theme('colors.gray.200'),
              },
              h6: {
                color: theme('colors.gray.200'),
              },
              strong: {
                color: theme('colors.gray.200'),
              },
              pre: {
                backgroundColor: theme('colors.gray.900'),
              },
              code: {
                color: theme('colors.white'),
              },
              figcaption: {
                color: theme('colors.gray.300'),
              },
              blockquote: {
                color: theme('colors.gray.300'),
              },
            },
          },
        };
      },
      colors: {
        darkTheme: '#050816',
        primary: '#050816',
        secondary: '#aaa6c3',
        tertiary: '#151030',
        lightTheme: '#f3f3f3',
        'black-100': '#100d25',
        'black-200': '#090325',
        'white-100': '#f3f3f3',
      },
      boxShadow: {
        card: '0px 35px 120px -15px #211e35',
      },
      screens: {
        xs: '450px',
      },
      backgroundImage: {
        'hero-pattern': "url('../assets/herobg.png')",
      },
    },
  },
  variants: {
    typography: ['dark'],
  },
  plugins: [],
};
