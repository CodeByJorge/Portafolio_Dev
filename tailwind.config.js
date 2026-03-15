/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,ts}'],
  theme: {
    extend: {
      colors: {
        background: 'var(--background-color)',
        surface: 'var(--surface-color)',
        text: 'var(--text-color)',
        muted: 'var(--muted-text-color)',
        primary: 'var(--primary-color)',
        secondary: 'var(--secondary-color)',
      },
      fontFamily: {
        sans: 'var(--font-family)',
      },
      keyframes: {
        'menu-down': {
          '0%': { opacity: '0', transform: 'translateY(-0.5rem)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'menu-down': 'menu-down 0.18s ease-out',
      },
    },
  },
  plugins: [],
};
