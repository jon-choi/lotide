const findKeyByValue = require('../findKeyByValue');
const assert = require('chai').assert;

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};
const favouriteCuisinesByDish = {
  japanese: 'ramen',
  italian: 'fettucine alfredo',
  indian: 'butter chicken'
};

describe("#findKeyByValue", () => {

  it("returns 'drama' when given (bestTvShowsByGenre, 'The Wire')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'The Wire'), 'drama');
  });

  it("returns undefined when given (bestTVShowsByGenre, 'That 70s Show')", () => {
    assert.strictEqual(findKeyByValue(bestTVShowsByGenre, 'That 70s Show'), undefined);
  });

  it("returns 'japanese' when given (favouriteCuisinesByDish, 'ramen')", () => {
    assert.strictEqual(findKeyByValue(favouriteCuisinesByDish, 'ramen'), 'japanese');
  });

  it("returns 'indian' when given (favouriteCuisinesByDish, 'butter chicken')", () => {
    assert.strictEqual(findKeyByValue(favouriteCuisinesByDish, 'butter chicken'), 'indian');
  });

  it("returns 'undefined' when given (favouriteCuisinesByDish, 'poutine')", () => {
    assert.strictEqual(findKeyByValue(favouriteCuisinesByDish, 'poutine'), undefined);
  });
});







// TESTS
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);
// TESTS
// assertEqual(findKeyByValue(favouriteCuisinesByDish, 'ramen'), 'japanese');
// assertEqual(findKeyByValue(favouriteCuisinesByDish, 'butter chicken'), 'indian');
// assertEqual(findKeyByValue(favouriteCuisinesByDish, 'poutine'), 'undefined');