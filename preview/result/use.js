"use strict";

const StagePlugins = require("./config/stage-plugins");

const buildOptions = require("./buildOptions");

const resolve = require("./util/resolve");
/**
 * Futago-za Ryuu's Babel preset generator.
 *
 * WARNING: This default method is only intended to be used by Babel.
 *
 * @param {*} [context] Babel compiler context?
 * @param {{}} [_config] The options passed to this preset.
 */


function use(context, _config) {
  const options = buildOptions(_config);
  const config = options.config;
  /**
   * @type {(String | [String, {}])[]}
   */

  const plugins = [];
  /**
   * @type {(String | [String, {}])[]}
   */

  const presets = [[resolve("@babel/preset-env"), options.env]];
  if (config.stage > -1 && config.stage < 4) plugins.push(...StagePlugins[config.stage]);
  if (options.resolver) plugins.push([resolve("babel-plugin-module-resolver"), options.resolver]);
  if (config.async) // if `config.async` exists then `options.async` will contain the correct options
    plugins.push([resolve("@babel/plugin-transform-async-to-generator"), options.async]);
  if (options.runtime) plugins.push([resolve("@babel/plugin-transform-runtime"), options.runtime]);
  return {
    // This option is casuing a root/probmatic error from @babel/cli v7-beta.51
    // "envName": "production",

    /**
     * Used by Babel to determine if the comment should remain.
     * 
     * If `config.removeEslintComments` is `true` (default), this will ignore
     * comments that contain `eslint` at the start (whitespace is ignored).
     * 
     * @param {String} comment A comment.
     */
    shouldPrintComment(comment) {
      if (!config.removeEslintComments) return true;
      return comment.trim().startsWith("eslint", 0) === false;
    },

    "plugins": plugins,
    "presets": presets
  };
}

module.exports = use;