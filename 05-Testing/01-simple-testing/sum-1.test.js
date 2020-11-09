const { sum } = require('./sum');

let expected;
let actual;

expected = 4;
actual = sum(2, 2);
if (expected !== actual) {
  throw new Error('2 + 2 should be equal 4');
}

expected = 0;
actual = sum(0, 0);
if (expected !== actual) {
  throw new Error('0 + 0 should be equal 0');
}

expected = 0;
actual = sum(-1, 1);
if (expected !== actual) {
  throw new Error('-1 + 1 should be equal 0');
}

expected = 0;
actual = sum(1, -1);
if (expected !== actual) {
  throw new Error('1 + (-1) should be equal 0');
}
