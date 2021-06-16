import svgData from "@svgr-iconkit/rollup-plugin-svg-data";
import { createRollupConfig } from "../../rollup.iconset.config";

const pkg = require("./package.json");

const plugins = [
  svgData({
    removeNamePrefix: "fi-",
  })
];

export default [
  createRollupConfig({
    libraryName: pkg.name,
    entry: ["./src/index.ts", "./src/native.ts"],
    mainDir: pkg.commonjs.replace("index.js", ""),
    main: pkg.commonjs,
    moduleDir: pkg.module.replace("index.js", ""),
    module: pkg.module,
    plugins,
  }),
  // createRollupConfig({
  //   libraryName: pkg.name,
  //   entry: "./src/native.ts",
  //   main: pkg.commonjs.replace("index.js", "native.js"),
  //   module: pkg.module.replace("index.js", "native.js"),
  //   plugins,
  // }),
];
