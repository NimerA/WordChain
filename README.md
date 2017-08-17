# Word Chain [![Build Status](https://travis-ci.com/NimerA/WordChain.svg?token=XU7jeERUtz3KqArrdsEp&branch=master)](https://travis-ci.com/NimerA/WordChain)


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