import type { Config } from 'tailwindcss';

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/sections/**/*.{js,ts,jsx,tsx,mdx}',
    './src/layouts/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens: {
        sm: '375px',
        md: '768px',
        lg: '1024px',
        xl: '1440px',
        '2xl': '1920px',
      },
      container: {
        center: true,
        screens: {
          sm: '343px',
          md: '688px',
          lg: '988px',
          xl: '1280px',
          '2xl': '1520px',
        },
      },
      colors: {
        white: '#FEFEFE',
        'grey-bg-1': '#F6F6F6',
        'grey-bg-2': '#FBFBFB',
        'grey-stroke': '#D6D6D6',
        'grey-inactive': '#B3B3B3',
        primary: '#FFB52E',
        secondary: '#0058F6',
        tertiary: '#282828',
        quaternary: '#373737',
        danger: '#FF0404',
        success: '#04D800',
      },
      boxShadow: {
        small: '0px 2px 4px 0px #28293D1A',
        large: '0px 8px 16px 0px #60617033',
      },
      variants: {
        fill: ['hover', 'focus'],
      },
    },
  },
  plugins: [],
};
export default config;
