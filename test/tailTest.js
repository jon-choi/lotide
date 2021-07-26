const assert = require('chai').assert;
const tail = require('../tail');

describe("#tail", () => {

  it("returns ['Lighthouse', 'Labs'] for ['Yo Yo', 'Lighthouse', 'Labs']", () => {
    assert.deepEqual(tail(['Yo Yo', 'Lighthouse', 'Labs']), ['Lighthouse', 'Labs']);
  });

  it("returns ['Hello', 'Jonathan', 'Choi'] for ['Jonathan', 'Choi']", () => {
    assert.deepEqual(tail(['Hello', 'Jonathan', 'Choi']), ['Jonathan', 'Choi']);
  });
});
