"use strict";

const semver = require( "semver" );

/**
 * Return the major version number from the given semver string.
 *
 * @param {String} version A semver version string
 */

function majorSemver( version ) {

    return semver.major( version );

}

module.exports = majorSemver;
