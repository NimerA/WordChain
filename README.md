[![NPM version][npm-image]][npm-url]
[![Build Status][travis-image]][travis-url]

# Word Chain 

A Simple implementation of the Word Chain game using backtracking. 

## Install

```
$ npm install --save word-chain
```


## Usage

```js
const wordChain = require('word-chain');

const dictionary = ['cat', 'hat', 'hats', 'bats', 'mat', 'mats', 'at', 'bat', 'cog', 'cot', 'dog'];

const result = wordChain('cat', 'dog', dictionary);
//=> ['cat', 'cot', 'cog', 'dog']
```


[npm-image]: https://img.shields.io/npm/v/word-chain.svg
[npm-url]: https://www.npmjs.com/package/word-chain
[travis-image]: https://travis-ci.com/NimerA/WordChain.svg?token=XU7jeERUtz3KqArrdsEp&branch=master
[travis-url]: https://travis-ci.com/NimerA/WordChain