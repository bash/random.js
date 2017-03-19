# 🎲 random.js

[![Build Status](https://travis-ci.org/bash/random.js.svg?branch=master)](https://travis-ci.org/bash/random.js)
[![codecov](https://codecov.io/gh/bash/random.js/branch/master/graph/badge.svg)](https://codecov.io/gh/bash/random.js)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)

A [deterministic random number](https://www.xkcd.com/221/) generator for node.    
This module has some important advantages over other modules:

- Only **25 bytes** in size (without gzip)!
- **O(1)** complexity
- **100%** test coverage

Install with:

```
npm i --save @rschmidmeister/random.js
```

Usage:

```
const random = require('@rschmidmeister/random.js')

console.log(random())
```
