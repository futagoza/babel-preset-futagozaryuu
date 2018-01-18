"use strict";

exports.__esModule = true;
exports.default = void 0;
var _default = {
  /*********************** babel-preset-futagozaryuu ***********************/

  /**
   * If true, will not use `babel-plugin-module-resolver`.
   * 
   * @default false
   * @type {boolean}
   */
  "disableResolver": false,

  /**
   * If true, will use the method `babelrc.shouldPrintComment` to ignore eslint comments.
   * 
   * @default true
   * @type {boolean}
   */
  "removeEslintComments": true,

  /**
   * By default this preset will exclude `@babel/transform-regenerator`, but if this
   * option is enabled, it will not perform the exclusion.
   * 
   * _NOTE:_ This does not mean that `@babel/transform-regenerator` will be included.
   * 
   * @default false
   * @type {boolean}
   */
  "regenerator": false,

  /**
   * These values will enable the plugin `@babel/transform-runtime` and:
   * 
   * 1. On `true` set the configuration I usually use with this plugin.
   * 2. On a string, will also set the module name of the runtime that will be used.
   * 3. On a object, will overwrite my configuration based on the object.
   * 
   * @default false
   * @type {boolean|string|{}}
   */
  "runtime": false,

  /**
   * Any value that is `0` to `3` will enable the appropriate `@babel/preset-stage-*` preset,
   * where as any other value will not add any preset's for proposal based plugins.
   * 
   * @default 0
   * @type {number}
   */
  "stage": 0,

  /*********************** @babel/preset-env ***********************/
  // https://www.npmjs.com/package/@babel/preset-env#options
  "browsers": false,
  // targets.browsers
  "debug": false,
  "include": [],
  "exclude": [],
  "loose": true,
  "modules": "commonjs",
  "node": null,
  // targets.node
  "spec": false,
  "useBuiltIns": "usage",
  "forceAllTransforms": false,
  "shippedProposals": false,

  /*********************** babel-plugin-module-resolver ***********************/
  // https://www.npmjs.com/package/babel-plugin-module-resolver#options
  "alias": {},
  "cwd": "packagejson",
  "extensions": [".js", ".jsx", ".es", ".es6", ".mjs", ".ios.js", ".android.js"],
  "stripExtensions": [".ios.js", ".android.js"],
  "importers": void 0,
  // transformFunctions
  "resolver": void 0,
  // resolvePath
  "root": "src",

  /*********************** @babel/plugin-transform-async-to-generator ***********************/
  // https://www.npmjs.com/package/@babel/plugin-transform-async-to-generator#usage

  /**
   * These values enable the plugin `@babel/plugin-transform-async-to-generator` and:
   * 
   * 1. On `true` will not pass any options.
   * 2. On a object, will overwrite my configuration based on the object.
   * 
   * @default "bluebird.coroutine"
   * @type {boolean|string|{}}
   */
  "async": "bluebird.coroutine"
};
exports.default = _default;