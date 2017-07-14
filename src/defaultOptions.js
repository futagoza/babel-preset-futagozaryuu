/*
    NOTE:

    1. Block comments identify the start of options for that preset/plugin
    2. Custom options have their description in the line comment above
    3. Options that have a line comment next to them show their real key(path)
    4. Options for external presets/plugins are described on their respective sites
*/

export default {

    /* babel-preset-futagozaryuu */

    // if true, will not use `babel-plugin-transform-async-to-module-method`
    "asyncToGenerator": false,

    // if true, will not use `babel-plugin-module-resolver`
    "disableResolver": false,

    // if true, will use a `babelrc.shouldPrintComment` method to ignore eslint comments
    "removeEslintComments": true,

    // if true, will not exclude `transform-regenerator`
    "regenerator": false,

    // if the `node` option is `null` and the `engines.node` property in your `package.json` is not
    // found, this will be used by `babel-preset-env` instead. If you don't want to target Node.js, set
    // this as well as the option `node` to `null`
    "defaultNodeVersion": "current",

    // stages 0 - 3 will enable the appropriate `babel-preset-stage-*`, where as 4 (or more) will disable them.
    "stage": 0,

    /* babel-preset-env */
    // https://www.npmjs.com/package/babel-preset-env#options

    "browsers": null, // targets.browsers
    "debug": false,
    "include": [],
    "exclude": [],
    "loose": true,
    "modules": "commonjs",
    "node": null, // targets.node
    "spec": false,
    "useBuiltIns": "usage",
    "forceAllTransforms": false,

    /* babel-plugin-module-resolver */
    // https://www.npmjs.com/package/babel-plugin-module-resolver#options

    "alias": {},
    "cwd": "packagejson",
    "extensions": [ ".js", ".jsx", ".es", ".es6", ".mjs" ],
    "importers": void 0, // transformFunctions
    "resolver": void 0, // resolvePath
    "root": "src",

    /* babel-plugin-transform-async-to-module-method */
    // https://www.npmjs.com/package/babel-plugin-transform-async-to-module-method#usage

    "asyncModule": "bluebird", // module
    "asyncMethod": "coroutine" // method

};
