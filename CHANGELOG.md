<a name="2.0.0"></a>
## [v2.0.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v1.3.0...v2.0.0) (2017-05-06)

* Updated dependency `babel-preset-stage-0` from `6.24.1` to `7.0.0-alpha.9`
* Updated dependency `babel-preset-env` from `1.4.0` to `2.0.0-alpha.7`
* Updated dependency `babel-plugin-module-resolver` from `2.7.0` to `3.0.0-beta.0`
* Updated dependency `babel-plugin-transform-async-to-module-method` from `6.24.1` to `7.0.0-alpha.9`
* Updated devDependency `babel-cli` from `6.24.1` to `7.0.0-alpha.9`
* Selectively add targets for `babel-preset-env` based on whats passed to options
* Refacter some ES2015 module code
* Set travis to only build and run on the `master` branch
* Realeased: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v2.0.0

<a name="1.3.0"></a>
## [v1.3.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v1.2.0...v1.3.0) (2017-05-05)

* Added a changelog, [babel-preset-futagozaryuu/CHANGELOG.md](https://github.com/futagoza/babel-preset-futagozaryuu/blob/master/CHANGELOG.md)
* Added a new option (`options.defaultNodeVersion`), and set `options.node` as `null` by default.
* Fixed an error that was thrown when `options.node` was a `String`
* Added support for more targets to use with `babel-preset-env`
* Updated and cleaned README.md
* Realeased: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v1.3.0

<a name="1.2.0"></a>
## [v1.2.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v1.1.0...v1.2.0) (2017-05-02)

* Simplfy the exclusion of `transform-async-to-module-method`
* Added options to select or disable `babel-preset-stage-*` plugins
* Fixed plugins not disabling, but not my oversight 😀
* Realeased: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v1.2.0

<a name="1.1.0"></a>
## [v1.1.0](https://github.com/futagoza/babel-preset-futagozaryuu/compare/v1.0.0...v1.1.0) (2017-05-02)

* Updated README.md
* Added JSDoc block for `majorSemver` located in `src/util.js`
* Ensure a string is passed to `majorSemver` from `src/buildOptions.js`
* Fix `options.removeEslintComments` not working
* Realeased: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v1.1.0

<a name="1.0.0"></a>
## [v1.0.0](https://github.com/futagoza/babel-preset-futagozaryuu/commits/v1.0.0) (2017-05-02)

* Realeased: https://github.com/futagoza/babel-preset-futagozaryuu/releases/tag/v1.0.0
