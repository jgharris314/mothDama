/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}",],
  theme: {
    extend: {
      colors: {
        mothPurple: {
          0: '#7338ab'
        },
        mothGreen: {
          0: '#2cfc04'
        },
        mothGrey: {
          0: '#dddae0'
        },
        mothOrange: {
          0: '#f2a508'
        },
        mothBlack: {
          0: '#13051f'
        }
      }
    },
  },
  plugins: [],
}
