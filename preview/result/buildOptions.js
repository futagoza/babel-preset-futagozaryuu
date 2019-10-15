"use strict";

require("core-js/modules/es.array.iterator");

const DefaultOptions = require("./config/default-options");

const EnvTargets = require("./config/env-targets");

const castArray = require("./util/castArray");

const listOnce = require("./util/listOnce");

const getPackage = require("./util/getPackage");

const majorSemver = require("./util/majorSemver");
/**
 * Build a valid options object that can be used to pass options to other presets and/or plugins.
 * 
 * @param {DefaultOptions} config The options for `babel-preset-futagozaryuu`
 */


function buildOptions(config = {}) {
  config = Object.assign({}, DefaultOptions, config);
  let asyncOptions, resolverOptions, runtimeOptions;
  if (typeof config.stage !== "number") config.stage = -1;
  const envOptions = {
    "debug": !!config.debug,
    "include": castArray(config.include),
    "exclude": castArray(config.exclude),
    "loose": !!config.loose,
    "modules": config.modules,
    "spec": !!config.spec,
    "targets": {},
    "useBuiltIns": config.useBuiltIns,
    "corejs": config.corejs,
    "forceAllTransforms": !!config.forceAllTransforms,
    "shippedProposals": !!config.shippedProposals,
    "configPath": void 0,
    "ignoreBrowserslistConfig": false
  };
  const browserslist = config.browserslist;
  if (!browserslist) envOptions.ignoreBrowserslistConfig = true;else if (typeof browserslist === "string") envOptions.configPath = browserslist;else if (typeof browserslist === "object") {
    envOptions.configPath = browserslist.configPath;
    envOptions.ignoreBrowserslistConfig = browserslist.ignoreBrowserslistConfig;
  }
  if (!config.disableResolver) resolverOptions = {
    "alias": config.alias || DefaultOptions.alias,
    "cwd": config.cwd || DefaultOptions.cwd,
    "extensions": castArray(config.extensions, DefaultOptions.extensions),
    "stripExtensions": castArray(config.stripExtensions, DefaultOptions.stripExtensions),
    "root": castArray(config.root, DefaultOptions.root),
    "transformFunctions": config.transformFunctions || config.importers,
    "resolvePath": config.resolvePath || config.resolver
  };
  if (!config.regenerator) listOnce(envOptions.exclude, "transform-regenerator");

  if (config.async) {
    const excludeIndex = envOptions.exclude.indexOf("transform-async-to-generator");
    let configAsync = config.async;
    listOnce(envOptions.include, "transform-async-to-generator");
    if (excludeIndex !== -1) envOptions.exclude.splice(excludeIndex, 1);

    if (typeof configAsync === "string") {
      configAsync = configAsync.split(".");
      asyncOptions = {
        "module": configAsync[0],
        "method": configAsync.length > 1 ? configAsync.slice(1).join(".") : void 0
      };
    } else if (typeof configAsync === "object") asyncOptions = {
      "module": configAsync.module,
      "method": configAsync.method
    };
  }

  if (config.runtime != null) {
    const opts = config.runtime;
    if (opts === true) runtimeOptions = {
      "corejs": false,
      "helpers": true,
      "regenerator": true,
      "useESModules": false
    };
    if (typeof opts === "object") Object.assign(runtimeOptions, opts);
  }

  if (!config.node && config.node !== false) {
    const engines = getPackage(config.cwd || DefaultOptions.cwd).engines;
    config.node = engines && engines.node ? majorSemver(String(engines.node)) : "current";
  }

  if (typeof config.node === "string" && !config.node.includes("current")) config.node = config.node.includes(".") ? parseFloat(config.node) : parseInt(config.node, 10);

  for (const target of EnvTargets) {
    if (!config.hasOwnProperty(target)) continue;

    if (config[target] !== false) {
      envOptions.targets[target] = config[target];
    }
  }

  return {
    async: asyncOptions,
    config,
    env: envOptions,
    resolver: resolverOptions,
    runtime: runtimeOptions
  };
}

module.exports = buildOptions;