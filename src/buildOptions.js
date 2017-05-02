import defaultOptions from "./defaultOptions";
import { castArray, listOnce, getPackage } from "./util";
import { major as majorSemver } from "semver";

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

        if ( envOptions.exclude.indexOf( "transform-async-to-module-method" ) === -1 )

            asyncOptions = {

                "module": config.asyncModule || defaultOptions.asyncModule,
                "method": config.asyncMethod || defaultOptions.asyncMethod

            };

    }

    if ( ! config.node ) {

        const metafile = getPackage( config.cwd || defaultOptions.cwd );
        const targets = envOptions.targets;

        if ( metafile.engines && metafile.engines.node )

            targets.node = majorSemver( config.node, { loose: true } );

        else

            targets.node = defaultOptions.node;

    }

    return {
        async: asyncOptions,
        config: config,
        env: envOptions,
        resolver: resolverOptions
    };

}
