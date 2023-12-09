/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      animation: {
        'spin-slow': 'spin 50s linear infinite',
      },
      colors: {
        react: {
          200: 'hsl(185, 91%, 59%)',
          300: 'hsl(185, 84%, 25%)',
          300: 'hsl(185, 84%, 25%)',
          500: 'hsl(195, 82%, 43%)',
          600: 'hsl(204, 86%, 53%)',
          700: 'hsl(204, 96%, 27%)',
          800: 'hsl(205, 100%, 13%)',
          900: 'hsl(220, 14%, 16%)',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
