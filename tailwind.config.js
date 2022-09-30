/** @type {import('tailwindcss').Config} */

const plugin = require('tailwindcss/plugin');

module.exports = {
    content: [
        './pages/**/*.{js,ts,jsx,tsx}',
        './components/**/*.{js,ts,jsx,tsx}',
    ],
    theme: {
        extend: {
            zIndex: {
                999: '999',
            },
        },
    },
    plugins: [
        plugin(function ({ addBase, addComponents, addUtilities, theme }) {
            addUtilities({
                '.container-portrait-size': {
                    width: 'var(--container-portrait-size)',
                },
                '.container-landscape-size': {
                    height: 'var(--container-landscape-size)',
                },
            });
        }),
    ],
};
