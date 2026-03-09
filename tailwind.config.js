/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors:{
        darkBlue:'#0a0d36',
        blueBlack:'#09143c',
        yellowPrimary:'#B6CC00',
        lightBlue:'#685F95',
        facebookblue:'#3b5998',
        telegramblue:'#0088cc',
        linkedinblue:'#0a66c2',
        twitterblue:'#1da1f2'
      },
      backgroundImage: {
        'gradient-radial': './assets/Logo.png',
      },
    },
  },
  plugins: [],
}

