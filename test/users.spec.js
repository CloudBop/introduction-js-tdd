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
  // test rejected promise...
  // perhaps easiest with returning promise
  it('rejects with error is user not found (using return promise)', () => {
    return findUserByEmail('x@y.com').then(
      () => {
        assert.fail('Expected findUserByEmail fn to reject');
      },
      error => {
        assert.equal(error.message, 'User with email: x@y.com was not found');
      }
    );
  });
  //
  //
  //
  it('finds user by id (using aysnc/await)', async () => {
    const response = await findUserById(1);

    assert.equal(response.message, 'User found successfully');
  });
  //
  it('rejects with error is user not found (using return promise)', () => {
    return findUserById(6).then(
      () => {
        assert.fail('Expected findUserByEmail fn to reject');
      },
      error => {
        assert.equal(error.message, 'User with id: 6 was not found');
      }
    );
  });
});
