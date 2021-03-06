const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const assert = require('chai').assert;

const Node = require('../../src/Node.js');
const inorderTraversal = require('../../src/binarySearchTree/p002inorderTraversal.js');

describe('inorderTraversal', () => {

  it('should return an array', () =>{
    assert.isArray(inorderTraversal(new Node(10)));
  });

  it('should return an empty array if node is invalid', () =>{
    assert.deepEqual(inorderTraversal(null), []);
  });

  describe('scenarios', () => {

    it('single root node with no children', () => {
      let root = new Node(10);
      let expectedOrder = [10];

      assert.deepEqual(inorderTraversal(root), expectedOrder);
    });

    it('root node with just a left child', () => {
      let root = new Node(10, new Node(5));
      let expectedOrder = [5, 10];

      assert.deepEqual(inorderTraversal(root), expectedOrder);
    });

    it('root node with just a right child', () => {
      let root = new Node(10, null, new Node(15));
      let expectedOrder = [10, 15];

      assert.deepEqual(inorderTraversal(root), expectedOrder);
    });

    it('root node with many children and grandchildren', () => {
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

      let expectedOrder = [3, 5, 5, 7, 8, 10, 13, 14, 15, 20];
      assert.deepEqual(inorderTraversal(root), expectedOrder);
    });

  });

});
