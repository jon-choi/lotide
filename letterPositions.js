const eqArrays = function(actual, expected) {
  if (actual.length !== expected.length) {
    return false;
  }
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  return true;
};

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: Everything looks good!`);
  } else {
    console.log(`❌ Assertion Failed: Everything looks bad!`);
  }
};


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