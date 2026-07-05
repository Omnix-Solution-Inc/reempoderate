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
        bloom: {
          DEFAULT: '#E8A5C7',   /* pastel pink — from logo, softened */
          light: '#F5D0E0',     /* very soft pink — like petals */
          deep: '#D17BA8',      /* medium pink for contrast */
          pale: '#FDF2F8',      /* barely-there pink */
        },
        rose: {
          DEFAULT: '#E899C4',   /* warm pink accent */
          light: '#F2BCD8',     /* soft rose */
        },
        gold: {
          DEFAULT: '#F5E6A8',   /* buttery soft gold from logo */
          light: '#FAF0C8',     /* pale gold */
          deep: '#E8D57A',      /* deeper gold for text */
        },
        mint: {
          DEFAULT: '#C5E8D0',   /* fresh soft mint for contrast */
          light: '#E0F2E9',     /* barely-there mint */
        },
        ink: {
          DEFAULT: '#5D4E5C',   /* warm mauve-brown for text — softer than slate */
          light: '#8B7B89',     /* lighter mauve for secondary text */
          dark: '#3D3340',      /* deep mauve for headings */
        },
        cream: {
          DEFAULT: '#FEFAFC',   /* almost white with hint of pink */
          light: '#FFFEFF',     /* pure white-ish */
          dark: '#F8F0F5',      /* soft pink-cream */
        },
        /* Aliases so existing components work without changes */
        shamrock: {
          DEFAULT: '#5D4E5C',
          light: '#8B7B89',
          dark: '#3D3340',
        },
        terracotta: {
          DEFAULT: '#E8A5C7',
          light: '#F5D0E0',
          dark: '#D17BA8',
        },
        'light-bg': '#FEFAFC',
      },
      fontFamily: {
        playfair: ['Playfair Display', 'serif'],
        arimo: ['Arimo', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
