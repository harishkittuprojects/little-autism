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
          50: '#f6f9f5',
          100: '#ebf2e8',
          200: '#d6e4d0',
          300: '#b5cfa9',
          400: '#8fb67f',
          500: '#6c9c5a',
          600: '#557b42',
          700: '#436134',
          800: '#374e2c',
          900: '#2f4227',
        },
        brand: {
          50: '#f5f9f4',
          100: '#eaf3e8',
          200: '#d4e6d1',
          300: '#afd1ab',
          400: '#83b67e',
          500: '#5e9858',
          600: '#557b42', // Reference UI primary olive-green
          700: '#416333',
          800: '#354f2a',
          900: '#2c4123',
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
