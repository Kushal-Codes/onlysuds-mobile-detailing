/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        canvas: '#0B0C0E',
        surface: {
          DEFAULT: '#121418',
          card: '#16191F',
          elevated: '#1C2028',
          border: '#2A303C',
        },
        red: {
          race: '#E50914',
          crimson: '#DC2626',
          electric: '#FF1E27',
          glow: '#EF4444',
          dark: '#991B1B',
          soft: '#3B1214',
        },
        carbon: {
          DEFAULT: '#14161B',
          dark: '#0D0E12',
          light: '#232731',
        },
        text: {
          primary: '#F3F4F6',
          secondary: '#9CA3AF',
          muted: '#6B7280',
          accent: '#FF333D',
        }
      },
      fontFamily: {
        display: ['"Space Grotesk"', '"Bricolage Grotesque"', 'system-ui', 'sans-serif'],
        body: ['"DM Sans"', 'system-ui', 'sans-serif'],
        speed: ['"Space Grotesk"', 'sans-serif'],
      },
      boxShadow: {
        'supercar': '0 0 25px rgba(229, 9, 20, 0.4)',
        'supercar-lg': '0 0 45px rgba(255, 30, 39, 0.35)',
        'carbon-brutal': '4px 4px 0px 0px #E50914',
        'carbon-black': '4px 4px 0px 0px #000000',
        'subtle-glow': '0 0 15px rgba(229, 9, 20, 0.25)',
      },
      animation: {
        'marquee': 'marquee 22s linear infinite',
        'pulse-supercar': 'pulseSupercar 2.5s ease-in-out infinite',
        'rev-engine': 'revEngine 0.6s ease-in-out',
        'spin-slow': 'spin 16s linear infinite',
      },
      keyframes: {
        marquee: {
          '0%': { transform: 'translateX(0%)' },
          '100%': { transform: 'translateX(-50%)' },
        },
        pulseSupercar: {
          '0%, 100%': { opacity: '0.85', filter: 'drop-shadow(0 0 10px rgba(229, 9, 20, 0.5))' },
          '50%': { opacity: '1', filter: 'drop-shadow(0 0 25px rgba(255, 30, 39, 0.8))' },
        },
        revEngine: {
          '0%, 100%': { transform: 'scale(1)' },
          '50%': { transform: 'scale(1.03) translateY(-2px)' },
        }
      }
    },
  },
  plugins: [],
};
