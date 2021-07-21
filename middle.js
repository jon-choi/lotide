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

const middle = function(array) {
  let result = [];
  let midIndex;
  
  if (array.length >= 0 && array.length <= 2) {
    return result;

  } else if (array.length % 2 === 0) {
    midIndex = (((array.length) / 2) - 1);
    result.push(array[midIndex]);
    result.push(array[midIndex + 1]);

  } else if (array.length % 2 !== 0) {
    midIndex = ((array.length - 1) / 2);
    result.push(array[midIndex]);
  }

  return result;
};

assertArraysEqual(middle([1, 2]), []);
assertArraysEqual(middle([1, 2, 3]), [2]);
assertArraysEqual(middle([1, 2, 3, 4, 5]), [3]);
assertArraysEqual(middle([1, 2, 3, 4, 5, 6]), [3, 4]);