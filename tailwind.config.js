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
        // Logo palette — pink/magenta dominant with gold + hot pink accents
        bloom: {
          DEFAULT: '#E090D0',   // Primary pink (from logo)
          light: '#F0B0E0',     // Light pink
          soft: '#F8E0F0',      // Very soft pink for backgrounds
          deep: '#D060B0',      // Deeper magenta
        },
        rose: {
          DEFAULT: '#F05090',   // Hot pink accent (from logo)
          light: '#F479A8',
          dark: '#D03878',
        },
        gold: {
          DEFAULT: '#F0E060',   // Golden yellow accent (from logo)
          light: '#F8EE99',
          dark: '#D4C248',
        },
        ink: {
          DEFAULT: '#405060',   // Dark slate (from logo)
          light: '#5A6A7A',
          soft: '#7A8A9A',
        },
        cream: {
          DEFAULT: '#FBF5F8',   // Very light pink-cream for page background
          light: '#FDF9FB',
          dark: '#F0E8F0',
        },
        dark: '#405060',
        'light-bg': '#FBF5F8',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        arimo: ['Arimo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
