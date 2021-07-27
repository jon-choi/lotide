const countOnly = require('../countOnly');
const assert = require('chai').assert;

// TESTS
const firstNames = [
  "Karl",
  "Salima",
  "Agouhanna",
  "Fang",
  "Kavith",
  "Jason",
  "Salima",
  "Fang",
  "Joe"
];

// eslint-disable-next-line no-unused-vars
const result1 = countOnly(firstNames, { "Jason": true, "Karima": true, "Fang": true, "Agouhanna": false });

describe("#countOnly", () => {

  it("returns number of occurrences for each name when given names to count", () => {
    assert.deepEqual(countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true }).Jason, 1);
  });

  it("returns number of occurrences for each name when given names to count", () => {
    assert.deepEqual(countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true }).Karima, undefined);
  });

  it("returns number of occurrences for each name when given names to count", () => {
    assert.deepEqual(countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true }).Fang, 2);
  });

  it("returns number of occurrences for each name when given names to count", () => {
    assert.deepEqual(countOnly(firstNames, {'Jason': true, 'Karima': true, 'Fang': true }).Agouhanna, undefined);
  });
});