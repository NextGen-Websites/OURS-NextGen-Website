import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          50:  '#fdf1f8',
          100: '#fce1ef',
          200: '#f8c0df',
          300: '#f192c4',
          400: '#e767a8',
          500: '#d6368f',
          600: '#b8236f',
          700: '#931a58',
          800: '#6e1341',
          900: '#4a0c2b',
        },
        cream: {
          50:  '#fefcf8',
          100: '#faf3e7',
          200: '#f3e6d0',
        },
        ink: {
          400: '#8a7a86',
          500: '#6b5c67',
          700: '#3d2e39',
          900: '#2b1f27',
          950: '#1c1420',
        },
      },
      fontFamily: {
        serif: ['Georgia', 'Cambria', 'Times New Roman', 'serif'],
      },
    },
  },
  plugins: [],
}

export default config
