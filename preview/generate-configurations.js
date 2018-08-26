"use strict";

const fs = require( "fs" );
const path = require( "path" );
const minimist = require( "minimist" );
const preset = require( "./preset" );

const target = path.join( __dirname, "configurations" );
function save( name, preset ) {

    name = `${ target }/${ name }.json`;
    preset = JSON.stringify( preset, null, 4 );

    fs.writeFileSync( name, preset );

}

const args = minimist( process.argv.slice( 2 ) );
const options = preset.preview( args );

if ( ! fs.existsSync( target ) ) fs.mkdirSync( target );

save( "preset", options.preset );
save( "babel", options.babel );
