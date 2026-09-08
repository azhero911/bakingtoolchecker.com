import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/tools/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bakery: {
          bg: '#FAF7F2',        // Warm organic dough/flour canvas
          card: '#FFFFFF',      // Clean white card surfaces
          border: '#E8E2D6',    // Soft warm border line
          input: '#FFFFFF',     // Clean white input field
          accent: '#EA580C',    // Vibrant bakery orange
          accentHover: '#C2410C',
          highlight: '#FFF7ED', // Peach stat pill container
          highlightText: '#9A3412', // Deep burnt orange text
          dark: '#0F172A',      // High contrast heading text
          muted: '#475569',     // Secondary label text
          subtle: '#64748B',    // Muted text
        },
      },
    },
  },
  plugins: [],
};

export default config;
