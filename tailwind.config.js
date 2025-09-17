/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        './app.vue', // <- precisa disso!
        './components/**/*.{vue,js,ts}',
        './layouts/**/*.vue',
        './pages/**/*.vue',
        './plugins/**/*.{js,ts}',
    ],
    theme: {
        extend: {},
    },
    plugins: [],
}
