import {
  createRollupLibraryConfig,
  createRollupDataConfig,
} from "@svgr-iconkit/build-config";

const pkg = require("./package.json");

const plugins = [];

export default [
  createRollupLibraryConfig({
    libraryName: pkg.name,
    entry: ["./src/index.ts", "./src/native.ts"],
    plugins,
  }),
  createRollupDataConfig({
    entryPath: "./src/gen/icons/solid",
    outputPath: "./icons/solid",
  }),
  createRollupDataConfig({
    entryPath: "./src/gen/icons/outline",
    outputPath: "./icons/outline",
  }),
];
