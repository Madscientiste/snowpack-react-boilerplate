/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: "/",
        src: "/dist",
    },

    devOptions: {
        open: 'none'
    },

    plugins: [
        [
            "@snowpack/plugin-sass",
            {
                compilerOptions: {
                    loadPath: "./node_modules",
                },
            },
        ],
    ],
};
