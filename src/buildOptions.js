import defaultOptions from "./defaultOptions";
import { castArray, listOnce, getPackage, majorSemver } from "./util";

/**
 * Build a valid options object that can be used to pass
 * options to other presets and/or plugins.
 *
 * @param {object} _config
 * @returns {{async:object, config:object, env:object, resolver:object}}
 */
export default function buildOptions( _config = {} ) {

    const config = Object.assign( defaultOptions, _config );
    let asyncOptions, envOptions, resolverOptions;

    envOptions = {

        "debug": !! config.debug,
        "include": castArray( config.include ),
        "exclude": castArray( config.exclude ),
        "loose": !! config.loose,
        "modules": config.modules || defaultOptions.modules,
        "spec": !! config.spec,
        "targets": {
            "browsers": config.browsers,
            "node": config.node,
            "uglify": !! config.uglify
        },
        "useBuiltIns": !! config.useBuiltIns

    };

    if ( ! config.disableResolver ) {

        resolverOptions = {

            "alias": config.alias || defaultOptions.alias,
            "cwd": config.cwd || defaultOptions.cwd,
            "extensions": castArray( config.extensions, defaultOptions.extensions ),
            "root": castArray( config.root, defaultOptions.root )

        };

    }

    if ( ! config.regenerator ) {

        listOnce( envOptions.exclude, "transform-regenerator" );

    }

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

    if ( ! config.node ) {

        const engines = getPackage( config.cwd || defaultOptions.cwd ).engines;

        envOptions.targets.node = engines && engines.node
                                ? majorSemver( String( engines.node ) )
                                : defaultOptions.defaultNodeVersion;

    }

    if ( typeof config.stage !== "number" ) config.stage = -1;

    return {
        async: asyncOptions,
        config: config,
        env: envOptions,
        resolver: resolverOptions
    };

}
