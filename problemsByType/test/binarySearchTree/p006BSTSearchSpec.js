const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const assert = require('chai').assert;

const Node = require('../../src/binarySearchTree/Node.js');
const BSTSearch = require('../../src/binarySearchTree/p006BSTSearch.js');

describe('BSTSearch', () => {

  function testBSTSearch(search) {

    it('should return null if node with value is never found in BST', () => {
      //               10
      //       5              15
      //   4                      20
      let root = new Node(10, new Node(5), new Node(15));
      root.left.left = new Node(4);
      root.right.right = new Node(20);

      assert.isNull(search(root, 3));
    });

    it('should return a node with a value less than root', () => {
      //               10
      //       5              15
      //   4                      20
      let root = new Node(10, new Node(5), new Node(15));
      root.left.left = new Node(4);
      root.right.right = new Node(20);

      assert.equal(search(root, 4), root.left.left);
    });

    it('should return a node with a value greater than root', () => {
      //               10
      //       5              15
      //   4                      20
      let root = new Node(10, new Node(5), new Node(15));
      root.left.left = new Node(4);
      root.right.right = new Node(20);

      assert.equal(search(root, 20), root.right.right);
    });

    it('should return root if it matches value', () => {
      //               10
      //       5              15
      let root = new Node(10, new Node(5), new Node(15));

      assert.equal(search(root, 10), root);
    });

    it('should return the inorder node if duplicate values are found', () => {
      //               10
      //       5              15
      //   4              15      15
      //               15
      let root = new Node(10, new Node(5), new Node(15));
      root.left.left = new Node(4);
      root.right.right = new Node(15);
      root.right.left = new Node(15, new Node(15));

      assert.equal(search(root, 15), root.right.left.left);
    });

  };

  describe('iterative', () => {
    testBSTSearch(BSTSearch.iterative);
  });

  describe('recursive', () => {
    testBSTSearch(BSTSearch.recursive);
  });

});
