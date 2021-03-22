/** @type {import("snowpack").SnowpackUserConfig } */
module.exports = {
    mount: {
        public: "/",
        src: "/dist",
    },

    devOptions: {
        open: "none",
    },

    alias: {
        "@styles": "./src/styles",
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
