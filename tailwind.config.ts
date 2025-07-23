import type { Config } from 'tailwindcss';

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'nextwave-orange': '#F9A826',
        'nextwave-light-orange': 'hsl(var(--nextwave-light-orange))',
        'nextwave-dark': 'hsl(var(--nextwave-dark))',
        'nextwave-gray': 'hsl(var(--nextwave-gray))',
        'nextwave-light-gray': 'hsl(var(--nextwave-light-gray))',
        'nextwave-bg': 'hsl(var(--nextwave-bg))',
        'nextwave-border': 'hsl(var(--nextwave-border))',
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
    },
  },
  plugins: [],
};
export default config;