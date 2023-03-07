/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        coral: {
          50: "#FFC9C9",
          100: "#FEB9B9",
          200: "#FE9B9B",
          300: "#FC7F7F",
          400: "#FA6969",
          500: "#F75656",
          DEFAULT: "#F75656",
          600: "#F14747",
          700: "#E63B3B",
          800: "#CC2F2F",
          900: "#A32222",
        },
        teal: {
          light: "#dcefeb",
          dark: "#166e78",
        },
        critical: {
          500: "#F4D9D7",
          DEFAULT: "#F4D9D7",
        },
      },
    },
  },
  plugins: [],
}

// [
//   {
//     "properties": {
//       "steps": 11,
//       "hue": {
//         "start": 0,
//         "end": 0,
//         "curve": "easeOutQuad"
//       },
//       "saturation": {
//         "start": 0.15,
//         "end": 0.8,
//         "rate": 1,
//         "curve": "easeOutQuad"
//       },
//       "brightness": {
//         "start": 1,
//         "end": 0.5,
//         "curve": "easeInQuart"
//       }
//     },
//     "options": {
//       "minorSteps": [
//         0,
//         1
//       ],
//       "name": "Blue",
//       "lockHex": "",
//       "provideInverted": false,
//       "rotation": "clockwise"
//     }
//   }
// ]