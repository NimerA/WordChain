#!/usr/bin/env node

/**
 * @fileoverview Main CLI that is run via the word-chain command.
 * @author Nimer Ennabe
 */

/* eslint no-console:off */

// const wordChain = require('../src/word-chain.js');

const fs = require('fs');
const path = require('path');
const wordChain = require('../src/word-chain.js');

const es = fs.readFileSync(path.join(__dirname, '../Languages/es.txt')).toString().split('\n');

const from = process.argv[2];
const to = process.argv[3];
console.log('From: ', from, ' To: ', to, 'CALMA!');
console.log(wordChain(from, to, es));
