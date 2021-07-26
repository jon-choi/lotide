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

const flatten = (array) => {
  let result = [];

  for (let i = 0; i < array.length; i++) {
    if (!Array.isArray(array[i])) {
      result.push(array[i]);
    } else if (Array.isArray(array[i])) {
      let temp = array[i];
      for (let j = 0; j < temp.length; j++) {
        result.push(temp[j]);
      }
    }
  }
  return result;
};

module.exports = flatten;

// TEST
// assertArraysEqual(flatten([1, 2, [4, 5], 3]), [1, 2, 4, 5, 3]);