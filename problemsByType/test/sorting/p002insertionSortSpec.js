const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const assert = require('chai').assert;

const sortTests = require('./sortTests');
const insertionSort = require('../../src/sorting/p002insertionSort');

describe('insertion sort', () => {
  sortTests(insertionSort);
});
