//
// tests for url queryStrings
//
const { parse, stringify } = require('../parse-stringify');

//const assert = require('assert');
// - mocha, nyc
// describe('the stringify fn', () => {
//   it('should stringify an obj into a valid query string', () => {
//     const actual = stringify({ by: 'kati-frantz' });
//     const expected = 'by=kati-frantz';

//     assert.equal(actual, expected, `Expect ${expected} got ${actual}`);
//   });
// });

// describe('the parse fn', () => {
//   it('should parse an valid query string into an object', () => {
//     const actual = parse('?by=kati-frantz');
//     const expected = { by: 'kati-frantz' };
//     console.log('actual', actual);

//     assert.deepEqual(actual, expected, `Expect ${expected} got ${actual}`);
//   });
// });

//
// - jest
describe('the stringify fn', () => {
  it('should stringify an obj into a valid query string', () => {
    const actual = stringify({ by: 'kati-frantz' });
    const expected = 'by=kati-frantz';

    expect(actual).toBe(expected);
  });
});

describe('the parse fn', () => {
  it('should parse an valid query string into an object', () => {
    const actual = parse('?by=kati-frantz');
    const expected = { by: 'kati-frantz' };

    // assert.deepEqual(actual, expected, `Expect ${expected} got ${actual}`);
    expect(actual).toEqual(expected);
  });
});
