"use strict";

const {
  dirname,
  join
} = require("path");
/**
 * Try and locate the `package.json` in the current working directory, else return `{}`
 *
 * @param {String} cwd The current working directory.
 * @returns {{}} Either the content for a `package.json`, or an empty object.
 */


function getPackage(cwd) {
  if (!cwd || cwd === "packagejson" || cwd === ".") cwd = process.cwd();

  try {
    return require(join(cwd, "package.json"));
  } catch (e) {// constinue...
  }

  const parentDir = dirname(cwd);

  if (cwd !== parentDir && parentDir !== ".") {
    return getPackage(parentDir);
  }

  return {};
}

module.exports = getPackage;