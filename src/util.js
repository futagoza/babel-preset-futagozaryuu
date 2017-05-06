/* eslint no-empty: 0*/

import { existsSync } from "fs";
import { dirname, join } from "path";

/**
 * Always return an array, whatever the value.
 *
 * @param {string|any[]} value
 * @param {any} [alt]
 * @returns {any[]}
 */

export function castArray( value, alt ) {

    if ( typeof value === "string" ) return [ value ];
    if ( Array.isArray( value ) ) return value;

    return alt ? castArray( alt ) : [];

}

/**
 * Try and locate the `package.json` metafile, else return `{}`
 *
 * @param {string} cwd
 * @returns {object}
 */

export function getPackage( cwd ) {

    try {

        return require( join( cwd, "package.json" ) );

    } catch ( e ) { }

    const parentDir = dirname( cwd );

    if ( cwd !== parentDir && parentDir !== "." ) {

        return getPackage( parentDir );

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

export function listOnce( list, value ) {

    const index = list.indexOf( value );
    if ( index === -1 ) list.push( value );

}

/**
 * Resolve a `package-id` relative to the `babel-preset-futagozaryuu` package.
 *
 * NOTE: Should I only use `require.resolve` here instead?
 *
 * @param {string} id
 * @returns {string}
 */

export function resolve( id ) {

    try {

        const path = join( __dirname, "..", "node_modules", id );

        const metafile = require( join( path, "package.json" ) );
        if ( metafile.main ) return join( path, metafile.main );

        let mainfile = join( path, "index.js" );
        if ( existsSync( mainfile ) ) return mainfile;

        mainfile = join( path, "lib", "index.js" );
        if ( existsSync( mainfile ) ) return mainfile;

    } catch ( e ) { }

    return require.resolve( id );

}

/**
 * Return the major version number from the given string.
 *
 * @param {string} version
 * @returns {string}
 */

export function majorSemver( version ) {

    return version.replace( /^[^0-9]+/, "" ).split( "." )[ 0 ];

}

/**
 * List of targets to use with `babel-preset-env`
 */

export const targets = [
    "chrome",
    "opera",
    "edge",
    "firefox",
    "safari",
    "ie",
    "ios",
    "android",
    "electron",
    "browsers"
];

/**
 * Defaults (e.g. `import { util } from "babel-preset-futagozaryuu";`).
 */

export default {

    castArray,
    getPackage,
    listOnce,
    resolve,
    majorSemver,
    targets

};
