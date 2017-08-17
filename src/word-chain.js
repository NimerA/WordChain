/**
 * Returns the Diferrence in length between two strings
 * @param {string} a 
 * @param {string} b 
 */
function levenshteinDistance(a, b) {
  const matrix = [];

  let i;
  for (i = 0; i <= b.length; i += 1) {
    matrix[i] = [i];
  }

  let j;
  for (j = 0; j <= a.length; j += 1) {
    matrix[0][j] = j;
  }

  for (i = 1; i <= b.length; i += 1) {
    for (j = 1; j <= a.length; j += 1) {
      if (b.charAt(i - 1) === a.charAt(j - 1)) {
        matrix[i][j] = matrix[i - 1][j - 1];
      } else {
        matrix[i][j] = Math.min(matrix[i - 1][j - 1] + 1,
          Math.min(matrix[i][j - 1] + 1,
            matrix[i - 1][j] + 1));
      }
    }
  }
  return matrix[b.length][a.length];
}


/**
 * Return a list of words that differs a character
 * @param {string} source
 * @param {array} dictionary
 * @param {array} exceptions
 */
function getWords1CharDiff(source, exceptions, dictionary) {
  const words = [];
  dictionary.forEach((element) => {
    if (levenshteinDistance(source, element) === 1 && exceptions.indexOf(element) === -1) {
      words.push(element);
    }
  }, this);
  return words;
}

/**
 * Returns a chain of words from source to destiny with a one character difference
 * @param {string} source
 * @param {string} destination
 * @param {array} pchain
 * @param {array} dictionary
 */
function makeChain(source, destination, pchain, dictionary) {
  if (source === '' || destination === '') {
    return [];
  }

  let chain = [];
  chain = chain.concat(pchain);
  chain.push(source);
  if (source === destination) {
    return chain;
  }
  const candidates = getWords1CharDiff(source, chain, dictionary);
  for (let i = 0; i < candidates.length; i += 1) {
    const word = candidates[i];
    const result = makeChain(word, destination, chain, dictionary);
    if (result.length > 0) {
      return result;
    }
  }
  return [];
}

module.exports = function wordChain(source, destination, dictionary) {
  return makeChain(source, destination, [], dictionary);
};

console.log(makeChain('cat', 'dog', [], ['cat', 'hat', 'mat', 'dogs', 'bats', 'bat', 'cog', 'dog']));
