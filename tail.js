// eslint-disable-next-line no-unused-vars
const assertEqual = require('./assertEqual');

const tail = function(array) {
  let array1 = array.slice(1);
  return array1;
};

module.exports = tail;
