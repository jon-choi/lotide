const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} === ${expected}`);
  }
};

const tail = function(array) {
  let array1 = array.slice(1);
  return array1;
};

// Test Case: Check the original array
const words = ["Yo Yo", "Lighthouse", "Labs"];
tail(words); // no need to capture the return value since we are not checking it
assertEqual(words.length, 3); // original array should still have 3 elements!

const result = tail(["Hello", "Jonathan", "Choi"]);
assertEqual(result.length, 2); // ensure we get back two elements
assertEqual(result[0], "Jonathan"); // ensure first element is "Jonathan"
assertEqual(result[1], "Choi"); // ensure second element is "Choi"
