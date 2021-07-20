const assertEqual = function(actual, expected) {
  if (actual === expected) {
    console.log(`✅ Assertion Passed: ${actual} === ${expected}`);
  } else if (actual !== expected) {
    console.log(`❌ Assertion Failed: ${actual} === ${expected}`);
  }
};

assertEqual("Lighthouse", "Bootcamp");
assertEqual(1, 1);
assertEqual(1, 4);
assertEqual('hello', 'goodbye');
