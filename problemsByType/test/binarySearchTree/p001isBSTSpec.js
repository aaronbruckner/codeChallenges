const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const assert = require('chai').assert;

const isBST = require('../../src/binarySearchTree/p001isBST.js');
const Node = require('../../src/binarySearchTree/Node.js');

describe('p1isBST', () => {

  describe('valid BSTs', () => {

    it('single node tree', () => {
      assert.isTrue(isBST(new Node(1)), 'should count single node as a BST');
    });

    it('root with only two children (3 nodes total) that maintain the BST property', () => {
      //              10
      //          5       15
      let root = new Node(10, new Node(5), new Node(15));

      assert.isTrue(isBST(root));
    });

    it('root with many children (3 nodes total) that maintain the BST property', () => {
      //               10
      //       5              15
      //   5       7      13      20
      // 3           8       14
      let root = new Node(10, new Node(5), new Node(15));
      // Left side
      root.left.left = new Node(5);
      root.left.right = new Node(7);
      root.left.right.right = new Node(8);
      root.left.left.left = new Node(3);
      // Right side
      root.right.right = new Node(20);
      root.right.left = new Node(13);
      root.right.left.right = new Node(14);

      assert.isTrue(isBST(root));
    });

    it('root with nodes that are all the same value', () => {
      //              1
      //          1       1
      //        1  1    1   1
      let root = new Node(1, new Node(1), new Node(1));
      root.left.left = new Node(1);
      root.left.right = new Node(1);
      root.right.left = new Node(1);
      root.right.right = new Node(1);

      assert.isTrue(isBST(root));
    });

  });

  describe('invalid BSTs', () => {

    it('should handle invalid node without failing', () => {
        assert.isFalse(isBST(), 'should treat undefined node as not a BST');
        assert.isFalse(isBST(null), 'should treat null node as not a BST');
    });

    it('root with invalid left child (left child is greater than root)', () => {
      //              10
      //          11      11
      let root = new Node(10, new Node(11), new Node(11));

      assert.isFalse(isBST(root));
    });

    it('root with invalid right child (right child is less than root)', () => {
      //              10
      //          5      9
      let root = new Node(10, new Node(5), new Node(9));

      assert.isFalse(isBST(root));
    });

    it('root with invalid right great grandchild', () => {
      //               10
      //       5              15
      //   2       7      13      20
      // 1                           19
      let root = new Node(10, new Node(5), new Node(15));
      root.left.left = new Node(2);
      root.left.right = new Node(7);
      root.left.left.left = new Node(1);

      root.right.right = new Node(20);
      root.right.right.right = new Node(19);
      root.right.left = new Node(13);

      assert.isFalse(isBST(root));
    });
  });

});
