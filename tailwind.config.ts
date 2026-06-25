import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './environments/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        // ReEmpoderate brand palette
        primary: {
          DEFAULT: '#D06371',  // Fuzzy Wuzzy — rosa terracota
          light: '#E0A17A',    // Light Terracotta
          dark: '#B84F5E',
        },
        secondary: {
          DEFAULT: '#6CAA80',  // Shiny Shamrock — verde suave
          light: '#8DC49E',
          dark: '#4D8A60',
        },
        accent: {
          DEFAULT: '#EDCA5B',  // Dandelion — amarillo dorado
          blue: '#7AA5AC',     // Pewter Blue
          purple: '#CE84BD',   // Middle Purple
          lavender: '#CCC8F0', // Lavender Blue
        },
        dark: '#1A1A1A',
        'light-bg': '#F9F5F0',
        // Bella Wildflower brand
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

export default config
