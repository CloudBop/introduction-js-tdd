const assert = require('assert');
// async testing
const { findUserById, findUserByEmail } = require('../users');
//
describe('findUserByEmail fn ', () => {
  // method 1
  // pass callback to stop assertion from completing, unless exceeds 2000ms in which case Mocha errors
  it('finds a user by email', done => {
    //
    // const actual = findUserByEmail('bahcoder@gmail.com');
    findUserByEmail('bahcoder@gmail.com').then(response => {
      //
      const expected = response.message;
      //
      assert.equal(expected, 'User found successfully');
      done();
    });
  });
  // method 2
  it('finds user by email (using return promuse', () => {
    return findUserByEmail('bahcoder@gmail.com').then(response => {
      assert.equal(response.message, 'User found successfully');
    });
  });
  // method 3
  it('finds user by email (using aysnc/await)', async () => {
    const response = await findUserByEmail('bahcoder@gmail.com');

    assert.equal(response.message, 'User found successfully');
  });
});
