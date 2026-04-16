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
        gnk: {
          bg: 'hsl(var(--gnk-bg) / <alpha-value>)',
          'bg-elevated': 'hsl(var(--gnk-bg-elevated) / <alpha-value>)',
          fg: 'hsl(var(--gnk-fg) / <alpha-value>)',
          muted: 'hsl(var(--gnk-muted) / <alpha-value>)',
          border: 'hsl(var(--gnk-border) / <alpha-value>)',
          card: 'hsl(var(--gnk-card) / <alpha-value>)',
          accent: 'hsl(var(--gnk-accent) / <alpha-value>)',
          'accent-2': 'hsl(var(--gnk-accent-2) / <alpha-value>)',
          'accent-fg': 'hsl(var(--gnk-accent-fg) / <alpha-value>)',
          ring: 'hsl(var(--gnk-ring) / <alpha-value>)',
          glow: 'hsl(var(--gnk-glow) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-lexend)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        glow: '0 0 0 1px hsl(var(--gnk-border)), 0 0 60px -12px hsl(var(--gnk-glow) / 0.45)',
        'glow-lg': '0 0 0 1px hsl(var(--gnk-border)), 0 0 100px -20px hsl(var(--gnk-glow) / 0.5)',
        card: '0 1px 0 hsl(var(--gnk-border)), 0 24px 60px -28px rgb(0 0 0 / 0.55)',
        'inner-glow': 'inset 0 1px 0 0 rgb(255 255 255 / 0.06)',
      },
      backgroundImage: {
        'hero-mesh':
          'radial-gradient(ellipse 100% 80% at 50% -30%, hsl(var(--gnk-accent) / 0.22), transparent 55%), radial-gradient(ellipse 70% 50% at 100% 0%, hsl(var(--gnk-accent-2) / 0.12), transparent 45%), radial-gradient(ellipse 60% 40% at 0% 100%, hsl(var(--gnk-accent) / 0.08), transparent 50%)',
        'card-shine':
          'linear-gradient(135deg, rgb(255 255 255 / 0.05) 0%, transparent 45%, transparent 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.25, 0.4, 0.25, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
      },
      keyframes: {
        fadeUp: {
          from: { opacity: '0', transform: 'translateY(16px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
        fadeIn: {
          from: { opacity: '0' },
          to: { opacity: '1' },
        },
      },
    },
  },
  plugins: [],
};
export default config;
