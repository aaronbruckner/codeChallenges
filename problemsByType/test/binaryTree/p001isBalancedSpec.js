const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const assert = require('chai').assert;

const isBalanced = require('../../src/binaryTree/p001isBalanced.js');
const Node = require('../../src/Node.js');

describe('isBalanced', () => {

  describe('balanced trees', () => {

    it('a single root node with no children', () => {
      let root = new Node(10);

      assert.isTrue(isBalanced(root));
    });

    it('a root with a left and right child', () => {
      let root = new Node(10, new Node(5), new Node (1));

      assert.isTrue(isBalanced(root));
    });

    it('a root with one child', () => {
      let root = new Node(10, new Node(5));

      assert.isTrue(isBalanced(root));
    });

    it('a root with a few children different in subtree height by no more than 1', () => {
      //               10
      //       5              15
      //   4      3       2        20
      // 1             4     6
      let root = new Node(10);
      root.left = new Node(5, new Node(4, new Node(1)), new Node(3));
      root.right = new Node(15, new Node(2, new Node(4), new Node(6)), new Node(20));

      assert.isTrue(isBalanced(root));
    });

    it('a BT that is balanced where the decendents have missing nodes', () => {
      //               10
      //       5              15
      //   4                      20
      let root = new Node(10, new Node(5), new Node(15));
      root.left.left = new Node(4);
      root.right.right = new Node(20);

      assert.isTrue(isBalanced(root));
    })

  });

  describe('unbalanced trees', () => {

    it('a root with a full left subtree but no right subtree', () => {
      //               10
      //       5
      //   4      3
      // 1
      let root = new Node(10);
      root.left = new Node(5, new Node(4, new Node(1)), new Node(3));

      assert.isFalse(isBalanced(root));
    });

    it('a root with a full right subtree but no left subtree', () => {
      //               10
      //                      15
      //                  2        20
      //               4     6

      let root = new Node(10);
      root.right = new Node(15, new Node(2, new Node(4), new Node(6)), new Node(20));

      assert.isFalse(isBalanced(root));
    });

    it('a root with balanced subtrees but one of the decendent nodes lacks balance', () => {
      //               10
      //       5              15
      //   4      3       2        20
      // 1             4     6
      //                   9
      let root = new Node(10);
      root.left = new Node(5, new Node(4, new Node(1)), new Node(3));
      root.right = new Node(15, new Node(2, new Node(4), new Node(6, new Node(9))), new Node(20));

      assert.isFalse(isBalanced(root));
    });

  });

});
