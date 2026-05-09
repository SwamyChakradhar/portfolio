/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#f0f4ff',
          100: '#e6edff',
          200: '#c7d9ff',
          300: '#a8c5ff',
          400: '#7fa3ff',
          500: '#5680ff',
          600: '#3d5adb',
          700: '#2e43a8',
          800: '#1f2d75',
          900: '#0f1842',
        },
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
