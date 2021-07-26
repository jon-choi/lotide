const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: Everything looks good!`);
  } else {
    console.log(`❌ Assertion Failed: Everything looks bad!`);
  }
};

const eqArrays = function(actual, expected) {
  // returns false if array lengths are not the same
  if (actual.length !== expected.length) {
    return false;
  }
  // returns false if elements are not the same
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  // returns true if conditions above do not run
  return true;
};


const words = ['i', 'am', 'spilling', 'my', 'spoon'];

const map = function(array, callback) {
  const results = [];

  for (let item of array) {
    results.push(callback(item));
  }
  return results;
};

module.exports = map;

//TESTS
// const results1 = map(words, word => word.length);
// assertArraysEqual((results1), [1, 2, 8, 2, 5]);

// const results2 = map(words, word => word.toUpperCase());
// assertArraysEqual((results2), ['I', 'AM', 'SPILLING', 'MY', 'SPOON']);

// const results3 = map(words, word => word[0]);
// assertArraysEqual((results3), ['i', 'a', 's', 'm', 's']);

// const fullPhrase = words.join(' ');
// console.log(fullPhrase);


