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
        'h-sm': { raw: '(max-height: 640px)' }, // Target height <= 640px
        'h-md': { raw: '(max-height: 800px)' }, // Target height <= 800px
        'h-lg': { raw: '(min-height: 801px)' }, // Target height > 800px
      },
    },
  },
  plugins: [],
}