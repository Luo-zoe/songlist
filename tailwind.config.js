module.exports = {
  content: ['./pages/**/*.{js,jsx,ts,tsx}', './components/**/*.{js,jsx,ts,tsx}'],
  important: true,
  theme: {
    extend: {
      zIndex: {
        max: '1000000000',
      },
      colors: {
        primary: '#b69067',
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
  plugins: [],
  corePlugins: {
    preflight: false,
  },
};