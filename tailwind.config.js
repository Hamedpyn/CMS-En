/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'
  ],
  theme: {
    extend: {},
    screens: {
      "xl": { "max": "1280px" },
      "lg": { "max": "992px" },
      "md": { "max": "768px" },
      "sm": { "max": "576px" },
    }
  },
  plugins: [require('flowbite/plugin')],
}