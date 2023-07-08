/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.{js,jsx,ts,tsx}',

  ],
  theme: {
    extend: {
      colors: { blender: '#1e1e1e', blendl: "#2f2f2f", blendll: "#515151", blendlll: "#9e9e9e" },
    },
  },
  plugins: [],
}

