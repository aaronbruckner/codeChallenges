const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const assert = require('chai').assert;

const sortTests = require('./sortTests');
const quickSort = require('../../src/sorting/p004quickSort');

describe('quick sort', () => {
  sortTests(quickSort);
});
