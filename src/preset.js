import buildOptions from "./buildOptions";
import defaultOptions from "./defaultOptions";
import preview from "./preview";
import util, { resolve } from "./util";

/**
 * Futago-za Ryuu's Babel preset generator.
 *
 * WARNING: This default method is only intended to be used by Babel.
 *
 * @param {any} [context]
 * @param {{}} [_config]
 */

export default function use( context, _config ) {

    const options = buildOptions( _config );
    const config = options.config;

    /**
     * @type {(string | [string, {}])[]}
     */
    const plugins = [];

    /**
     * @type {(string | [string, {}])[]}
     */
    const presets = [

        [ resolve( "@babel/preset-env" ), options.env ]

    ];

    if ( config.stage > -1 && config.stage < 4 )

        presets.push( resolve( "@babel/preset-stage-" + config.stage ) );

    if ( options.resolver )

        plugins.push( [ resolve( "babel-plugin-module-resolver" ), options.resolver ] );

    if ( config.async )

        // if `config.async` exists then `options.async` will contain the correct options
        plugins.push( [ resolve( "@babel/plugin-transform-async-to-generator" ), options.async ] );

    if ( options.runtime )

        plugins.push( [ resolve( "@babel/plugin-transform-runtime" ), options.runtime ] );

    return {

        /**
         * Used by Babel to determine if the comment should remain.
         * 
         * If `config.removeEslintComments` is `true` (default), this will ignore
         * comments that contain `eslint` at the start (whitespace is ignored).
         * 
         * @param {string} comment 
         */
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
    use,
    preview,
    util,

};

// v1 API compatibility

export const preset = use;
