const eqObjects = require('../eqObjects');
const assert = require('chai').assert;

describe("#eqObjects", () => {

  it("returns true when given { a: '1', b: '2' }, { b: '2', a: '1'}", () => {
    assert.equal(eqObjects({ a: '1', b: '2' }, { b: '2', a: '1'}), true);
  });

  it("returns true when given { c: '1', d: ['2', 3] }, { d: ['2', 3], c: '1' }", () => {
    assert.equal(eqObjects({ c: '1', d: ['2', 3] }, { d: ['2', 3], c: '1' }), true);
  });

  it("returns true when given { hair: 'black', location: 'victoria', nationality: 'american' }, { hair: 'blue', location: 'winnipeg', nationality: 'canadian' }", () => {
    assert.equal(eqObjects({ hair: 'black', location: 'victoria', nationality: 'american' }, { hair: 'blue', location: 'winnipeg', nationality: 'canadian' }), true);
  });
});


// TESTS
// const ab = { a: "1", b: "2" };
// const ba = { b: "2", a: "1" };
// assertEqual(eqObjects(ab,ba), true);

// const cd = { c: "1", d: ["2", 3] };
// const dc = { d: ["2", 3], c: "1" };
// assertEqual(eqObjects(cd, dc), true);

// const max = { hair: 'black', location: 'victoria', nationality: 'american'};
// const kasi = { hair: 'blue', location: 'winnipeg', nationality: 'canadian'};
// assertEqual(eqObjects(max, kasi), true);