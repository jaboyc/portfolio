import type { Config } from 'tailwindcss';
import { nextui } from '@nextui-org/react';

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './node_modules/@nextui-org/theme/dist/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['var(--font-outfit)'],
        roboto: ['var(--font-roboto)'],
      },
    },
  },
  darkMode: 'media',
  plugins: [
    nextui({
      themes: {
        light: {
          colors: {
            background: '#ffffff',
            foreground: '#000000',
            content1: {
              DEFAULT: '#dfdfdf',
              foreground: '#000000',
            },
            primary: {
              DEFAULT: '#b18d73',
            },
          },
        },
        dark: {
          colors: {
            background: '#0a0f22',
            foreground: '#ffffff',
            content1: {
              DEFAULT: '#1e2232',
              foreground: '#ffffff',
            },
            primary: {
              DEFAULT: '#b18d73',
            },
          },
        },
      },
    }),
  ],
};
export default config;
