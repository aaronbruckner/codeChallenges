const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const assert = require('chai').assert;

const sortTests = require('./sortTests');
const heapSort = require('../../src/sorting/p005heapSort');

describe('heap sort', () => {
  sortTests(heapSort);
});
