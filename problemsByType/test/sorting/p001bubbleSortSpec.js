const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const assert = require('chai').assert;

const sortTests = require('./sortTests');
const bubbleSort = require('../../src/sorting/p001bubbleSort');

describe('bubble sort', () => {
  sortTests(bubbleSort);
});
