<a name="2.9.0"></a>
## [v2.9.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.8.0...v2.9.0) (2017-09-18)

* Updated core `babel-*` dependencies to `7.0.0-beta.0`
* Updated dependency `babel-preset-env` from `2.0.0-alpha.20` to `2.0.0-beta.0`
* DEV: Set minimum ESLint to v4.6
* DEV: Updated devDependency `eslint-config-futagozaryuu` from `>= 3.3.0` to `3.5.x`
* Released: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v2.9.0

<a name="2.8.0"></a>
## [v2.8.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.7.0...v2.8.0) (2017-08-31)

* Removed `devDependencies` badge in `README.md`
* Added `History` badge to `README.md`
* Updated dependency `babel-plugin-module-resolver` from `3.0.0-beta.4` to `3.0.0-beta.5`
* Added options for `react-native` that are consumed by `babel-plugin-module-resolver`
* Updated core `babel-*` dependencies to `7.0.0-alpha.20`
* DEV: Dropped CI support for non-LTS releases (Node.js v5 and Node.js v7)
* Released: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v2.8.0

<a name="2.7.0"></a>
## [v2.7.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.6.0...v2.7.0) (2017-08-12)

* Updated core `babel-*` dependencies to `7.0.0-alpha.19`
* DEV: Updated devDependency `eslint` from `4.3.0` to `>= 4.4.0`
* DEV: Changed devDependency `eslint-config-futagozaryuu` from `3.3.0` to `>= 3.3.0`
* DEV: Added `preview/generate-result.js` for `npm run preview-result`
* DEV: Added the `--runtime` flag to `preview-*` script commands
* DEV: Added devDependency `mkdirp v0.5.1` for `preview/generate-result.js`
* Updated `.babelrc` for the `npm run build` command
* Added `babel-polyfill` and `babel-runtime ` dependencies
* DEV: Update `npm run lint` command to include the new JavaScript file
* Released: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v2.7.0

<a name="2.6.0"></a>
## [v2.6.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.5.0...v2.6.0) (2017-08-04)

* Fix Stage 0 transformer(s) not included when putting `babel-preset-stage-0` before `babel-preset-env`
* Fix issues with targets (node being ignored and browser being included by default)
* Fix `package.json` finder so that node version is set by default
* Fix node version being `NaN` if it's value passed to this preset is `current`
* Add optional support for `babel-plugin-transform-runtime`
* Released: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v2.6.0

<a name="2.5.0"></a>
## [v2.5.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.4.0...v2.5.0) (2017-08-04)

* Updated core `babel-*` dependencies to `7.0.0-alpha.18`
* Released: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v2.5.0

<a name="2.4.0"></a>
## [v2.4.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.3.0...v2.4.0) (2017-07-28)

* Updated core `babel-*` dependencies to `7.0.0-alpha.17`
* Released: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v2.4.0

<a name="2.3.0"></a>
## [v2.3.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.3.0-alpha.2...v2.3.0) (2017-07-23)

* DEV: Updated devDependency `eslint` from `4.2.0` to `4.3.0`
* Updated most `babel-*` dependencies to `7.0.0-alpha.15`
* Updated dependency `babel-preset-env` from `2.0.0-alpha.12` to `2.0.0-alpha.15`
* Fix exporting built options (how did I not notice :D)
* Released: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v2.3.0

<a name="2.3.0-alpha.2"></a>
## [v2.3.0-alpha.2](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.3.0-alpha...v2.3.0-alpha.2) (2017-07-17)

* Removed option `defaultNodeVersion`
* Set fallback version for Node.js to `current`
* Setting the `node` target to `false` should now disable it
* DEV: Updated devDependency `eslint` from `4.1.1` to `4.2.0`
* DEV: Updated devDependency `eslint-config-futagozaryuu` from `3.1.1` to `3.3.0`
* Released: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v2.3.0-alpha.2

<a name="2.3.0-alpha"></a>
## [v2.3.0-alpha](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.2.0...v2.3.0-alpha) (2017-07-14)

* DEV: Fixed CHANGELOG.md: fixed link
* Removed use of `defaultOptions.modules` and `defaultOptions.useBuiltIns` in `src/buildOptions.js`
* Removed check on `config.useBuiltIns`, let `babel-plugin-module-resolver` confirm it's correctness
* Added option `config.transformFunctions` and it's alias `config.importers`
* DEV: Updated the description comment for the `config.regenerator` option in `src/defaultOptions.js`
* Changed default value for the option `config.alias` to `{}`
* Added the extension `.mjs` to the array set as the default for `config.extensions`
* Updated dependency `babel-plugin-module-resolver` from `3.0.0-beta.3` to `3.0.0-beta.4`
* Added option `config.resolvePath` and it's alias `config.resolver`
* DEV: Added `"files": [ "lib" ],` to `package.json` to only publish the `lib` directory
* DEV: Removed `.npmignore`, not required anymore
* DEV: Cosmetic update's to some source files and `package.json` 366f95ba34c778b500e6e78c5f725a92bcb10611
* Released: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v2.3.0-alpha

<a name="2.2.0"></a>
## [v2.2.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.1.0...v2.2.0) (2017-06-30)

* DEV: Fixed CHANGELOG.md: fixed spelling errors
* Updated most `babel-*` dependencies to `7.0.0-alpha.12`
* Updated dependency `babel-preset-env` from `2.0.0-alpha.7` to `2.0.0-alpha.12`
* Updated dependency `babel-plugin-module-resolver` from `3.0.0-beta.0` to `3.0.0-beta.3`
* DEV: Updated devDependency `eslint` from `3.19.0` to `4.1.1`
* DEV: Updated devDependency `eslint-config-futagozaryuu` from `2.2.0` to `3.1.1`
* Removed `config.uglify`, as `targets.uglify` has been deprecated.
* Updated option builder for `config.useBuiltIns`, as `useBuiltIns` can now also be a `String`.
* Added new option `config.forceAllTransforms`, see [babel/babel-preset-env/tree/2.0#forcealltransforms](https://github.com/babel/babel-preset-env/tree/2.0#forcealltransforms)
* Updated default options: `{ "useBuiltIns": "usage", "forceAllTransforms": false }`
* DEV: Added Node.js 8 support for travis
* Fix overwriting default options
* DEV: moved previews to 'preview/*' and updated scripts
* DEV: Updated ignored files
* Released: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v2.2.0

<a name="2.1.0"></a>
## [v2.1.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.0.0...v2.1.0) (2017-05-06)

* Updated README.md: added version usage warning
* Renamed `preset.preset` to `preset.use`
* Added `param` tags in JSDoc block for `preset.use`
* Added preview functionality via api `preset.preview`
* Fixed linting warnings from ESLint
* Renamed and updated `babel-preset-futagozaryuu/test.js` to [babel-preset-futagozaryuu/preview.js](https://github.com/futagoza/babel-preset-futagozaryuu/blob/master/preview.js)
* Released: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v2.1.0

<a name="2.0.0"></a>
## [v2.0.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v1.3.0...v2.0.0) (2017-05-06)

* Updated dependency `babel-preset-stage-0` from `6.24.1` to `7.0.0-alpha.9`
* Updated dependency `babel-preset-env` from `1.4.0` to `2.0.0-alpha.7`
* Updated dependency `babel-plugin-module-resolver` from `2.7.0` to `3.0.0-beta.0`
* Updated dependency `babel-plugin-transform-async-to-module-method` from `6.24.1` to `7.0.0-alpha.9`
* Updated devDependency `babel-cli` from `6.24.1` to `7.0.0-alpha.9`
* Selectively add targets for `babel-preset-env` based on what's passed to options
* Refractor some ES2015 module code
* Set travis to only build and run on the `master` branch
* Changed default option `config.cwd` from "process.cwd()" to `packagejson`
* Released: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v2.0.0

<a name="1.3.0"></a>
## [v1.3.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v1.2.0...v1.3.0) (2017-05-05)

* Added a changelog, [babel-preset-futagozaryuu/CHANGELOG.md](https://github.com/futagoza/babel-preset-futagozaryuu/blob/master/CHANGELOG.md)
* Added a new option (`options.defaultNodeVersion`), and set `options.node` as `null` by default.
* Fixed an error that was thrown when `options.node` was a `String`
* Added support for more targets to use with `babel-preset-env`
* Updated and cleaned README.md
* Released: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v1.3.0

<a name="1.2.0"></a>
## [v1.2.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v1.1.0...v1.2.0) (2017-05-02)

* Simplify the exclusion of `transform-async-to-module-method`
* Added options to select or disable `babel-preset-stage-*` plugins
* Fixed plugins not disabling, but not my oversight 😀
* Released: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v1.2.0

<a name="1.1.0"></a>
## [v1.1.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v1.0.0...v1.1.0) (2017-05-02)

* Updated README.md
* Added JSDoc block for `majorSemver` located in `src/util.js`
* Ensure a string is passed to `majorSemver` from `src/buildOptions.js`
* Fix `options.removeEslintComments` not working
* Released: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v1.1.0

<a name="1.0.0"></a>
## [v1.0.0](https://github.com/futagoza/babel-preset-futagozaryuu/commits/v1.0.0) (2017-05-02)

* Released: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v1.0.0
