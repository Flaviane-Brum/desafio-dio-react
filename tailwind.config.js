/** @type {import('tailwindcss').Config} */

module.exports = {
  content: ['./src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    screens: {
      '2xl': { max: '1535px' },
      // => @media (max-width: 1535px) { ... }

      xl: { max: '1279px' },
      // => @media (max-width: 1279px) { ... }

      lg: { max: '927px' },
      // => @media (max-width: 1023px) { ... }

      md: { max: '600px' },
      // => @media (max-width: 767px) { ... }

      sm: { max: '522px' }
      // => @media (max-width: 639px) { ... }
    },

    extend: {
      fontFamily: {
        sans: 'Fira Sans, sans-serif'
      },
      colors: {
        neutral: {
          100: '#EFEFEF',
          400: '#595959',
          500: '#77808D',
          700: '#505361',
          800: '#323645'
        },

        blue: {
          50: '#eff6ff',
          500: '#3EBFF3',
          600: '#00AAEE',
          700: '#254273',
          800: '#101c4c',
          900: '#050d22'
        },
        pink: {
          400: '#F4BAFF',
          500: '#D987C7'
        }
      }
    }
  },
  plugins: []
}
