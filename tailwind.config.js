/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        olive: {
          50: '#f2f6f1',
          100: '#e2ece0',
          200: '#c5dac1',
          300: '#9fc099',
          400: '#75a06c',
          500: '#527f49',
          600: '#3c6235',
          700: '#2d4b27',
          800: '#20371c',
          900: '#142412',
        },
        brand: {
          50: '#f0f7f1',
          100: '#def0e1',
          200: '#bee0c3',
          300: '#91ca99',
          400: '#5dac68',
          500: '#388b43',
          600: '#23692d', // Deep rich forest green - AAA contrast
          700: '#1a5323', // Deeper shade for high contrast buttons & emphasis
          800: '#133f1b', // Dark forest green
          900: '#0c2b12', // Very dark forest green
          950: '#06190a', // Ultra dark for headers / footers
        }
      },
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'Inter', 'system-ui', 'sans-serif'],
        display: ['"Outfit"', '"Plus Jakarta Sans"', 'sans-serif'],
      },
      boxShadow: {
        'soft': '0 4px 20px -2px rgba(67, 97, 52, 0.07), 0 2px 6px -1px rgba(0, 0, 0, 0.03)',
        'soft-hover': '0 12px 28px -4px rgba(67, 97, 52, 0.14), 0 4px 10px -2px rgba(0, 0, 0, 0.04)',
        'card': '0 2px 10px rgba(47, 66, 39, 0.05)',
      }
    },
  },
  plugins: [],
}
