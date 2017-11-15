/*

    This script allows the use of dependencies in `@babel/polyfill` to work correctly
    on Node.js v4, which was removed in https://github.com/babel/babel/pull/6755

*/

"use strict";

if ( process.versions.node.charAt( 0 ) === "4" ) {

    const fs = require( "fs" );
    const path = require( "path" );

    const file = path.join( __dirname, "..", "package.json" );

    fs.readFile( file, "utf8", ( err, data ) => {

        if ( err ) {

            console.warn( `Couldn't edit "${ file }", recived error:` );
            console.warn( err );

        } else {

            data = JSON.parse( data );
            Object.assign( data.dependencies, {

                "core-js": "latest",
                "regenerator-runtime": "latest"

            } );
            data = JSON.stringify( data, void 0, "    " );

            fs.writeFile( file, data, "utf8", err => ( err ? console.warn( err ) : 0 ) );

        }

    } );

}
