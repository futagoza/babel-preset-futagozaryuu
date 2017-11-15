/*

Temporary solution for https://github.com/babel/babel/pull/6745

Based on @Zephir77167 solution (https://github.com/babel/babel/pull/6745#issuecomment-344315250):
sed -i'' -e 's/result.deopt.isIdentifier()/t.isIdentifier(result.deopt)/g' ./node_modules/@babel/preset-env/lib/use-built-ins-plugin.js

*/

"use strict";

const fs = require( "fs" );
const path = require( "path" );

const file = path.join( __dirname, "..", "node_modules", "@babel/preset-env", "lib", "use-built-ins-plugin.js" );

fs.readFile( file, "utf8", ( err, data ) => {

    if ( err ) {

        console.warn( `Couldn't edit "${ file }", recived error:` );
        console.warn( err );

    } else {

        data = data.replace( "result.deopt.isIdentifier()", "t.isIdentifier(result.deopt)" );
        fs.writeFile( file, data, "utf8", err => ( err ? console.warn( err ) : 0 ) );

    }

} );
