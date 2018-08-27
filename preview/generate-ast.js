"use strict";

const minimist = require( "minimist" );
const mkdirp = require( "mkdirp" );
const glob = require( "glob" ).sync;
const babel = require( "@babel/core" );
const preset = require( "./preset" );
const fs = require( "fs" );
const path = require( "path" );

const $target = path.join( __dirname, "ast" );
if ( ! fs.existsSync( $target ) ) fs.mkdirSync( $target );

const $args = minimist( process.argv.slice( 2 ) );
const $options = preset.use( null, $args );

glob( "lib/**/*.js" ).forEach( $filename => {

    const $source = fs.readFileSync( $filename, "utf8" );
    $options.filename = $filename;

    let $ast = babel.parse( $source, $options );
    $ast = JSON.stringify( $ast, null, 4 );

    $filename = $filename.replace( "lib/", "" ) + "on";
    $filename = path.join( $target, $filename );

    mkdirp.sync( path.dirname( $filename ) );
    fs.writeFileSync( $filename, $ast );

} );
