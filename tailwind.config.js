/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
        "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
        "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    ],
    theme: {
        colors: {
            primary: "#FFFFFF",
            secondary: "#181E4B",
            accent: "#DF6951",
            textGray: "#5E6282",
        },
        extend: {
            backgroundImage: {
                heroBg: 'url("../assets/home-hero-bg.jpg")',
            },
        },
    },
    plugins: [],
};
