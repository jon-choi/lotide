/* eslint-disable no-empty */
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

const friends = ["max", "delton", "jesse", "kasi", "sara"];

const takeUntil = function(array, callback) {
  let results = [];

  for (let i = 0; i < array.length; i++) {
    if (callback(array[i])) {
      break;
    } else {
      results.push(array[i]);
    }
  }
  return results;
};

module.exports = takeUntil;


// TESTs
// const results3 = takeUntil(friends, x => x < 3);
// const results4 = takeUntil(friends, x => x > 3);

// assertArraysEqual((results3), ["max", "delton", "jesse"]); // fails
// console.log(results3);
// assertArraysEqual((results4), ["max", "delton", "jesse", "kasi", "sara"]); // passes
// console.log(results4);
