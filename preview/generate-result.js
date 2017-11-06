"use strict";

const mkdirp = require( "mkdirp" );
const minimist = require( "minimist" );
const babel = require( "@babel/cli/lib/babel/dir" ).default;
const preset = require( "../lib/preset" );

const args = minimist( process.argv.slice( 2 ) );
const program = {

    babelrc: false,
    outDir: "preview/result",

};

program.copyFiles = args.D || args.copyFiles;
delete args.D;
delete args.copyFiles;

program.extensions = args.x || args.extensions;
delete args.x;
delete args.extensions;

program.sourceMaps = args.s || args.sourceMaps;
delete args.s;
delete args.sourceMaps;

const options = preset.use( null, args );
options.sourceMaps = program.sourceMaps;

mkdirp.sync( program.outDir );
babel( program, [ "src" ], options );
