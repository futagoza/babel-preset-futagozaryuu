// node_modules/.bin/babel src --out-dir temp-lib --presets ../lib/preset.js

const fs = require( "fs" );
const preset = require( "./lib/preset.js" ).preset();

fs.writeFileSync( "./lib/index.json", JSON.stringify( preset, null, 4 ) );
