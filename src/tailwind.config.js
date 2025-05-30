/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./index.html",
        "./src/**/*.{js,ts,jsx,tsx}", // <--- include all your src files
    ],
    theme: {
        extend: {
            fontFamily: {
                proxima: ['ProximaNova', 'sans-serif'],
            },
        },
    },
    plugins: [],
};