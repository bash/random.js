# 🎲 random.js

[![Build Status](https://github.com/bash/random.js/workflows/Test/badge.svg)](https://github.com/bash/node-uname/actions)
[![Build status](https://ci.appveyor.com/api/projects/status/luxy1c20asdk08at?svg=true)](https://ci.appveyor.com/project/rschmidmeister/random-js)
[![Coverage Status](https://coveralls.io/repos/github/bash/random.js/badge.svg?branch=tooling)](https://coveralls.io/github/bash/random.js?branch=tooling)
[![Code Climate](https://codeclimate.com/github/bash/random.js/badges/gpa.svg)](https://codeclimate.com/github/bash/random.js)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)
[![NPM](https://img.shields.io/npm/v/@rschmidmeister/random.js.svg)](https://www.npmjs.com/package/@rschmidmeister/random.js)
[![dependencies Status](https://david-dm.org/bash/random.js/status.svg)](https://david-dm.org/bash/random.js)
[![devDependencies Status](https://david-dm.org/bash/random.js/dev-status.svg)](https://david-dm.org/bash/random.js?type=dev)
![gluten free](https://img.shields.io/badge/gluten-free-green.svg)


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
