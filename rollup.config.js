export default {
    input: "lib/index.js",
    output: {
        file: "lib/index.umd.js",
        format: "umd",
        name: "SprintfFormatter",
        globals: {
            "sprintf-js": "window",
        },
    },
    external: [
        "sprintf-js",
    ],
};
