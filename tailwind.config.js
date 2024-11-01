/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        regular: ['regular', 'serif'],
        stylish: ['stylish', 'serif'],
        bold: ['bold', 'serif'],
        boldq: ['boldq', 'sans-serif'],
        simple:['simple','sans-serif']
      },
      colors: {
        primaryWhite: '#fffff',      // Custom primary color
        blackBlue: '#1B1C1F',    // Custom secondary color
        accent: '#e2b659',       // Custom accent color
        LightBlackBlue: '#2D2F33',   // Background color
        textPrimary: '#1B1C1F',  // Text primary color
        textSecondary: '#F59E0B', // Text secondary color
        // Add more custom colors as needed
      },
      screens: {
        sm: '640px',
        md: '768px', 
        lg: '1200px',
        xl: '1280px',
        '2xl': '1536px',
      },
    },
  },
  plugins: [],
}
