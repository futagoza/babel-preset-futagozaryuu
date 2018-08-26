"use strict";

const isArray = Array.isArray;

/**
 * Always return an array, whatever `value` is:
 * 
 * - If `value` is a string, `[ value ]` is returned.
 * - If `value` is an array, `value` is returned.
 * - Failing the first two, `alt` will be casted to an array (if possible) and returned.
 * - If `alt` isn't provided, an empty array is returned.
 * 
 * @param {String|[]} value The value you expect to be returned as an array.
 * @param {*} [alt] The alternative value to return as an array.
 * @returns {[]} An array.
 */

function castArray( value, alt ) {

    if ( typeof value === "string" ) return [ value ];
    if ( isArray( value ) ) return value;

    return alt == null ? castArray( alt ) : [];

}

module.exports = castArray;
