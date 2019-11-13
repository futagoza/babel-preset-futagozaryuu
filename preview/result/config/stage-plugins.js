"use strict"; // const ProposalFunctionBind = require( "@babel/plugin-proposal-function-bind" );
// We arrange the stage plugins here for easier readability

require("core-js/modules/es.array.iterator");

const stage = [// Stage 0
["@babel/plugin-proposal-function-bind"], // Stage 1
["@babel/plugin-proposal-export-default-from", "@babel/plugin-proposal-export-namespace-from", "@babel/plugin-proposal-do-expressions", ["@babel/plugin-proposal-pipeline-operator", {
  "proposal": "minimal"
}], "@babel/plugin-proposal-partial-application", "@babel/plugin-proposal-logical-assignment-operators"], // Stage 2
["@babel/plugin-proposal-function-sent", ["@babel/plugin-proposal-decorators", {
  "legacy": false,
  "decoratorsBeforeExport": true
}], "@babel/plugin-proposal-throw-expressions"], // Stage 3
["@babel/plugin-syntax-import-meta", "@babel/plugin-syntax-top-level-await", ["@babel/plugin-proposal-class-properties", {
  "loose": true
}], "@babel/plugin-proposal-private-methods", "@babel/plugin-proposal-numeric-separator", ["@babel/plugin-proposal-nullish-coalescing-operator", {
  "loose": false
}], ["@babel/plugin-proposal-optional-chaining", {
  "loose": false
}]]]; // Now we build the presets

const StagePlugins = [// Stage 0
[...stage[0], ...stage[1], ...stage[2], ...stage[3]], // Stage 1
[...stage[1], ...stage[2], ...stage[3]], // Stage 2
[...stage[2], ...stage[3]], // Stage 3
[...stage[3]]];
module.exports = StagePlugins;