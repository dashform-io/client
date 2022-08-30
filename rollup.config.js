import { nodeResolve } from "@rollup/plugin-node-resolve";
import commonjs from "@rollup/plugin-commonjs";
import typescript from "@rollup/plugin-typescript";
import dts from "rollup-plugin-dts";
import { babel } from "@rollup/plugin-babel";

// rollup.config.js
// eslint-disable-next-line import/no-anonymous-default-export
export default [
  {
    input: "src/index.tsx",
    output: [
      {
        file: "dist/index.js",
        format: "cjs",
      },
    ],
    plugins: [
      typescript({ tsconfig: "./tsconfig.json" }),
      babel({
        presets: ["@babel/preset-react"],
      }),
    ],
  },
  // {
  //   input: "dist/index.d.ts",
  //   output: [{ file: "dist/index.d.ts", format: "esm" }],
  //   plugins: [dts()],
  // },
];
