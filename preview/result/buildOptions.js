"use strict";

var _interopRequireDefault = require("@babel/runtime/helpers/interopRequireDefault");

exports.__esModule = true;
exports.default = buildOptions;

var _assign = _interopRequireDefault(require("@babel/runtime/core-js/object/assign"));

var _defaultOptions = _interopRequireDefault(require("./defaultOptions"));

var _util = require("./util");

/**
 * Build a valid options object that can be used to pass
 * options to other presets and/or plugins.
 *
 * @param {{}} _config
 */
function buildOptions(_config = {}) {
  const config = (0, _assign.default)({}, _defaultOptions.default, _config);
  let asyncOptions, envOptions, resolverOptions, runtimeOptions;
  if (typeof config.stage !== "number") config.stage = -1;
  envOptions = {
    "debug": !!config.debug,
    "include": (0, _util.castArray)(config.include),
    "exclude": (0, _util.castArray)(config.exclude),
    "loose": !!config.loose,
    "modules": config.modules,
    "spec": !!config.spec,
    "targets": {},
    "useBuiltIns": config.useBuiltIns,
    "forceAllTransforms": !!config.forceAllTransforms,
    "shippedProposals": !!config.shippedProposals
  };

  if (!config.disableResolver) {
    resolverOptions = {
      "alias": config.alias || _defaultOptions.default.alias,
      "cwd": config.cwd || _defaultOptions.default.cwd,
      "extensions": (0, _util.castArray)(config.extensions, _defaultOptions.default.extensions),
      "stripExtensions": (0, _util.castArray)(config.stripExtensions, _defaultOptions.default.stripExtensions),
      "root": (0, _util.castArray)(config.root, _defaultOptions.default.root),
      "transformFunctions": config.transformFunctions || config.importers,
      "resolvePath": config.resolvePath || config.resolver
    };
  }

  if (!config.regenerator) (0, _util.listOnce)(envOptions.exclude, "transform-regenerator");

  if (config.async) {
    const excludeIndex = envOptions.exclude.indexOf("transform-async-to-generator");
    let configAsync = config.async;
    (0, _util.listOnce)(envOptions.include, "transform-async-to-generator");
    if (excludeIndex !== -1) envOptions.exclude.splice(excludeIndex, 1);
    if (typeof configAsync === "object") asyncOptions = {
      "module": configAsync.module,
      "method": configAsync.method
    };else if (typeof configAsync === "string") {
      configAsync = configAsync.split(".");
      asyncOptions = {
        "module": configAsync[0],
        "method": configAsync.length > 1 ? configAsync.slice(1).join(".") : void 0
      };
    }
  }

  if (typeof config.runtime === "object" || typeof config.runtime === "string" || config.runtime === true) {
    runtimeOptions = {
      "helpers": true,
      "polyfill": true,
      "regenerator": true,
      "moduleName": typeof config.runtime === "string" ? config.runtime : void 0,
      "useBuiltIns": false,
      "useESModules": false
    };
    if (typeof config.runtime === "object") (0, _assign.default)(runtimeOptions, config.runtime);
  }

  if (!config.node && config.node !== false) {
    const engines = (0, _util.getPackage)(config.cwd || _defaultOptions.default.cwd).engines;
    config.node = engines && engines.node ? (0, _util.majorSemver)(String(engines.node)) : "current";
  }

  if (typeof config.node === "string" && config.node !== "current") {
    config.node = config.node.includes(".") ? parseFloat(config.node) : parseInt(config.node, 10);
  }

  _util.targets.forEach(target => {
    if (!config.hasOwnProperty(target)) return 0;

    if (config[target] !== false) {
      envOptions.targets[target] = config[target];
    }
  });

  return {
    async: asyncOptions,
    config,
    env: envOptions,
    resolver: resolverOptions,
    runtime: runtimeOptions
  };
}