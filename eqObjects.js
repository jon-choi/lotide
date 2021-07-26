/* eslint-disable no-unused-vars */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} === ${expected}`);
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
  // returns true if results above do not run
  return true;
};

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
        
        // checking primitive values
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

module.exports = eqObjects;

// TESTS
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab,ba), true);

// const abc = { a: "1", b: "2", c: "3" };
// assertEqual(eqObjects(ab,abc), false);


// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const cd2 = { c: "1", d: ["2", 3, 4] };
// assertEqual(eqObjects(cd, cd2), false);

// const max = { hair: 'black', location: 'victoria', nationality: 'american'};
// const kasi = { hair: 'blue', location: 'winnipeg', nationality: 'canadian'};
// assertEqual(eqObjects(max, kasi), true);