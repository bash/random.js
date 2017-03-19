# 🎲 random.js

[![Build Status](https://travis-ci.org/bash/random.js.svg?branch=master)](https://travis-ci.org/bash/random.js)
[![codecov](https://codecov.io/gh/bash/random.js/branch/master/graph/badge.svg)](https://codecov.io/gh/bash/random.js)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)
[![NPM](https://img.shields.io/npm/v/@rschmidmeister/random.js.svg)](https://www.npmjs.com/package/@rschmidmeister/random.js)
[![dependencies Status](https://david-dm.org/bash/random.js/status.svg)](https://david-dm.org/bash/random.js)
[![devDependencies Status](https://david-dm.org/bash/random.js/dev-status.svg)](https://david-dm.org/bash/random.js?type=dev)
[![Bitcoin](https://img.shields.io/badge/bitcoin-donate-yellow.svg)](https://www.coinbase.com/rschmidmeister)


A [deterministic random number](https://www.xkcd.com/221/) generator for node.    
This module has some important advantages over other modules:

- Only **25 bytes** in size (without gzip)!
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
