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

    // if true, will not exclude `regenerator`
    "regenerator": false,

    /* babel-preset-env */
    // https://www.npmjs.com/package/babel-preset-env#options

    "browsers": null, // targets.browsers
    "debug": false,
    "include": [],
    "exclude": [],
    "loose": true,
    "modules": "commonjs",
    "node": "current", // targets.node
    "spec": false,
    "uglify": false, // targets.uglify
    "useBuiltIns": false,

    /* babel-plugin-module-resolver */
    // https://www.npmjs.com/package/babel-plugin-module-resolver#options

    "alias": [],
    "cwd": process.cwd(),
    "extensions": [ ".js", ".jsx", ".es", ".es6" ],
    "root": "src",

    /* babel-plugin-transform-async-to-module-method */
    // https://www.npmjs.com/package/babel-plugin-transform-async-to-module-method#usage

    "asyncModule": "bluebird", // module
    "asyncMethod": "coroutine" // method

};
