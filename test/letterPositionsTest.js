const letterPositions = require('../letterPositions');
const assert = require('chai').assert;

describe("#letterPositions", () => {

  it("returns [0] when given ('hello')", () => {
    assert.deepEqual(letterPositions('hello').h, [0]);
  });

  it("returns [2, 3] when given ('hello')", () => {
    assert.deepEqual(letterPositions('hello').l, [2, 3]);
  });

  it("returns [4] when given ('hello')", () => {
    assert.deepEqual(letterPositions('hello').o, [4]);
  });

  it("returns [1] when given ('hello')", () => {
    assert.deepEqual(letterPositions('hello').e, [1]);
  });
});


// assertArraysEqual(letterPositions('hello').h, [0]);
// assertArraysEqual(letterPositions('hello').l, [2, 3]);
// assertArraysEqual(letterPositions('hello').o, [4]);
// assertArraysEqual(letterPositions('hello').e, [1]);