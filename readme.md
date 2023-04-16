# 🎲 random.js

[![Build Status](https://github.com/bash/random.js/workflows/Test/badge.svg)](https://github.com/bash/random.js/actions)
[![Build status](https://ci.appveyor.com/api/projects/status/luxy1c20asdk08at?svg=true)](https://ci.appveyor.com/project/rschmidmeister/random-js)
[![Coverage Status](https://coveralls.io/repos/github/bash/random.js/badge.svg?branch=tooling)](https://coveralls.io/github/bash/random.js?branch=tooling)
[![Code Climate](https://codeclimate.com/github/bash/random.js/badges/gpa.svg)](https://codeclimate.com/github/bash/random.js)
[![Standard - JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](http://standardjs.com/)
[![NPM](https://img.shields.io/npm/v/@rschmidmeister/random.js.svg)](https://www.npmjs.com/package/@rschmidmeister/random.js)
![gluten free](https://img.shields.io/badge/gluten-free-green.svg)

A *deterministic random number* generator for node.    
This module has some important advantages over other modules:

- Only **400 bytes** in size (without gzip)!
- **O(1)** complexity
- **100%** test coverage

## Supported algorithms
* [Fair Dice Roll](https://www.xkcd.com/221/)
* [Dilbert Oracle](https://web.archive.org/web/20230305130209/https://dilbert.com/strip/2001-10-25)

## Installation

```bash
npm i --save @rschmidmeister/random.js
```

## Usage
```js
const { fairDiceRoll, dilbertOracle } = require('@rschmidmeister/random.js')
console.log(fairDiceRoll())
console.log(dilbertOracle())
```
