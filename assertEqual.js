const assertEqual = function(actual, expected) {
  if (actual + expected === true) {
    console.log("✅ Assertion Passed: 1 === 1");
  } else {
    console.log("❌ Assertion Failed: Lighthouse Labs !== Bootcamp");
  }
};

assertEqual("Lighthouse", "Bootcamp");
assertEqual(1, 1);
