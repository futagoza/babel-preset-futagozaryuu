"use strict";

var _interopRequireWildcard = require("@babel/runtime/helpers/interopRequireWildcard");

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.use = exports.default = use;
exports.preset = void 0;

var _buildOptions = _interopRequireDefault(require("./buildOptions"));

exports.buildOptions = _buildOptions.default;

var _defaultOptions = _interopRequireDefault(require("./defaultOptions"));

exports.defaultOptions = _defaultOptions.default;

var _preview = _interopRequireDefault(require("./preview"));

exports.preview = _preview.default;

var _util = _interopRequireWildcard(require("./util"));

exports.util = _util.default;

/**
 * Futago-za Ryuu's Babel preset generator.
 *
 * WARNING: This default method is only intended to be used by Babel.
 *
 * @param {any} [context]
 * @param {{}} [_config]
 */
function use(context, _config) {
  var options = (0, _buildOptions.default)(_config);
  var config = options.config;
  /**
   * @type {(string | [string, {}])[]}
   */

  var plugins = [];
  /**
   * @type {(string | [string, {}])[]}
   */

  var presets = [[(0, _util.resolve)("@babel/preset-env"), options.env]];
  if (config.stage > -1 && config.stage < 4) presets.push((0, _util.resolve)("@babel/preset-stage-" + config.stage));
  if (options.resolver) plugins.push([(0, _util.resolve)("babel-plugin-module-resolver"), options.resolver]);
  if (config.async) // if `config.async` exists then `options.async` will contain the correct options
    plugins.push([(0, _util.resolve)("@babel/plugin-transform-async-to-generator"), options.async]);
  if (options.runtime) plugins.push([(0, _util.resolve)("@babel/plugin-transform-runtime"), options.runtime]);
  return {
    "envName": "production",

    /**
     * Used by Babel to determine if the comment should remain.
     * 
     * If `config.removeEslintComments` is `true` (default), this will ignore
     * comments that contain `eslint` at the start (whitespace is ignored).
     * 
     * @param {string} comment 
     */
    shouldPrintComment(comment) {
      if (!config.removeEslintComments) return true;
      return comment.trim().startsWith("eslint", 0) === false;
    },

    "plugins": plugins,
    "presets": presets
  };
}
/**
 * Exports (e.g. `import * as preset from "babel-preset-futagozaryuu";`).
 */


// v1 API compatibility
var preset = use;
exports.preset = preset;