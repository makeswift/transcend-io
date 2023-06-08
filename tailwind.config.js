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
        accordionSlideDown: {
          from: { height: 0 },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        accordionSlideUp: {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: 0 },
        },
        fadeIn: {
          '0%': { opacity: 0 },
          '100%': { opacity: 1 },
        },
        fadeOut: {
          '0%': { opacity: 1 },
          '100%': { opacity: 0 },
        },
        marqueeScroll: {
          '0%': { transform: 'translateX(0)' },
          '100%': { transform: 'translateX(-100%)' },
        },
      },
      animation: {
        accordionSlideDown: 'accordionSlideDown 400ms cubic-bezier(1, 0, 0.25, 1)',
        accordionSlideUp: 'accordionSlideUp 400ms cubic-bezier(1, 0, 0.25, 1)',
        fadeIn: 'fadeIn 200ms',
        fadeOut: 'fadeOut 200ms',
        marqueeScroll: 'marqueeScroll var(--marquee-duration) linear infinite',
      },
    },
  },
  plugins: [],
}
