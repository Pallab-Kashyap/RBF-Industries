/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        'h-sm': { raw: '(max-height: 600px)' }, // Target height <= 600px
        'h-md': { raw: '(max-height: 650px)' }, // Target height <= 650px
        'h-lg': { raw: '(max-height: 700px)' }, // Target height > 700px
        'h-xl': { raw: '(max-height: 750px)' }, // Target height > 750px
        'h-2xl': { raw: '(min-height: 750px)' }, // Target height > 800px
      },
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}