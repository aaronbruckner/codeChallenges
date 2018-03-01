const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const assert = require('chai').assert;

function test(sort) {
  it('empty array', () => {
    let a = [];

    sort(a);

    assert.deepEqual(a, []);
  });

  it('single element', () => {
    let a = [10];

    sort(a);

    assert.deepEqual(a, [10]);
  });

  it('two misordered elements', () => {
    let a = [10, 5];

    sort(a);

    assert.deepEqual(a, [5, 10]);
  });

  it('three misordered elements', () => {
    let a = [10, 5, 6];

    sort(a);

    assert.deepEqual(a, [5, 6, 10]);
  });

  it('negative elements', () => {
    let a = [-5, -10, -1];

    sort(a);

    assert.deepEqual(a, [-10, -5, -1]);
  });

  it('duplicate elements', () => {
    let a = [2, 2, 2, 0, 0, 1, 1, 1, 0];

    sort(a);

    assert.deepEqual(a, [0, 0, 0, 1, 1, 1, 2, 2, 2]);
  });

  it('reversed array', () => {
    let a = [15, 14, 13, 12, 11, 10, 9, 8, 7, 6, 5, 4, 3, 2, 1, 0, -1];

    sort(a);

    assert.deepEqual(a, [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });

  it('large, in-order array', () => {
    let a = [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15];

    sort(a);

    assert.deepEqual(a, [-1, 0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15]);
  });

  it('large random array', () => {
    let a = [];
    let expectedResult = [];
    for (let i = 0; i < 5000; i++) {
      let num = Math.floor(Math.random() * 5000);
      a.push(num);
      expectedResult.push(num);
    }

    sort(a);

    expectedResult.sort((a, b) => {
      if (a < b) {
        return -1;
      }
      if (a > b) {
        return 1;
      }
      return 0;
    });
    for (let i = 0; i < expectedResult.length; i++) {
      if(expectedResult[i] !== a[i]) {
        throw new Error('Array was not sorted correctly');
      }
    }
  });
}

module.exports = test;
