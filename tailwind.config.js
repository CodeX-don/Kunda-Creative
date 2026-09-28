/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: {
          DEFAULT: '#EBE5D9',
          light: '#F2EFE9',
          dark: '#E0D9C8',
        },
        burgundy: {
          DEFAULT: '#7A3B3B',
          light: '#9A5A5A',
          dark: '#632B2B',
        },
        olive: {
          DEFAULT: '#4A5240',
          light: '#555C4D',
          dark: '#3A4032',
        },
        charcoal: '#2C2C2C',
        black: '#1A1A1A',
        white: '#FFFFFF',
        transparent: 'rgba(235, 229, 217, 0.9)',
        error: '#DC2626',
      },
      fontFamily: {
        serif: ['Playfair Display', 'Garamond', 'Georgia', 'serif'],
        mono: ['Space Mono', 'Courier New', 'Courier', 'monospace'],
        sans: ['-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'Roboto', 'sans-serif'],
      },
      fontSize: {
        'display': ['72px', { lineHeight: '80px', letterSpacing: '-0.02em' }],
        'h1': ['56px', { lineHeight: '64px', letterSpacing: '-0.02em' }],
        'h2': ['40px', { lineHeight: '48px', letterSpacing: '-0.02em' }],
        'h3': ['28px', { lineHeight: '36px', letterSpacing: '-0.02em' }],
        'h4': ['24px', { lineHeight: '32px', letterSpacing: '-0.02em' }],
        'body-lg': ['18px', { lineHeight: '28px' }],
        'body': ['16px', { lineHeight: '26px' }],
        'body-sm': ['14px', { lineHeight: '22px' }],
        'label': ['12px', { lineHeight: '18px', letterSpacing: '0.05em', textTransform: 'uppercase' }],
        'mono': ['14px', { lineHeight: '24px' }],
      },
      spacing: {
        '1': '8px',
        '2': '16px',
        '3': '24px',
        '4': '32px',
        '5': '48px',
        '6': '64px',
        '7': '96px',
        '8': '128px',
        'section-mobile': '48px',
        'section-desktop': '96px',
      },
      maxWidth: {
        'container': '1440px',
        'container-narrow': '800px',
        'container-wide': '1200px',
      },
      screens: {
        'mobile': '320px',
        'tablet': '768px',
        'desktop': '1024px',
        'wide': '1440px',
      },
      boxShadow: {
        'sm': '0 1px 2px rgba(26, 26, 26, 0.05)',
        'md': '0 4px 6px rgba(26, 26, 26, 0.07)',
        'lg': '0 10px 15px rgba(26, 26, 26, 0.1)',
        'paper': '2px 2px 0px rgba(122, 59, 59, 0.2)',
      },

      transitionDuration: {
        'fast': '150ms',
        'base': '300ms',
        'slow': '500ms',
      },
      transitionTimingFunction: {
        'spring': 'cubic-bezier(0.22, 1, 0.36, 1)',
        'ease-in-out': 'cubic-bezier(0.4, 0, 0.2, 1)',
        'ease-out': 'cubic-bezier(0, 0, 0.2, 1)',
        'ease-in': 'cubic-bezier(0.4, 0, 1, 1)',
      },
      backgroundImage: {
        'grain': "url(\"data:image/svg+xml,%3Csvg viewBox='0 0 200 200' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='noiseFilter'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.65' numOctaves='3' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23noiseFilter)'/%3E%3C/svg%3E\")",
      },
    },
  },
  plugins: [],
}