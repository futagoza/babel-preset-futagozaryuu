/*

    This script allows the use of dependencies in `@babel/polyfill` to work correctly
    on Node.js v4, which was removed in https://github.com/babel/babel/pull/6755

*/

"use strict";

if ( process.versions.node.charAt( 0 ) === "4" ) {

    const cp = require( "child_process" );
    const path = require( "path" );

    function install( dependency ) {

        cp.spawnSync( "npm", [ "install", dependency ], {

            stdio: "inherit",
            cwd: path.join( __dirname, "..", "lib" ),

        } );

    }

    install( "core-js" );
    install( "regenerator-runtime" );

}
