/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      black: '#000000',
      blue: {
        100: '#3333FF',
        200: '#5454FF',
        300: '#389CFC',
      },
      gray: {
        100: '#F8F9FB',
        200: '#ededf0',
        300: '#888888',
        400: '#717171',
        500: '#666666',
        600: '#515151',
        700: '#49474A',
        800: '#333333',
        900: '#2B292D',
      },
      white: '#ffffff',
    },
    extend: {
      fontFamily: {
        sans: ['var(--font-neue-haas-grotesk)'],
        code: [
          'Menlo',
          'Monaco',
          'Consolas',
          '"Andale Mono"',
          '"Ubuntu Mono"',
          '"Courier New"',
          'monospace',
        ],
      },
      fontSize: {
        xxs: ['.625rem', { lineHeight: '1.6' }],
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        marqueeScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        fadeIn: 'fadeIn 200ms',
      },
    },
  },
  plugins: [],
}
