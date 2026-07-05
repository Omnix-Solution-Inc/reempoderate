/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        shamrock: {
          DEFAULT: '#2E4D3E',
          light: '#3D664F',
          dark: '#1F3829',
        },
        terracotta: {
          DEFAULT: '#E28743',
          light: '#ED9D5C',
          dark: '#C77233',
        },
        cream: {
          DEFAULT: '#F4F1EA',
          light: '#F9F7F2',
          dark: '#E8E3D8',
        },
        dark: '#333333',
        'light-bg': '#F4F1EA',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        arimo: ['Arimo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
