/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        sans: ['"Plus Jakarta Sans"', 'ui-sans-serif', 'system-ui', 'sans-serif'],
      },
      colors: {
        primary: {
          light: '#334e8c',
          DEFAULT: '#1e3a5f',
          dark: '#152a45',
        },
        secondary: {
          light: '#22d3ee',
          DEFAULT: '#06b6d4',
          dark: '#0891b2',
        },
        accent: {
          DEFAULT: '#8b5cf6',
          muted: '#a78bfa',
        },
        background: {
          light: '#f4f7fb',
          dark: '#070b14',
        },
        surface: {
          light: '#ffffff',
          dark: '#0f1629',
        },
        text: {
          primary: '#0f172a',
          secondary: '#475569',
          light: '#f1f5f9',
        },
        card: {
          light: '#ffffff',
          dark: '#121a2e',
        },
        border: {
          light: '#e2e8f0',
          dark: '#2a3548',
        },
      },
      backgroundImage: {
        'mesh-light': 'radial-gradient(at 40% 20%, rgba(6, 182, 212, 0.12) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.1) 0px, transparent 50%), radial-gradient(at 0% 50%, rgba(30, 58, 95, 0.08) 0px, transparent 50%), linear-gradient(180deg, #f4f7fb 0%, #eef2f7 100%)',
        'mesh-dark': 'radial-gradient(at 40% 20%, rgba(6, 182, 212, 0.15) 0px, transparent 50%), radial-gradient(at 80% 0%, rgba(139, 92, 246, 0.12) 0px, transparent 50%), radial-gradient(at 0% 80%, rgba(30, 58, 95, 0.25) 0px, transparent 55%), linear-gradient(180deg, #070b14 0%, #0a1020 100%)',
        'hero-shine': 'linear-gradient(105deg, transparent 40%, rgba(255,255,255,0.08) 50%, transparent 60%)',
        'gradient-brand': 'linear-gradient(135deg, #06b6d4 0%, #8b5cf6 50%, #3b82f6 100%)',
      },
      boxShadow: {
        'glow-sm': '0 0 20px -5px rgba(6, 182, 212, 0.35)',
        'glow-md': '0 0 40px -10px rgba(139, 92, 246, 0.4)',
        'glass': '0 8px 32px rgba(15, 23, 42, 0.08)',
        'glass-dark': '0 8px 32px rgba(0, 0, 0, 0.35)',
      },
      animation: {
        'fade-in': 'fadeIn 0.6s ease-out forwards',
        'fade-up': 'fadeUp 0.7s ease-out forwards',
        'float': 'float 6s ease-in-out infinite',
        'shimmer': 'shimmer 8s linear infinite',
        'pulse-soft': 'pulseSoft 4s ease-in-out infinite',
      },
      keyframes: {
        fadeIn: {
          '0%': { opacity: '0' },
          '100%': { opacity: '1' },
        },
        fadeUp: {
          '0%': { opacity: '0', transform: 'translateY(16px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
        float: {
          '0%, 100%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-8px)' },
        },
        shimmer: {
          '0%': { backgroundPosition: '200% 0' },
          '100%': { backgroundPosition: '-200% 0' },
        },
        pulseSoft: {
          '0%, 100%': { opacity: '0.5' },
          '50%': { opacity: '0.85' },
        },
      },
    },
  },
  plugins: [],
}
