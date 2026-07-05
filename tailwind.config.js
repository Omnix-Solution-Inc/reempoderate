/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './environments/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#D06371',
          light: '#E0A17A',
          dark: '#B84F5E',
        },
        secondary: {
          DEFAULT: '#6CAA80',
          light: '#8DC49E',
          dark: '#4D8A60',
        },
        accent: {
          DEFAULT: '#EDCA5B',
          blue: '#7AA5AC',
          purple: '#CE84BD',
          lavender: '#CCC8F0',
        },
        dark: '#1A1A1A',
        'light-bg': '#F9F5F0',
        'tbw-green': '#3D4A3E',
        'tbw-rose': '#B88373',
        'tbw-cream': '#F4EFEB',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        inter: ['Inter', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif'],
        cinzel: ['Cinzel', 'serif'],
      },
      borderRadius: {
        xl: '16px',
        '2xl': '24px',
      },
    },
  },
  plugins: [],
}
