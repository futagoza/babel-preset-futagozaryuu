"use strict";

exports.__esModule = true;
exports.default = preview;

var _preset = require("./preset");

var _core = require("@babel/core");

/**
 * Returns an object containing what to expect from this preset:
 *
 * * `options` The object passed to this function
 * * `preset` The generated options when this preset is used
 * * `babel` The options generated by babel with only this preset
 *
 * @param {{}} [options]
 */
function preview(options) {
  var preset = (0, _preset.use)(null, options);
  var babel = (0, _core.loadOptions)(preset);
  return {
    options,
    preset,
    babel
  };
}