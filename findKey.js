/* eslint-disable no-undef */
/* eslint-disable no-unused-vars */
const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} === ${expected}`);
  }
};

const findKey = function(object, callback) {
  for (let key of Object.keys(object)) {
    if (callback(object[key])) {
      return key;
    }
  }
};

const result = findKey({
  'jon': { teeth: 21 },
  'max': { teeth: 22 },
  'delton': { teeth: 5 },
  'jesse': { teeth: 21 },
  'kasi': { teeth: 22 },
  'sara': { teeth: 22 }
}, x => x.teeth === 5);

assertEqual((result), 'delton');

const result1 = findKey({
  'jon': { teeth: 21 },
  'max': { teeth: 22 },
  'delton': { teeth: 5 },
  'jesse': { teeth: 21 },
  'kasi': { teeth: 22 },
  'sara': { teeth: 22 }
}, x => x.teeth === 23);

assertEqual((result1), undefined);
console.log(result);
console.log(result1);

