"use strict";

exports.__esModule = true;
exports.castArray = castArray;
exports.getPackage = getPackage;
exports.listOnce = listOnce;
exports.resolve = resolve;
exports.majorSemver = majorSemver;
exports.default = exports.targets = void 0;

require("core-js/modules/es6.regexp.replace");

require("core-js/modules/es6.regexp.split");

var _fs = require("fs");

var _path = require("path");

/**
 * Always return an array, whatever the value.
 *
 * @param {string|any[]} value
 * @param {any} [alt]
 * @returns {any[]}
 */
function castArray(value, alt) {
  if (typeof value === "string") return [value];
  if (Array.isArray(value)) return value;
  return alt ? castArray(alt) : [];
}
/**
 * Try and locate the `package.json` metafile, else return `{}`
 *
 * @param {string} cwd
 * @returns {object}
 */


function getPackage(cwd) {
  if (!cwd || cwd === "packagejson" || cwd === ".") cwd = process.cwd();

  try {
    return require((0, _path.join)(cwd, "package.json"));
  } catch (e) {}

  var parentDir = (0, _path.dirname)(cwd);

  if (cwd !== parentDir && parentDir !== ".") {
    return getPackage(parentDir);
  }

  return {};
}
/**
 * Check if `value` is already mentioned in `list` (expected to
 * be an array), otherwise push the value onto the end of the list.
 *
 * @param {any[]} list
 * @param {any} value
 * @returns {void}
 */


function listOnce(list, value) {
  var index = list.indexOf(value);
  if (index === -1) list.push(value);
}
/**
 * Resolve a `package-id` relative to the `babel-preset-futagozaryuu` package.
 *
 * NOTE: Should I only use `require.resolve` here instead?
 *
 * @param {string} id
 * @returns {string}
 */


function resolve(id) {
  try {
    var path = (0, _path.join)(__dirname, "..", "node_modules", id);

    var metafile = require((0, _path.join)(path, "package.json"));

    if (metafile.main) return (0, _path.join)(path, metafile.main);
    var mainfile = (0, _path.join)(path, "index.js");
    if ((0, _fs.existsSync)(mainfile)) return mainfile;
    mainfile = (0, _path.join)(path, "lib", "index.js");
    if ((0, _fs.existsSync)(mainfile)) return mainfile;
  } catch (e) {}

  return require.resolve(id);
}
/**
 * Return the major version number from the given string.
 *
 * @param {string} version
 * @returns {string}
 */


function majorSemver(version) {
  return version.replace(/^[^0-9]+/, "").split(".")[0];
}
/**
 * List of targets to use with `@babel/preset-env`
 */


var targets = ["node", "chrome", "opera", "edge", "firefox", "safari", "ie", "ios", "android", "electron", "browsers"];
/**
 * Defaults (e.g. `import { util } from "babel-preset-futagozaryuu";`).
 */

exports.targets = targets;
var _default = {
  castArray,
  getPackage,
  listOnce,
  resolve,
  majorSemver,
  targets
};
exports.default = _default;