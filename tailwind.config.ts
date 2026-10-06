import type { Config } from 'tailwindcss';

/**
 * Brand palette — GNK Marketing logo: white letterforms + a lime slash (#D8F938) on near-black (#040404).
 *
 * `violet` and `cyan` (legacy utility classes across older pages) are remapped onto the lime scale
 * so every hard-coded accent resolves on-brand.
 */
const lime = {
  50: '#fbffe8',
  100: '#f5ffc7',
  200: '#ecff95',
  300: '#e2fd5f',
  400: '#d8f938',
  500: '#bde01a',
  600: '#94b30f',
  700: '#6f8711',
  800: '#586b14',
  900: '#4a5a16',
  950: '#273306',
};

const config: Config = {
  darkMode: 'class',
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './lib/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      colors: {
        lime,
        violet: lime,
        cyan: lime,
        ink: { DEFAULT: '#040404', 900: '#0a0a0a', 800: '#111111', 700: '#1a1a1a' },
        gnk: {
          bg: 'hsl(var(--gnk-bg) / <alpha-value>)',
          'bg-elevated': 'hsl(var(--gnk-bg-elevated) / <alpha-value>)',
          fg: 'hsl(var(--gnk-fg) / <alpha-value>)',
          muted: 'hsl(var(--gnk-muted) / <alpha-value>)',
          border: 'hsl(var(--gnk-border) / <alpha-value>)',
          card: 'hsl(var(--gnk-card) / <alpha-value>)',
          accent: 'hsl(var(--gnk-accent) / <alpha-value>)',
          'accent-2': 'hsl(var(--gnk-accent-2) / <alpha-value>)',
          'accent-3': 'hsl(var(--gnk-accent-3) / <alpha-value>)',
          'accent-fg': 'hsl(var(--gnk-accent-fg) / <alpha-value>)',
          ring: 'hsl(var(--gnk-ring) / <alpha-value>)',
          glow: 'hsl(var(--gnk-glow) / <alpha-value>)',
        },
      },
      fontFamily: {
        sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
        display: ['var(--font-sora)', 'var(--font-inter)', 'system-ui', 'sans-serif'],
        mono: ['var(--font-mono)', 'ui-monospace', 'SFMono-Regular', 'monospace'],
      },
      fontSize: {
        'display-xl': ['clamp(2.75rem, 6.2vw, 5.25rem)', { lineHeight: '1.02', letterSpacing: '-0.045em' }],
        'display-lg': ['clamp(2.25rem, 4.4vw, 3.75rem)', { lineHeight: '1.05', letterSpacing: '-0.04em' }],
        'display-md': ['clamp(1.875rem, 3.2vw, 2.75rem)', { lineHeight: '1.1', letterSpacing: '-0.035em' }],
      },
      borderRadius: {
        '2xl': '1rem',
        '3xl': '1.5rem',
        '4xl': '2rem',
      },
      boxShadow: {
        glow: 'var(--gnk-shadow-glow)',
        'glow-lg': 'var(--gnk-shadow-glow-lg)',
        card: 'var(--gnk-shadow-card)',
        'inner-glow': 'var(--gnk-inner-glow)',
      },
      backgroundImage: {
        'brand-gradient': 'linear-gradient(100deg, #d8f938 0%, #e9ff7d 100%)',
        'hero-mesh':
          'radial-gradient(ellipse 100% 80% at 50% -30%, hsl(var(--gnk-accent) / 0.18), transparent 55%), radial-gradient(ellipse 70% 50% at 100% 0%, hsl(var(--gnk-accent-2) / 0.10), transparent 45%)',
        'card-shine': 'linear-gradient(135deg, rgb(255 255 255 / 0.05) 0%, transparent 45%, transparent 100%)',
      },
      animation: {
        'fade-up': 'fadeUp 0.7s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'fade-in': 'fadeIn 0.5s ease-out forwards',
        marquee: 'marquee 38s linear infinite',
        'slash-in': 'slashIn 0.9s cubic-bezier(0.22, 1, 0.36, 1) both',
        'spin-slow': 'spin 24s linear infinite',
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
        slashIn: {
          from: { transform: 'translate3d(-40%, 40%, 0) skewX(-12deg)', opacity: '0' },
          to: { transform: 'none', opacity: '1' },
        },
        marquee: {
          from: { transform: 'translate3d(0,0,0)' },
          to: { transform: 'translate3d(-50%,0,0)' },
        },
      },
      transitionTimingFunction: {
        'out-expo': 'cubic-bezier(0.22, 1, 0.36, 1)',
      },
    },
  },
  plugins: [],
};
export default config;
