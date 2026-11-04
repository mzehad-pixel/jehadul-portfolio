/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#070707",
        surface: "#0e0e0e",
        "surface-card": "#131313",
        "surface-hover": "#1a1a1a",
        border: "#202020",
        "border-subtle": "rgba(255, 255, 255, 0.08)",
        "border-glow": "rgba(255, 255, 255, 0.18)",
        muted: "#888888",
        subtext: "#b0b0b0",
        accent: "#10b981", // glowing available green
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
        display: ['Plus Jakarta Sans', 'Inter', 'sans-serif'],
        serif: ['"Playfair Display"', 'Georgia', 'serif'],
      },
      backgroundImage: {
        'radial-glow': 'radial-gradient(circle at 50% 0%, rgba(120, 119, 198, 0.12) 0%, rgba(0, 0, 0, 0) 70%)',
        'card-gradient': 'linear-gradient(180deg, rgba(255, 255, 255, 0.03) 0%, rgba(255, 255, 255, 0.005) 100%)',
      },
      animation: {
        'pulse-subtle': 'pulse 3s cubic-bezier(0.4, 0, 0.6, 1) infinite',
        marquee: 'marquee 80s linear infinite',
      },
      keyframes: {
        marquee: {
          from: { transform: 'translateX(0)' },
          to: { transform: 'translateX(-50%)' },
        },
      }
    },
  },
  plugins: [],
}
