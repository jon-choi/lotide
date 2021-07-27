const flatten = require('../flatten');
const assert = require('chai').assert;

describe("flatten", () => {

  it("returns [1, 2, 4, 5, 3] when given array [1, 2, [4, 5], 3]", () => {
    assert.deepEqual(flatten([1, 2, [4, 5], 3]), [1, 2, 4, 5, 3]);
  });
});



// TEST
// assertArraysEqual(flatten([1, 2, [4, 5], 3]), [1, 2, 4, 5, 3]);