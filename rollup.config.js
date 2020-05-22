import alias from "@rollup/plugin-alias";
import resolve from "@rollup/plugin-node-resolve";
import replace from "@rollup/plugin-replace";
import {
    readFile,
} from "fs-extra";
import {
    EOL,
} from "os";
import cleanup from "rollup-plugin-cleanup";
import sourcemaps from "rollup-plugin-sourcemaps";

export default async function () {
    const version = process.env.VERSION || (await import("./package.json")).version,
        banner = `/*!${EOL} * sprintf-formatter v${version}${EOL} * ${EOL}` + (await readFile("LICENSE", {
            encoding: "utf-8",
        })).split(EOL).filter((line, i, lines) => i === lines.length - 1 ? line : true).map(line => ` * ${line}`).join(EOL) + `${EOL} */`;
    
    return {
        input: "lib/index.js",
        output: {
            format: "umd",
            name: "SprintfFormatter",
            amd: {
                id: "sprintf-formatter",
            },
            sourcemap: true,
            globals: {
                "sprintf-js": "self",
            },
            banner,
        },
        plugins: [
            alias({
                entries: [
                    {
                        find: "lodash",
                        replacement: "lodash-es",
                    },
                ],
            }),
            resolve(),
            sourcemaps(),
            replace({
                "process.env.NODE_ENV": JSON.stringify(process.env.NODE_ENV),
            }),
            cleanup({
                comments: "none",
            }),
        ],
        external: [
            "sprintf-js",
        ],
    };
}
