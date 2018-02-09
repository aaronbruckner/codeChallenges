const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const assert = require('chai').assert;

const Node = require('../../src/binarySearchTree/Node.js');
const lowestCommonAncestor = require('../../src/binarySearchTree/p005lowestCommonAncestor.js');

describe('lowestCommonAncestor', () => {

  it ('should return null if no LCA is ever found (invalid nodes were provided)', () => {
    let root = new Node(10, new Node(5), new Node(15));

    assert.isNull(lowestCommonAncestor(new Node(20), new Node(25), root));
  });

  describe('scenarios', () => {

    it('two nodes sharing a LCA that is root', () => {
      let root = new Node(10, new Node(5), new Node(15));

      assert.equal(lowestCommonAncestor(root.left, root.right, root), root);
    });

    it('two nodes where root is LCA but root is not either of the nodes parent', () => {
      //               10
      //       5              15
      //   4                      20
      let root = new Node(10, new Node(5), new Node(15));
      root.left.left = new Node(4);
      root.right.right = new Node(20);

      assert.equal(lowestCommonAncestor(root.left.left, root.right.right, root), root);
    });

    it ('two nodes that share a LCA to the left of root', () => {
      //               10
      //       5              15
      //   3                      20
      // 1   4
      let root = new Node(10, new Node(5), new Node(15));
      let nodeA = new Node(1);
      let nodeB = new Node(4);
      root.left.left = new Node(3, nodeA, nodeB);
      root.right.right = new Node(20);

      assert.equal(lowestCommonAncestor(nodeA, nodeB, root), root.left.left);
    });

    it('two nodes that share a LCA to the right of root', () => {
      //               10
      //       5              15
      //   3                      20
      //                       17    22
      let root = new Node(10, new Node(5), new Node(15));
      let nodeA = new Node(17);
      let nodeB = new Node(22);
      root.left.left = new Node(3);
      root.right.right = new Node(20, nodeA, nodeB);

      assert.equal(lowestCommonAncestor(nodeA, nodeB, root), root.right.right);
    });

    it('two nodes with a LCA, first node\'s value is greater than second node', () => {
      //               10
      //       5              15
      //   3                      20
      //                       17
      //                     16 18
      let root = new Node(10, new Node(5), new Node(15));
      let nodeA = new Node(16);
      let nodeB = new Node(18);
      root.left.left = new Node(3);
      root.right.right = new Node(20, new Node(17, nodeA, nodeB));

      assert.equal(lowestCommonAncestor(nodeB, nodeA, root), root.right.right.left);
    });

  });

});
