"use strict";

/*

    WARNING

    As of Babel v7-beta.50 this file is not working, but is kept for my own refrence to the API.

*/

const compileDir = require( "@babel/cli/lib/babel/dir" ).default;
const parseArgv = require( "@babel/cli/lib/babel/options" ).default;
const { join } = require( "path" );

const args = process.argv.slice( 2 );

args.push( "--no-babelrc" );
args.push( "--presets " + join( __dirname, "..", "lib", "use.js" ) );
args.push( "-d " + join( __dirname, "result" ) );
args.push( "lib" );

compileDir( parseArgv( args ) )
    .catch( err => {

        console.error( err );
        process.exit( 1 );

    } );
