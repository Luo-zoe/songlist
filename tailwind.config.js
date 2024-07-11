const { nextui } = require("@nextui-org/theme");

module.exports = {
  content: [
    './pages/**/*.{js,jsx,ts,tsx}',
    './components/**/*.{js,jsx,ts,tsx}',
    "./node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}"
  ],
  important: true,
  theme: {
    extend: {
      zIndex: {
        max: '1000000000',
      },
      colors: {
        primary: '#66d9e8',
      },
      keyframes: {
        wiggle: {
          '0%, 100%': {
            transform: 'translateY(-10px)',
          },
          '50%': {
            transform: 'translateY(0)',
          },
        },
      },
    },
  },
  darkMode: "class",
  plugins: [nextui()],
};