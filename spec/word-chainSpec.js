const wordChain = require('../src/word-chain');

describe('when trying to get from cat to dog', () => {
  it('using a filled dictionary', () => {
    const dictionary = ['cat', 'hat', 'hats', 'bats', 'mat', 'mats', 'at', 'bat', 'cog', 'cot', 'dog'];
    expect(wordChain('cat', 'dog', dictionary)).toEqual(['cat', 'cot', 'cog', 'dog']);
  });
  it('using []', () => {
    const dictionary = [];
    expect(wordChain('cat', 'dog', dictionary)).toEqual([]);
  });
});

describe('when using wordChain from nothing to nothing', () => {
  it('using emoty quotes', () => {
    const dictionary = ['cat', 'cog', 'cot', 'dog'];
    expect(wordChain('', '', dictionary)).toEqual([]);
  });
});
