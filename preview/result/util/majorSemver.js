"use strict";
/**
 * Return the major version number from the given semver string.
 *
 * @param {String} version A semver version string
 */

require("core-js/modules/es.string.replace");

require("core-js/modules/es.string.split");

function majorSemver(version) {
  return version.replace(/^[^0-9]+/, "").split(".")[0];
}

module.exports = majorSemver;