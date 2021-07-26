// const assertEqual = function(actual, expected) {
//   if (actual === expected) {
//     console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
//   } else if (actual !== expected) {
//     console.log(`❌ Assertion Failed: ${actual} === ${expected}`);
//   }
// };

// const countLetters = function(sentence) {
//   let letterCount = {};

//   for (const letter of sentence) {
//     if (letter !== ' ') {
//       if (letterCount[letter]) {
//         letterCount[letter] += 1;
//       } else {
//         letterCount[letter] = 1;
//       }
//     }
//   }
//   return letterCount;
// };
// console.log(countLetters('Is this going to work?'));

const countLetters = require('../countLetters');
const assert = require('chai').assert;

describe("#countLetters", () => {

  it("returns { I: 1, s: 2, t: 2, h: 1, i: 2, g: 2, o: 3, n: 1, w: 1, r: 1, k: 1, '?': 1 } when given the string 'Is this going to work?'", () => {
    assert.deepEqual(countLetters('Is this going to work?'), { I: 1, s: 2, t: 2, h: 1, i: 2, g: 2, o: 3, n: 1, w: 1, r: 1, k: 1, '?': 1 });
  });
});