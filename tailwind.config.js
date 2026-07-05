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
        // === LOGO PALETTE ===
        // Pink/Magenta dominant + Gold + Hot Pink accents
        bloom: {
          DEFAULT: '#E090D0',
          light: '#F0B0E0',
          soft: '#F8E0F0',
          deep: '#D060B0',
        },
        rose: {
          DEFAULT: '#F05090',
          light: '#F479A8',
          dark: '#D03878',
        },
        gold: {
          DEFAULT: '#F0E060',
          light: '#F8EE99',
          dark: '#D4C248',
        },
        ink: {
          DEFAULT: '#405060',
          light: '#5A6A7A',
          soft: '#7A8A9A',
        },
        cream: {
          DEFAULT: '#FBF5F8',
          light: '#FDF9FB',
          dark: '#F0E8F0',
        },
        dark: '#405060',
        'light-bg': '#FBF5F8',
        // === LEGACY ALIASES (map old names to new palette) ===
        shamrock: {
          DEFAULT: '#405060',   // → ink (dark slate)
          light: '#5A6A7A',     // → ink-light
          dark: '#2A3A4A',      // → darker ink
        },
        terracotta: {
          DEFAULT: '#E090D0',   // → bloom (pink)
          light: '#F0B0E0',     // → bloom-light
          dark: '#D060B0',      // → bloom-deep
        },
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        arimo: ['Arimo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
