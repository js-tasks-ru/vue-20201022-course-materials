const { sum } = require('./sum');
const assert = require('assert');

let expected;
let actual;

expected = 4;
actual = sum(2, 2);
assert.strictEqual(actual, expected);

expected = 0;
actual = sum(0, 0);
assert.strictEqual(actual, expected);

expected = 0;
actual = sum(-1, 1);
assert.strictEqual(actual, expected);

expected = 0;
actual = sum(1, -1);
assert.strictEqual(actual, expected);
