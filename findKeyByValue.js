const assertEqual = require('./assertEqual');

const findKeyByValue = function(object, value) {
  for (let key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
};

module.exports = findKeyByValue;

// TESTS
// const bestTVShowsByGenre = {
//   sciFi: "The Expanse",
//   comedy: "Brooklyn Nine-Nine",
//   drama:  "The Wire"
// };

// TESTS
// assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
// assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);

// TESTS
// const favouriteCuisinesByDish = {
//   japanese: 'ramen',
//   italian: 'fettucine alfredo',
//   indian: 'butter chicken'
// };

// TESTS
// assertEqual(findKeyByValue(favouriteCuisinesByDish, 'ramen'), 'japanese');
// assertEqual(findKeyByValue(favouriteCuisinesByDish, 'butter chicken'), 'indian');
// assertEqual(findKeyByValue(favouriteCuisinesByDish, 'poutine'), 'undefined');