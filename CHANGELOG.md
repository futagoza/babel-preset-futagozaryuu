<a name="3.0.0-alpha.0"></a>
## [v3.0.0-alpha.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.19.0...v3.0.0-alpha.0) (2018-08-26)

* Updated license year (Should have done this back in `v2.15`)
* Dropped Support for Node.js v4
* DEV: Updated dependencies `eslint` and `eslint-config-futagozaryuu` to `5`
* Use `~` instead of `^` to lock dependencies to their minor versions
* Replace use of `@babel/preset-stage-*` plugins with built-in variant
* DEV: Moved source files to `lib`, rewriting each file as Node.js v6+ files
* Moved utility methods to separate files in [lib/util](./lib/util)
* Moved data/config to [lib/config](./lib/config)
* Exporting _only_ the preset now
* DEV: Moved the 'preset.preview' method to "[preview/preset](./preview/preset.js) > preview"
* DEV: Changed the test directory for the preview generators from `src` to `lib`
* Updated some JSDoc comments
* Updated `@babel/*` dependencies to `7.0.0-beta.46`
* DEV: Removed links to GitHub release's in CHANGELOG.md

<a name="2.19.0"></a>
## [v2.19.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.18.0...v2.19.0) (2018-04-13)

* Updated `@babel/*` dependencies to `7.0.0-beta.44`
* DEV: Updated `yarn.lock`
* DEV: Updated `src/.babelrc.js` used to generate lib
* Updated default value for option `extensions` consumed by `babel-plugin-module-resolver`
* Updated `README.md`; Updated section for VS Code users
* Updated `README.md`; Added section for versioning

<a name="2.18.0"></a>
## [v2.18.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.17.0...v2.18.0) (2018-03-24)

* Updated `@babel/*` dependencies to `7.0.0-beta.42`
* Updated dependency `es-runtime` to `^2.0.0`
* Updated dependency `eslint` to `^4.19.0`
* Updated dependency `eslint-config-futagozaryuu` to `^4.17.0`
* Set dependency `babel-plugin-module-resolver` to use patches by setting it to `^3.1.0`
* Set dependency `glob` to use patches by setting it to `^7.1.0`
* DEV: Lock dependencies using Yarn
* DEV: Test only the latest LTS versions of Node
* DEV: Cache yarn on CI
* Fixed support for Node.js v4 ([tleunen/babel-plugin-module-resolver#286](https://github.com/tleunen/babel-plugin-module-resolver/pull/286))
* DEV: Updated preview of babel config
* DEV: ignore any _*.log_ in the root directory

<a name="2.17.0"></a>
## [v2.17.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.16.0...v2.17.0) (2018-02-15)

* Updated `@babel/*` dependencies to `7.0.0-beta.40`
* DEV: Updated devDependency `eslint-config-futagozaryuu` to `>= 4.0.0`
* Updated dependency `babel-plugin-module-resolver` to `3.1.0`
* Update ESLint configurations
* DEV: Updated preview of babel config
* DEV: Added `preview/generate-ast.js` and `npm run preview-ast` to preview the AST
* DEV: Added currently generated AST to repository

<a name="2.16.0"></a>
## [v2.16.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.15.0...v2.16.0) (2018-01-18)

* Pull in optional dependencies for NPM v2 (installed with Node.js v4.0)
* Updated `@babel/*` dependencies to `7.0.0-beta.38`
* DEV: Don't ignore generated code when committing
* DEV: Add currently generated code to repository (should be easier finding some changes now)

<a name="2.15.0"></a>
## [v2.15.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.14.0...v2.15.0) (2018-01-11)

* Updated `@babel/*` dependencies to `7.0.0-beta.37`
* DEV: Updated devDependency `eslint-config-futagozaryuu` to `3.8.x`
* Re-introduce support for Node.js v4 (thanks to [es-runtime](https://www.npmjs.com/package/es-runtime))

<a name="2.14.0"></a>
## [v2.14.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.13.0...v2.14.0) (2017-12-16)

* Updated `@babel/*` dependencies to `7.0.0-beta.35`

<a name="2.13.0"></a>
## [v2.13.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.12.0...v2.13.0) (2017-12-12)

* Drop support for Node.js v4 (thank you [babel/babel#6755](https://github.com/babel/babel/pull/6755))
* Include the `scripts` folder in the NPM release
* README.md: Updated warnings and moved about
* DEV: Ignore temp folder (Git and ESLint)
* Updated `@babel/*` dependencies to `7.0.0-beta.34`
* DEV: Set minimum ESLint to v4.12
* DEV: Updated devDependency `eslint-config-futagozaryuu` to `3.7.x`
* Re-enable loose mode ([babel/babel#6805](https://github.com/babel/babel/issues/6805) was fixed by [babel/babel#6863](https://github.com/babel/babel/pull/6863))
* Removed temporary fix for [babel/babel#6759](https://github.com/babel/babel/issues/6759), was resolved by [babel/babel#6882](https://github.com/babel/babel/pull/6882)
* DEV: Remove ESLint comments from `lib/*.js` by using `shouldPrintComment()` in `src/.babelrc.js`
* Set "envName" as "production" by default, see [babel/babel#6834](https://github.com/babel/babel/pull/6834)

<a name="2.12.0"></a>
## [v2.12.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.11.0...v2.12.0) (2017-11-15)

* Set minimum Node.js to v4.2 ([@babel/babylon](https://github.com/babel/babel/tree/master/packages/babylon) requirement)
* Updated warning in `README.md` to explain use of `@babel/*` dependencies
* DEV: Updated comment's for the default options (VS Code can now find them)
* Renamed core `babel-*` dependencies to `@babel/*`
* Updated `@babel/*` dependencies to `7.0.0-beta.32`
* DEV: Change JSDoc type parameter for `object` to `{}` (why did I use it anyway?)
* Updated options for transforming `async` function's (accepts: `boolean | string | {}`)
* Replaced references to core `babel-*` dependencies with `@babel/*`
* Added support for the `shippedProposals` option passed to `@babel/preset-env`
* Added disabled option `spaced-comment` for ESLint in `src/defaultOptions.js`
* DEV: Added JSDoc's for properties on the returned object from `preset.use`
* DEV: Reformatted content in `src/preset.js`
* DEV: Updated plugins used in `src/.babelrc.js`
* Updated dependency `babel-plugin-module-resolver` from `3.0.0-beta.5` to `3.0.0`
* Added temporary fix for [babel/babel#6759](https://github.com/babel/babel/issues/6759) based on [babel/babel#6745](https://github.com/babel/babel/pull/6745)
* DEV: Added ignore file for ESLint (Required for VSCode/ESLint extension to work properly)
* Disabled loose mode (temporary fix for [babel/babel#6805](https://github.com/babel/babel/issues/6805))
* DEV: Removed `preversion` script (runs before `npm run version`)

<a name="2.11.0"></a>
## [v2.11.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.10.0...v2.11.0) (2017-10-19)

* Updated core `babel-*` dependencies to `7.0.0-beta.3`
* `babel-preset-env` now follow's versioning for `babel-*` dependencies
* DEV: Set minimum ESLint to v4.9
* DEV: Updated devDependency `eslint-config-futagozaryuu` from `3.5.x` to `3.6.x`
* DEV: Using `.babelrc.js` instead of `.babelrc`
* DEV: Lint `src/.*rc.js` as well, ensuring configuration files are linted
* DEV: Removed strict directives from configuration files

<a name="2.10.0"></a>
## [v2.10.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.9.0...v2.10.0) (2017-09-29)

* Updated core `babel-*` dependencies to `7.0.0-beta.2`
* Updated dependency `babel-preset-env` from `2.0.0-beta.0` to `2.0.0-beta.2`
* Update `config.runtime` option: Giving this option an object now extends my default options for it.

<a name="2.9.0"></a>
## [v2.9.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.8.0...v2.9.0) (2017-09-18)

* Updated core `babel-*` dependencies to `7.0.0-beta.0`
* Updated dependency `babel-preset-env` from `2.0.0-alpha.20` to `2.0.0-beta.0`
* DEV: Set minimum ESLint to v4.6
* DEV: Updated devDependency `eslint-config-futagozaryuu` from `>= 3.3.0` to `3.5.x`

<a name="2.8.0"></a>
## [v2.8.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.7.0...v2.8.0) (2017-08-31)

* Removed `devDependencies` badge in `README.md`
* Added `History` badge to `README.md`
* Updated dependency `babel-plugin-module-resolver` from `3.0.0-beta.4` to `3.0.0-beta.5`
* Added options for `react-native` that are consumed by `babel-plugin-module-resolver`
* Updated core `babel-*` dependencies to `7.0.0-alpha.20`
* DEV: Dropped CI support for non-LTS releases (Node.js v5 and Node.js v7)

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

<a name="2.6.0"></a>
## [v2.6.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.5.0...v2.6.0) (2017-08-04)

* Fix Stage 0 transformer(s) not included when putting `babel-preset-stage-0` before `babel-preset-env`
* Fix issues with targets (node being ignored and browser being included by default)
* Fix `package.json` finder so that node version is set by default
* Fix node version being `NaN` if it's value passed to this preset is `current`
* Add optional support for `babel-plugin-transform-runtime`

<a name="2.5.0"></a>
## [v2.5.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.4.0...v2.5.0) (2017-08-04)

* Updated core `babel-*` dependencies to `7.0.0-alpha.18`

<a name="2.4.0"></a>
## [v2.4.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.3.0...v2.4.0) (2017-07-28)

* Updated core `babel-*` dependencies to `7.0.0-alpha.17`

<a name="2.3.0"></a>
## [v2.3.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.3.0-alpha.2...v2.3.0) (2017-07-23)

* DEV: Updated devDependency `eslint` from `4.2.0` to `4.3.0`
* Updated most `babel-*` dependencies to `7.0.0-alpha.15`
* Updated dependency `babel-preset-env` from `2.0.0-alpha.12` to `2.0.0-alpha.15`
* Fix exporting built options (how did I not notice 😀)

<a name="2.3.0-alpha.2"></a>
## [v2.3.0-alpha.2](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.3.0-alpha...v2.3.0-alpha.2) (2017-07-17)

* Removed option `defaultNodeVersion`
* Set fallback version for Node.js to `current`
* Setting the `node` target to `false` should now disable it
* DEV: Updated devDependency `eslint` from `4.1.1` to `4.2.0`
* DEV: Updated devDependency `eslint-config-futagozaryuu` from `3.1.1` to `3.3.0`

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
* DEV: Cosmetic update's to some source files and `package.json`

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

<a name="2.1.0"></a>
## [v2.1.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v2.0.0...v2.1.0) (2017-05-06)

* Updated README.md: added version usage warning
* Renamed `preset.preset` to `preset.use`
* Added `param` tags in JSDoc block for `preset.use`
* Added preview functionality via api `preset.preview`
* Fixed linting warnings from ESLint
* Renamed and updated `babel-preset-futagozaryuu/test.js` to [babel-preset-futagozaryuu/preview.js](https://github.com/futagoza/babel-preset-futagozaryuu/blob/master/preview.js)

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

<a name="1.3.0"></a>
## [v1.3.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v1.2.0...v1.3.0) (2017-05-05)

* Added a changelog, [babel-preset-futagozaryuu/CHANGELOG.md](https://github.com/futagoza/babel-preset-futagozaryuu/blob/master/CHANGELOG.md)
* Added a new option (`options.defaultNodeVersion`), and set `options.node` as `null` by default.
* Fixed an error that was thrown when `options.node` was a `String`
* Added support for more targets to use with `babel-preset-env`
* Updated and cleaned README.md

<a name="1.2.0"></a>
## [v1.2.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v1.1.0...v1.2.0) (2017-05-02)

* Simplify the exclusion of `transform-async-to-module-method`
* Added options to select or disable `babel-preset-stage-*` plugins
* Fixed plugins not disabling, but not my oversight 😀

<a name="1.1.0"></a>
## [v1.1.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v1.0.0...v1.1.0) (2017-05-02)

* Updated README.md
* Added JSDoc block for `majorSemver` located in `src/util.js`
* Ensure a string is passed to `majorSemver` from `src/buildOptions.js`
* Fix `options.removeEslintComments` not working

<a name="1.0.0"></a>
## [v1.0.0](https://github.com/futagoza/babel-preset-futagozaryuu/commits/v1.0.0) (2017-05-02)

* Initial release.
