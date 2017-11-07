/* eslint prefer-const: 0*/

import defaultOptions from "./defaultOptions";
import {

    castArray,
    listOnce,
    getPackage,
    majorSemver,
    targets,

} from "./util";

/**
 * Build a valid options object that can be used to pass
 * options to other presets and/or plugins.
 *
 * @param {{}} _config
 */
export default function buildOptions( _config = {} ) {

    const config = Object.assign( {}, defaultOptions, _config );
    let asyncOptions, envOptions, resolverOptions, runtimeOptions;

    if ( typeof config.stage !== "number" ) config.stage = -1;

    envOptions = {

        "debug": !! config.debug,
        "include": castArray( config.include ),
        "exclude": castArray( config.exclude ),
        "loose": !! config.loose,
        "modules": config.modules,
        "spec": !! config.spec,
        "targets": {},
        "useBuiltIns": config.useBuiltIns,
        "forceAllTransforms": !! config.forceAllTransforms,
        "shippedProposals": !! config.shippedProposals,

    };

    if ( ! config.disableResolver ) {

        resolverOptions = {

            "alias": config.alias || defaultOptions.alias,
            "cwd": config.cwd || defaultOptions.cwd,
            "extensions": castArray( config.extensions, defaultOptions.extensions ),
            "stripExtensions": castArray( config.stripExtensions, defaultOptions.stripExtensions ),
            "root": castArray( config.root, defaultOptions.root ),
            "transformFunctions": config.transformFunctions || config.importers,
            "resolvePath": config.resolvePath || config.resolver,

        };

    }

    if ( ! config.regenerator ) listOnce( envOptions.exclude, "transform-regenerator" );

    if ( config.async ) {

        const excludeIndex = envOptions.exclude.indexOf( "transform-async-to-generator" );
        let configAsync = config.async;

        listOnce( envOptions.include, "transform-async-to-generator" );
        if ( excludeIndex !== -1 ) envOptions.exclude.splice( excludeIndex, 1 );

        if ( typeof configAsync === "object" ) asyncOptions = {

            "module": configAsync.module,
            "method": configAsync.method,

        };

        else if ( typeof configAsync === "string" ) {

            configAsync = configAsync.split( "." );

            asyncOptions = {

                "module": configAsync[ 0 ],
                "method": configAsync.length > 1
                    ? configAsync.slice( 1 ).join( "." )
                    : void 0,

            };

        }

    }

    if ( typeof config.runtime === "object" || typeof config.runtime === "string" || config.runtime === true ) {

        runtimeOptions = {

            "helpers": true,
            "polyfill": true,
            "regenerator": true,
            "moduleName": typeof config.runtime === "string" ? config.runtime : void 0,
            "useBuiltIns": false,
            "useESModules": false,

        };

        if ( typeof config.runtime === "object" ) Object.assign( runtimeOptions, config.runtime );

    }

    if ( ! config.node && config.node !== false ) {

        const engines = getPackage( config.cwd || defaultOptions.cwd ).engines;

        config.node = engines && engines.node
                    ? majorSemver( String( engines.node ) )
                    : "current";

    }

    if ( typeof config.node === "string" && config.node !== "current" ) {

        config.node = config.node.includes( "." )
                    ? parseFloat( config.node )
                    : parseInt( config.node, 10 );

    }

    targets.forEach( target => {

        if ( ! config.hasOwnProperty( target ) ) return 0;
        if ( config[ target ] !== false ) {

            envOptions.targets[ target ] = config[ target ];

        }

    } );

    return {

        async: asyncOptions,
        config,
        env: envOptions,
        resolver: resolverOptions,
        runtime: runtimeOptions,

    };

}
