# 🎲 random.js

[![Build Status](https://travis-ci.org/bash/random.js.svg?branch=master)](https://travis-ci.org/bash/random.js)
[![Build status](https://ci.appveyor.com/api/projects/status/luxy1c20asdk08at?svg=true)](https://ci.appveyor.com/project/rschmidmeister/random-js)
[![codecov](https://codecov.io/gh/bash/random.js/branch/master/graph/badge.svg)](https://codecov.io/gh/bash/random.js)
[![Code Climate](https://codeclimate.com/github/bash/random.js/badges/gpa.svg)](https://codeclimate.com/github/bash/random.js)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)
[![NPM](https://img.shields.io/npm/v/@rschmidmeister/random.js.svg)](https://www.npmjs.com/package/@rschmidmeister/random.js)
[![dependencies Status](https://david-dm.org/bash/random.js/status.svg)](https://david-dm.org/bash/random.js)
[![devDependencies Status](https://david-dm.org/bash/random.js/dev-status.svg)](https://david-dm.org/bash/random.js?type=dev)
[![Bitcoin](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://www.coinbase.com/rschmidmeister)
![gluten-free](https://img.shields.io/badge/gluten-free-green.svg)


A [deterministic random number](https://www.xkcd.com/221/) generator for node.    
This module has some important advantages over other modules:

- Only **82 bytes** in size (without gzip)!
- **O(1)** complexity
- **100%** test coverage

Install with:

```bash
npm i --save @rschmidmeister/random.js
```

Usage:

```js
const random = require('@rschmidmeister/random.js')

console.log(random())
```
