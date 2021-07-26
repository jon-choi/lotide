const assertArraysEqual = require('./assertArraysEqual');

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

module.exports = middle;