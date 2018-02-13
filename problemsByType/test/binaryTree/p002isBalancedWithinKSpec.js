const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const assert = require('chai').assert;

const isBalancedWithinK = require('../../src/binaryTree/p002isBalancedWithinK.js');
const Node = require('../../src/Node.js');

describe('isBalancedWithinK', () => {

  describe('within k balance', () => {

    it('a single root node', () => {
      let root = new Node(10);

      assert.isNull(isBalancedWithinK(root, 1));
    });

    it('a perfectly balanced tree', () => {
      //               10
      //       5              15
      //   4      3       2        20
      let root = new Node(10);
      root.left = new Node(5, new Node(4), new Node(3));
      root.right = new Node(15, new Node(2), new Node(20));

      assert.isNull(isBalancedWithinK(root, 0));
    });

    it('a tree with nodes matching K balance', () => {
      //               10
      //       5              15
      //   4      3       2        20
      // 1  2
      let root = new Node(10);
      root.left = new Node(5, new Node(4, new Node(1), new Node(2)), new Node(3));
      root.right = new Node(15, new Node(2), new Node(20));

      assert.isNull(isBalancedWithinK(root, 2));
    });

  });

  describe('outside k balance', () => {

    it('a tree with one node greater than k balance to the left', () => {
      //               10
      //       5              15
      //    4     3       2        20
      // 1    2                 22
      //3 9
      let root = new Node(10);
      root.left = new Node(5, new Node(4, new Node(1, new Node(3), new Node(9)), new Node(2)), new Node(3));
      root.right = new Node(15, new Node(2), new Node(20, new Node(22)));

      assert.deepEqual(isBalancedWithinK(root, 3), root.left);
    });

    it('a tree with one node greater than k balance to the right', () => {
      //               10
      //       5              15
      //   4      3       2        20
      // 1  2          1               21
      //                            8      7
      let root = new Node(10);
      root.left = new Node(5, new Node(4, new Node(1), new Node(2)), new Node(3));
      root.right = new Node(15, new Node(2, new Node(1)), new Node(20, null, new Node(21, new Node(8), new Node(7))));

      assert.deepEqual(isBalancedWithinK(root, 2), root.right.right);
    });

    it('a tree with multiple nodes greater than k balance', () => {
      //          10
      //       5     9
      //    4
      // 1
      let root = new Node(10, new Node(5, new Node(4, new Node(1))));

      assert.deepEqual(isBalancedWithinK(root, 1), root.left);
    });

  });

});
