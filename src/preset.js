import buildOptions from "./buildOptions";
import defaultOptions from "./defaultOptions";
import util from "./util";

/**
 * Futago-za Ryuu's Babel preset generator.
 *
 * WARNING: This default method is only intended to be used by Babel.
 */

export default function preset( context, _config ) {

    const options = buildOptions( _config );
    const config = options.config;
    const presets = [];

    if ( config.stage > -1 && config.stage < 4 ) {

        presets.push( util.resolve( "babel-preset-stage-" + config.stage ) );

    }

    presets.push( [ util.resolve( "babel-preset-env" ), options.env ] );

    return {

        shouldPrintComment( comment ) {

            if ( ! config.removeEslintComments ) return true;
            return comment.trim().startsWith( "eslint", 0 ) === false;

        },

        "plugins": [
            [ util.resolve( "babel-plugin-module-resolver" ), options.resolver ],
            [ util.resolve( "babel-plugin-transform-async-to-module-method" ), options.async ]
        ],

        "presets": presets

    };

}

/**
 * Exports (e.g. `import * as preset from "babel-preset-futagozaryuu";`).
 */

export {

    buildOptions,
    defaultOptions,
    preset,
    util

};
