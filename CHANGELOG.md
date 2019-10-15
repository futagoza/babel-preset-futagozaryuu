> See [commit history](https://github.com/futagoza/babel-preset-futagozaryuu/commits) for a full list of changes.<br>
> A list of change's for previous versions can be found at: [v1](https://github.com/futagoza/babel-preset-futagozaryuu/blob/master/docs/changelog-v1.md) | [v2](https://github.com/futagoza/babel-preset-futagozaryuu/blob/master/docs/changelog-v2.md)

<a name="3.2.2"></a>
## [v3.2.2](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v3.2.1...v3.2.2) (2019-10-15)

* Bumped some `"@babel/*` dependencies to versions `7.6.2`, `7.6.3` and `7.6.4`
* Fix support for browserslist via [@babel/preset-env](https://babeljs.io/docs/en/babel-preset-env.html)
* DEV: Dropped Travis CI, replacing it with GitHub Actions
* DEV: Bumped devDependencies: `@futagoza/eslint-config-node`, `core-js`, `eslint`
* DEV: Moved portions of [CHANGELOG.md](https://github.com/futagoza/babel-preset-futagozaryuu/blob/master/CHANGELOG.md) to [github.com/futagoza/babel-preset-futagozaryuu/docs](https://github.com/futagoza/babel-preset-futagozaryuu/tree/master/docs)

<a name="3.2.1"></a>
## [v3.2.1](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v3.2.0...v3.2.1) (2019-09-21)

* Use `require.resolve` instead of a custom resolve function
* Use the `pkg-up` module to find consumer's `package.json`
* DEV: Updated fixtures
* DEV: Fix `preview/generate-result.js`

<a name="3.2.0"></a>
## [v3.2.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v3.1.0...v3.2.0) (2019-09-20)

* Upgrade all `@babel/*` dependencies (The versions range from `7.2.0` to `7.6.0`)
* Updated `babel-plugin-module-resolver` dependency to `3.2.0`
* DEV: Replaced `es-runtime` with `@babel/runtime`, `core-js` and `regenerator-runtime`
* DEV: Updated `eslint` dependency to `6.4.0`
* DEV: Replaced `eslint-config-futagozaryuu` with `@futagoza/eslint-config-node`, `9.3.0`
* DEV: Updated `glob` dependency to `7.1.4`
* Updated `stage-*` plugin list, reflecting recent changes to both Babel and the ECMAScript proposals
* Added a note for using a string value for the `async` option
* DEV: Fix linting errors
* Added the `corejs` option (will be redirected to `@babel/preset-env`)
* Added a section in `README.md` for using the `useBuiltIns` option
* DEV: Updated fixtures
* Drop Support for Node 6
* DEV: Test on Node 12

<a name="3.1.0"></a>
## [v3.1.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v3.0.0...v3.1.0) (2018-10-05)

* Update some `@babel/*` dependencies to `~7.1.0`
* Use the [new decorators proposal](https://babeljs.io/blog/2018/09/17/decorators) via the `legacy: false` option
* Use `decoratorsBeforeExport: true` (see [tc39/proposal-decorators#69](https://github.com/tc39/proposal-decorators/issues/69))

<a name="3.0.0"></a>
## [v3.0.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v3.0.0-alpha.1...v3.0.0) (2018-08-28)

* Updated `@babel/*` dependencies to `7.0.0`
* Updated `README.md`; Updated blurb about the Babel version used
* Updated `README.md`; Use yellow badge for `CHANGELOG.md`
* Updated `README.md`; Updated link to `babel-preset-futagozaryuu/lib/config/default-options.js`
* Updated `README.md`; Added note to blurb about proposal plugins

<a name="3.0.0-alpha.1"></a>
## [v3.0.0-alpha.1](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v3.0.0-alpha.0...v3.0.0-alpha.1) (2018-08-27)

* Updated `@babel/*` dependencies to `7.0.0-beta.56`
* DEV: The script `preview-result` now runs the babel-cli (Local script has a N/A warning)
* DEV: Adjust `preview-ast` script to generate files in their respective directories

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
