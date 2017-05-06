"use strict";

const fs = require( "fs" );
const minimist = require( "minimist" );
const preset = require( "./lib/preset" );

function save( name, preset ) {

    name = `./lib/preview.${ name }.json`;
    preset = JSON.stringify( preset, null, 4 );

    fs.writeFileSync( name, preset );

}

const args = minimist( process.argv.slice( 2 ) );
const options = preset.preview( args );

save( "preset", options.preset );
save( "babel", options.babel );
