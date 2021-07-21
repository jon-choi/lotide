const eqArrays = function(actual, expected) {
  // returns false if array lengths are not the same
  if (actual.length !== expected.length) {
    return false;
  }
  // returns false if elements are not the same
  for (let i = 0; i < actual.length; i++) {
    if (actual[i] !== expected[i]) {
      return false;
    }
  }
  // returns true if conditions above do not run
  return true;
}

const assertArraysEqual = function(array1, array2) {
  if (eqArrays(array1, array2)) {
    console.log(`✅ Assertion Passed: Everything looks good!`);
  } else {
    console.log(`❌ Assertion Failed: Everything looks bad!`)
  }
};

const without = (source, itemsToRemove) => {
  let output = Array.from(source);

  for (let i = 0; i < itemsToRemove.length; i++) {
    output = output.filter(item => item !== itemsToRemove[i]);
  }
  return output;
}
console.log(without([1, 2, 3, 4, 5], [2, 3]));

assertArraysEqual(without([1, 2, 3, 4, 5], [5, 4, 3, 2, 1]), [2]); // => [2, 3]
assertArraysEqual(without(["1", "2", "3"], [1, 2, "3"]), ['2', '1']); // => ["1", "2"]

const words = ["hello", "world", "lighthouse"];
without(words, ["lighthouse"]); // no need to capture return value for this test case
// Make sure the original array was not altered by the without function
assertArraysEqual(words, ["hello", "world", "lighthouse"]);