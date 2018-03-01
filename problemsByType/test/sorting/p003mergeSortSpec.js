const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const assert = require('chai').assert;

const sortTests = require('./sortTests');
const mergeSort = require('../../src/sorting/p003mergeSort');

describe('merge sort', () => {
  sortTests(mergeSort);
});
