/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        ivory: '#FFFDF8',
        cream: '#FAF4EA',
        'lavender-mist': '#E9DDF5',
        'lavender-soft': '#C8A2C8',
        'lavender-deep': '#8E6FAE',
        burgundy: '#800020',
        wine: '#5A0F1B',
        'rose-wine': '#9B2D42',
        champagne: '#D8B56D',
        beige: '#EFE2D0',
        charcoal: '#24201E',
        muted: '#7A6A63',
        'soft-border': '#E9DED2',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        cormorant: ['"Cormorant Garamond"', 'serif'],
        lora: ['Lora', 'serif'],
        inter: ['Inter', 'sans-serif'],
        script: ['"Great Vibes"', 'cursive'],
        allura: ['Allura', 'cursive'],
      },
      boxShadow: {
        luxury: '0 20px 60px -15px rgba(90, 15, 27, 0.35)',
        frame: '0 12px 40px -10px rgba(36, 32, 30, 0.35)',
        soft: '0 8px 30px -12px rgba(142, 111, 174, 0.4)',
      },
      keyframes: {
        stackFloat3D: {
          '0%, 100%': { transform: 'translateY(0) rotateX(0deg) rotateY(0deg)' },
          '50%': { transform: 'translateY(-14px) rotateX(2deg) rotateY(-2deg)' },
        },
        petalFloat: {
          '0%': { transform: 'translateY(-10%) translateX(0) rotate(0deg)', opacity: '0' },
          '10%': { opacity: '0.9' },
          '90%': { opacity: '0.7' },
          '100%': { transform: 'translateY(110vh) translateX(40px) rotate(360deg)', opacity: '0' },
        },
        cloudMove: {
          '0%': { transform: 'translateX(-3%)' },
          '50%': { transform: 'translateX(3%)' },
          '100%': { transform: 'translateX(-3%)' },
        },
        softLightPulse: {
          '0%, 100%': { opacity: '0.45', transform: 'scale(1)' },
          '50%': { opacity: '0.85', transform: 'scale(1.06)' },
        },
        frameHoverLift: {
          '0%': { transform: 'translateY(0)' },
          '100%': { transform: 'translateY(-8px)' },
        },
        fadeUp: {
          '0%': { transform: 'translateY(24px)', opacity: '0' },
          '100%': { transform: 'translateY(0)', opacity: '1' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
      },
      animation: {
        stackFloat3D: 'stackFloat3D 8s ease-in-out infinite',
        petalFloat: 'petalFloat linear infinite',
        cloudMove: 'cloudMove 18s ease-in-out infinite',
        softLightPulse: 'softLightPulse 6s ease-in-out infinite',
        fadeUp: 'fadeUp 1s ease forwards',
        shimmer: 'shimmer 6s linear infinite',
      },
    },
  },
  plugins: [],
}
