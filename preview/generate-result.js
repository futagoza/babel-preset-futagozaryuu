"use strict";

const compileDir = require( "@babel/cli/lib/babel/dir" ).default;
const parseArgv = require( "@babel/cli/lib/babel/options" ).default;
const { join } = require( "path" );

const argv = process.argv;
const args = [

    argv[ 0 ],
    argv[ 1 ],

    "--no-babelrc",
    "--presets", join( __dirname, "..", "lib", "use.js" ),
    "-d", join( __dirname, "result" ),
    "lib",

    ...argv.slice( 2 ),

];

compileDir( parseArgv( args ) )
    .catch( err => {

        console.error( err );
        process.exit( 1 );

    } );
