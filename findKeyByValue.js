const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} === ${expected}`);
  }
};

const findKeyByValue = function(object, value) {
  for (let key of Object.keys(object)) {
    if (object[key] === value) {
      return key;
    }
  }
};

const bestTVShowsByGenre = {
  sciFi: "The Expanse",
  comedy: "Brooklyn Nine-Nine",
  drama:  "The Wire"
};

assertEqual(findKeyByValue(bestTVShowsByGenre, "The Wire"), "drama");
assertEqual(findKeyByValue(bestTVShowsByGenre, "That '70s Show"), undefined);


const favouriteCuisinesByDish = {
  japanese: 'ramen',
  italian: 'fettucine alfredo',
  indian: 'butter chicken'
};

assertEqual(findKeyByValue(favouriteCuisinesByDish, 'ramen'), 'japanese');
assertEqual(findKeyByValue(favouriteCuisinesByDish, 'butter chicken'), 'indian');
assertEqual(findKeyByValue(favouriteCuisinesByDish, 'poutine'), 'undefined');