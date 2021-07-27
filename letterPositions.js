const assertObjectsEqual = require('./assertObjectsEqual');


const letterPositions = function(sentence) {
  const results = {};
  let position = 0;

  for (const letter of sentence) {
    if (letter !== ' ') {
      if (results[letter]) {
        results[letter].push(position);
      } else {
        results[letter] = [];
        results[letter].push(position);
      }
    }
    position++;
  }
  return results;
};

module.exports = letterPositions;

// TESTS
// console.log(letterPositions('lighthouse in the house'));
// assertArraysEqual(letterPositions('hello').h, [0]);
// assertArraysEqual(letterPositions('hello').l, [2, 3]);
// assertArraysEqual(letterPositions('hello').o, [4]);
// assertArraysEqual(letterPositions('hello').e, [1]);