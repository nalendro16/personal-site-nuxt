/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,vue,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#1DCD9F',
        secondary: '#169976',
        accent: '#222222',
        info: '#3ABFF8',
        success: '#36D399',
        warning: '#FBBD23',
        error: '#ff1919',
      },
    },
  },
  plugins: [],
}
