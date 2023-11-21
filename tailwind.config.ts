import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      boxShadow: {
        custom: '0 42px 76px rgba(0, 0, 0, 0.15)',
        custom2: '0 0px 20px rgba(0, 0, 0, 0.15)',
      },
      fontSize: {
        'custom-size': '14px',
      },
      colors: {
        'custom-green': '#3B755F',
      },
    },
  },
  plugins: [],
};
export default config;
