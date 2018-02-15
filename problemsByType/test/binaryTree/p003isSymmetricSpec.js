const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const assert = require('chai').assert;

const isSymmetric = require('../../src/binaryTree/p003isSymmetric.js');
const Node = require('../../src/Node.js');

describe('isSymmetric', () => {

  describe('Symmetric trees', () => {

    it('a root with no children is always symmetric', () => {
      let root = new Node(10);

      assert.isTrue(isSymmetric(root));
    });

    it('a root with two children with matching values', () => {
      //        10
      //     5     5
      let root = new Node(10, new Node(5), new Node(5));

      assert.isTrue(isSymmetric(root));
    });

    it('a tree with multiple children that is symmetric', () => {
      //              10
      //     5                  5
      //  2     7           2       7
      //      8                   8
      let root = new Node(10);
      root.left = new Node(5, new Node(2), new Node(7, new Node(8)));
      root.right = new Node(5, new Node(2), new Node(7, new Node(8)));

      assert.isTrue(isSymmetric(root));
    });

  });

  describe('asymmetric trees', () => {

    it('a root with a single child', () => {
      let root = new Node(10, new Node(5));

      assert.isFalse(isSymmetric(root));
    });

    it('a root with two children that differ in value', () => {
      let root = new Node(10, new Node(5), new Node(6));

      assert.isFalse(isSymmetric(root));
    });

    it('a root with many children that have a symmetric structure but mismatching values', () => {
      //              10
      //     5                  5
      //        7                   7
      //      8                   7
      let root = new Node(10);
      root.left = new Node(5, null, new Node(7, new Node(8)));
      root.right = new Node(5, null, new Node(7, new Node(7)));

      assert.isFalse(isSymmetric(root));
    });

    it('a root with many children that have matching values but differ in tree strucutre', () => {
      //              10
      //     5                  5
      //  2     7            2     7
      //      8                  8   9
      let root = new Node(10);
      root.left = new Node(5, new Node(2), new Node(7, new Node(8)));
      root.right = new Node(5, new Node(2), new Node(7, new Node(8), new Node(9)));

      assert.isFalse(isSymmetric(root));
    });

  });

});
