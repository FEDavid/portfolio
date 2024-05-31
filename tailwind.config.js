module.exports = {
  mode: 'jit', // Just-In-Time mode for faster build times
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // Specify files to scan for classes
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      container: {
        center: true,
      },
    }, // Extend Tailwind CSS theme with customizations
  },
  variants: {
    extend: {}, // Extend Tailwind CSS variants
  },
  plugins: [], // Additional Tailwind CSS plugins
}
