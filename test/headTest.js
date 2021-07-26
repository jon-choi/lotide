const assert = require('chai').assert;
const head = require('../head');

describe("#head", () => {
  it("returns 1 when given an array of [1, 2, 3]", () => {
    assert.strictEqual(head([1, 2, 3]), 1);
  });

  it("returns '5' when given an array of ['5']", () => {
    assert.strictEqual(head(['5']), '5');
  });
});