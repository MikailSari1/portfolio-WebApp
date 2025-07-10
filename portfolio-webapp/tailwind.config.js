/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html", // If you have an index.html in the root
        "./src/**/*.{js,jsx,ts,tsx}", // Look for JS/JSX/TS/TSX files in the src folder
    ],
    theme: {
        colors: {
            'primary': '#202A44', // Dark gray
            'secondary': '#2d3748', // Slightly lighter gray
            'accent': '#4a5568', // Even lighter gray
            'text': '#ffffff', // Light gray for text
        },
        extend: {},
    },
    plugins: [],
}