/* eslint-disable @typescript-eslint/no-var-requires */
const { fontFamily } = require('tailwindcss/defaultTheme');

const withOpacity =
  (variable) =>
  ({ opacityValue }) =>
    opacityValue === undefined
      ? `rgb(var(${variable}))`
      : `rgb(var(${variable}) / ${opacityValue})`;

const getColorShades = (shades, name = 'primary') =>
  shades.reduce(
    (a, v) => ({ ...a, [v]: withOpacity(`--tw-clr-${name}-${v}`) }),
    {}
  );

/** @type {import("@types/tailwindcss/tailwind-config").TailwindConfig } */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: 'class', // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        primary: ['var(--notosans-font)', ...fontFamily.sans],
      },
      colors: {
        primary: {
          ...getColorShades([50, 100, 200, 300, 400, 500, 600, 700]),
        },
        'color-fg': '#58a6ff',
        'text-color-fg': '#c9d1d9',
        'header-bg': '#161b22',
        'header-search-border-clr': '#30363d',
        'header-search-bg-clr': '#0d1117',
        canvas: '#0d1117',
        muted: 'rgba(56,139,253,0.4)',
        'accent-subtle': 'rgba(56,139,253,0.15)',
        'accent-emphasis': '#1f6feb',
        'fg-muted': '#8b949e',
        'border-active': '#f78166',
        'menu-bg-active': '#161b22',
        'canvas-subtle': '#161b22',
        'neutral-emphasis': '#6e7681',
        'neutral-muted': 'rgba(110,118,129,0.4)',
        'fg-disabled': '#484f58',
        dark: '#161b22',
      },
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1012px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
