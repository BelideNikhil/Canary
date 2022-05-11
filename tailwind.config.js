module.exports = {
    content: ["./src/**/*.{js,jsx,ts,tsx}"],
    darkMode: "class",
    theme: {
        extend: {
            colors: {
                "primary-color": "#1d9bf0",
            },
            boxShadow: {
                black: "4px 4px 0 #212121",
            },
            zIndex: {
                4: "4" /* home heading */,
                10: "10" /*post modal */,
            },
        },
        fontFamily: {
            montserrat: ["Montserrat", "sans-serif"],
        },
    },

    plugins: [],
};
