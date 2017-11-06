[![Build status](https://api.travis-ci.org/futagoza/babel-preset-futagozaryuu.svg?branch=master)](https://travis-ci.org/futagoza/babel-preset-futagozaryuu)
[![npm version](https://img.shields.io/npm/v/babel-preset-futagozaryuu.svg)](https://www.npmjs.com/package/babel-preset-futagozaryuu)
[![dependencies](https://img.shields.io/david/futagoza/babel-preset-futagozaryuu.svg)](https://david-dm.org/futagoza/babel-preset-futagozaryuu)
[![History](https://img.shields.io/badge/history-CHANGELOG.md-orange.svg)](https://github.com/futagoza/babel-preset-futagozaryuu/blob/master/CHANGELOG.md)
[![License](https://img.shields.io/badge/license-mit-blue.svg)](https://opensource.org/licenses/MIT)

> ----------------------------------------------------------------------
> __WARNING:__
>
>  1. _v1_ of this plugin is for Babel 6, while _v2_ is for Babel 7
>  2. From _v2.12_ onwards, this module requires at least Node.js v4.2
> ----------------------------------------------------------------------

## about

This is a Babel preset of other presets and plugins that I most commonly use.

## installation

```bash
$ npm install --save-dev babel-preset-futagozaryuu
```

## usage

Put the following into your `.babelrc` file:

```js
{
  "presets": ["futagozaryuu"]
}
```

or on the CLI

```bash
$ babel src --out-dir lib --presets futagozaryuu
```

## configuration

You can see the complete list of options in [babel-preset-futagozaryuu/src/defaultOptions.js](https://github.com/futagoza/babel-preset-futagozaryuu/blob/master/src/defaultOptions.js).

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
            // (alternative 1: `package.json#engines.node`)
            // (last alternative: `options.defaultNodeVersion`)
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

Thanks to [@jgoux](https://github.com/jgoux) for this. For more information, see [tleunen/babel-plugin-module-resolver#92 (comment)](https://github.com/tleunen/babel-plugin-module-resolver/issues/92#issuecomment-285755384).

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
        "allowSyntheticDefaultImports": true,
        "baseUrl": "./",
        "experimentalDecorators": true,
        "noFallthroughCasesInSwitch": true,
        "target": "esnext"
    }
}
```

## license

Copyright © 2017 Futago-za Ryuu, https://github.com/futagoza<br />
Released under the MIT License, http://opensource.org/licenses/MIT
