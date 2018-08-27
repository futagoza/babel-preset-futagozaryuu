[![Build status](https://api.travis-ci.org/futagoza/babel-preset-futagozaryuu.svg?branch=master)](https://travis-ci.org/futagoza/babel-preset-futagozaryuu)
[![npm version](https://img.shields.io/npm/v/babel-preset-futagozaryuu.svg)](https://www.npmjs.com/package/babel-preset-futagozaryuu)
[![dependencies](https://img.shields.io/david/futagoza/babel-preset-futagozaryuu.svg)](https://david-dm.org/futagoza/babel-preset-futagozaryuu)
[![History](https://img.shields.io/badge/history-CHANGELOG.md-yellow.svg)](https://github.com/futagoza/babel-preset-futagozaryuu/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

This is a Babel preset of other presets and plugins that I most commonly use.

> - From _v2.12_, this preset is using the `@babel/*` dependencies for Babel 7+
> - From _v3_ this preset is using the proposal plugins directly as Babel 7 dropped the stage presets

## installation

```bash
$ npm install --save-dev babel-preset-futagozaryuu
```

## usage

Put the following into your `.babelrc` file:

```js
{
    "presets": [ "futagozaryuu" ]
}
```

or on the CLI

```bash
$ babel src --out-dir lib --presets futagozaryuu
```

## configuration

You can see the complete list of options in [babel-preset-futagozaryuu/lib/config/default-options.js](https://github.com/futagoza/babel-preset-futagozaryuu/blob/master/lib/config/default-options.js).

```js
{
    "presets": [
        [ "futagozaryuu", {

            // set root directory for `babel-plugin-module-resolver`
            "disableResolver": false,
            "root": [ "src" ],

            // disable the use of `@babel/preset-stage-*` plugins
            // (anything not a number between 0 to 3 is the same)
            "stage": 4,

            // Target a spefic version of node
            // (alternative: `package.json#engines.node`)
            "node": 6,

            // Blacklisting the var/const transform
            "exclude": [ "transform-es2015-block-scoping" ],

            // Blacklisting ES Modules transpilation
            "modules": false,

            // re-enable the use of `regenerator`
            "regenerator": true

        } ]
    ]
}
```

## recommendation for vs code users

Adding the following files (and settings) will ensure that [VS Code](https://code.visualstudio.com/) can find your ES6+ files even if you are using [babel-plugin-module-resolver](https://www.npmjs.com/package/babel-plugin-module-resolver) to change the root path of your module lookups during transpile.

This is based on a comment in [tleunen/babel-plugin-module-resolver#92](https://github.com/tleunen/babel-plugin-module-resolver/issues/92#issuecomment-285755384) by [@jgoux](https://github.com/jgoux).

`.vscode/settings.json`:
```js
{
    "path-intellisense.mappings": {
        "/": "${workspaceRoot}/src"
    }
}
```

`src/jsconfig.json`:
```js
{
    "compilerOptions": {
        "baseUrl": "./",
    }
}
```

## versioning

I have tried to follow semver versioning, but from _v2.19_ I will follow these rules:

`2.18.0` = `RELEASE.REVISION.PATCH`

1. `RELEASE` is incremented each time a new major version of Babel is supported
2. `PATCH` is only incremented when
    - a bug is fixed
    - docs are updated between revisions
    - dependency updates between revisions
3. `REVISION` is incremented for all other changes
4. `PATCH` is reset when `REVISION` increments

## license

Copyright © 2017+ Futago-za Ryuu, https://github.com/futagoza<br />
Released under the MIT License, http://opensource.org/licenses/MIT
