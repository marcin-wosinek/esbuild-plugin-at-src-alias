# esbuild-plugin-at-src-alias

[![npm](https://img.shields.io/npm/v/esbuild-plugin-at-src-alias.svg)](https://www.npmjs.com/package/esbuild-plugin-at-src-alias)

[esbuild](https://github.com/evanw/esbuild) plugin for @ alias to ./src.

Forked from & inspired by https://github.com/igoradamenko/esbuild-plugin-alias.

## Rationale

Vue cli generated projects works with @ pointing to ./src. Quick and dirty
solution to make them work in esbuild.

## Installation

```sh
npm install --save-dev esbuild-plugin-at-src-alias
```


## Usage

Define plugin in the `plugins` section of esbuild config like this:

```js
const esbuild = require('esbuild');
const alias = require('esbuild-plugin-at-src-alias');

esbuild.build({
  // ...
  plugins: [
    alias(),
  ],
})
```

## Example

Having this input file:

```js
// src/app.js
import settings from '@/config/settings';

console.log(settings);
```

And esbuild config like this:

```js
// config/build.js
const path = require('path');
const esbuild = require('esbuild');
const alias = require('esbuild-plugin-at-src-alias');

esbuild.build({
  entryPoints: ['in.js'],
  bundle: true,
  outfile: 'out.js',
  plugins: [
    alias(),
  ],
}).catch(err => process.exit(1));
```

You will get `src/config/settings.js` loaded.

Check [test/](test) for more detailed example.
