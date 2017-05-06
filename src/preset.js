import buildOptions from "./buildOptions";
import defaultOptions from "./defaultOptions";
import util, { resolve } from "./util";

/**
 * Futago-za Ryuu's Babel preset generator.
 *
 * WARNING: This default method is only intended to be used by Babel.
 */

export default function preset( context, _config ) {

    const options = buildOptions( _config );
    const config = options.config;
    const plugins = [];
    const presets = [];

    if ( config.stage > -1 && config.stage < 4 ) {

        presets.push( resolve( "babel-preset-stage-" + config.stage ) );

    }

    presets.push( [ resolve( "babel-preset-env" ), options.env ] );

    if ( options.resolver )

        plugins.push( [ resolve( "babel-plugin-module-resolver" ), options.resolver ] );

    if ( options.async )

        plugins.push( [ resolve( "babel-plugin-transform-async-to-module-method" ), options.async ] );

    return {

        shouldPrintComment( comment ) {

            if ( ! config.removeEslintComments ) return true;
            return comment.trim().startsWith( "eslint", 0 ) === false;

        },

        "plugins": plugins,
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
