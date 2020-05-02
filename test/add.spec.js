/**
 * A test for Add
 */
//
// homemdade - assertion
// if (result === expected) {
//   console.log('test passes');
// } else {
//   throw new Error('test failed Expected 1+3 === 4');
// }
const add = require('../add');
// built in default assertions library from node.
const assert = require('assert');
const result = add(1, 3);
const expected = 5;
// assert.equal(result, expected, 'Add fn does not work properly');

// - mocha
describe('The add function', () => {
  it('adds two numbers', () => {
    const actual = add(1, 3);
    const expected = 4;
    assert.equal(actual, expected);
  });
});
