// /** @type {import('tailwindcss').Config} */
// export default {
//   darkMode: 'class', // Add this line
//   content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
//   theme: {
//     extend: {},
//   },
//   plugins: [],
// }
/** @type {import('tailwindcss').Config} */
export default {
  // Use 'selector' (modern Tailwind) or 'class' for explicit control
  darkMode: 'selector', 
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      // Ensuring your custom colors are easily accessible
      colors: {
        background: '#020408',
      }
    },
  },
  plugins: [],
}