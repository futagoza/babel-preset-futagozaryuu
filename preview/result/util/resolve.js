"use strict";

const {
  existsSync
} = require("fs");

const {
  join
} = require("path");
/**
 * Resolve a `package-id` relative to the `babel-preset-futagozaryuu` package.
 *
 * NOTE: Should I only use `require.resolve` here instead?
 *
 * @param {String} id The package name to resolve.
 * @returns {String} The resolved path to the package.
 */


function resolve(id) {
  try {
    const path = join(__dirname, "..", "node_modules", id);

    const metafile = require(join(path, "package.json"));

    if (metafile.main) return join(path, metafile.main);
    let mainfile = join(path, "index.js");
    if (existsSync(mainfile)) return mainfile;
    mainfile = join(path, "lib", "index.js");
    if (existsSync(mainfile)) return mainfile;
  } catch (e) {// ignore error?...
  }

  return require.resolve(id);
}

module.exports = resolve;