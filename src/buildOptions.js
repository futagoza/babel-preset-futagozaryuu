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
 * @param {object} _config
 * @returns {{async:object, config:object, env:object, resolver:object}}
 */
export default function buildOptions( _config = {} ) {

    const config = Object.assign( {}, defaultOptions, _config );
    let asyncOptions, envOptions, resolverOptions;

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

    };

    if ( ! config.disableResolver ) {

        resolverOptions = {

            "alias": config.alias || defaultOptions.alias,
            "cwd": config.cwd || defaultOptions.cwd,
            "extensions": castArray( config.extensions, defaultOptions.extensions ),
            "root": castArray( config.root, defaultOptions.root ),
            "transformFunctions": config.transformFunctions || config.importers,
            "resolvePath": config.resolvePath || config.resolver,

        };

    }

    if ( ! config.regenerator ) listOnce( envOptions.exclude, "transform-regenerator" );

    if ( ! config.asyncToGenerator ) {

        listOnce( envOptions.exclude, "transform-async-to-generator" );
        const index = envOptions.exclude.indexOf( "transform-async-to-module-method" );

        if ( index === -1 )

            asyncOptions = {

                "module": config.asyncModule || defaultOptions.asyncModule,
                "method": config.asyncMethod || defaultOptions.asyncMethod

            };

        else if ( index !== -1 )

            envOptions.exclude.splice( index, 1 );

    }

    if ( ! config.node && config.node !== false ) {

        const engines = getPackage( config.cwd || defaultOptions.cwd ).engines;

        config.node = engines && engines.node
                    ? majorSemver( String( engines.node ) )
                    : "current";

    }

    if ( typeof config.node === "string" ) {

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

        asyncOptions,
        config,
        envOptions,
        resolverOptions,

    };

}
