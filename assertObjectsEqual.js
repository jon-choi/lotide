/* eslint-disable no-unused-vars */
const eqObjects = function(object1, object2) {
  // takes object keys and puts them into an array
  let oKey1 = Object.keys(object1);
  let oKey2 = Object.keys(object2);
  let result = true;

  // returns false if both object lengths are not equal
  if (oKey1.length !== oKey2.length) {
    result = false;
  } else {

    // time to loop through each key of oKey1(object1)
    for (const key of oKey1) {

      // checking for values that are actually arrays
      if (Array.isArray(object1[oKey1]) && Array.isArray(object2[oKey2])) {
        if (!eqArrays(object1[oKey1], object2[oKey2])) {
          result = false;
        } else {
          result = true;
        }
      } else {
        
        if (object1[oKey1] !== object2[oKey2]) {
          result = false;
        } else {
          result = true;
        }
      }
    }
  }
  return result;
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

const assertObjectsEqual = function(actual, expected) {
  const inspect = require('util').inspect;
  
  if (eqObjects(actual, expected)) {
    console.log(`✅ Assertion Passed: ${inspect(actual)} === ${inspect(expected)}`);
  } else {
    console.log(`❌ Assertion Failed: ${inspect(actual)} !== ${inspect(expected)}`);
  }
};

module.exports = assertObjectsEqual;

// TESTS
// assertObjectsEqual({ a: 1}, { a: 2});
// assertObjectsEqual({ a: 2}, { a: 2});

// let someone = {'name': 'delton'};
// let person = {'name': 'delton'};
// assertObjectsEqual(someone, person);

// someone = {'name': 'delton'};
// person = {'name': 'sara'};
// assertObjectsEqual(someone, person);