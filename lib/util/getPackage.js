"use strict";

const pkgup = require( "pkg-up" );

/**
 * Try and locate the `package.json` in the current working directory, else return `{}`
 *
 * @param {String} cwd The current working directory.
 * @returns {{}} Either the content for a `package.json`, or an empty object.
 */

function getPackage( cwd ) {

    if ( ! cwd || cwd === "packagejson" || cwd === "." ) cwd = process.cwd();

    const path = pkgup.sync( { cwd } );

    return path ? require( path ) : {};

}

module.exports = getPackage;
