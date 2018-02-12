const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const assert = require('chai').assert;

const Node = require('../../src/binarySearchTree/Node.js');
const nextLargestValue = require('../../src/binarySearchTree/p007nextLargestValue.js');

describe('nextLargestValue', () => {

  it('should return null if search value is not found in BST', () => {
    //               10
    //       5              15
    //   4                      20
    let root = new Node(10, new Node(5), new Node(15));
    root.left.left = new Node(4);
    root.right.right = new Node(20);

    assert.isNull(nextLargestValue(root, 11));
  });

  it('should return null if value is found in BST but there isn\'t a larger value to return', () => {
    //               10
    //       5              15
    //   4                      20
    let root = new Node(10, new Node(5), new Node(15));
    root.left.left = new Node(4);
    root.right.right = new Node(20);

    assert.isNull(nextLargestValue(root, 20));
  });

  it('should return the root value if it\'s the next largest value', () => {
    //               10
    //       5              15
    //   4                      20
    let root = new Node(10, new Node(5), new Node(15));
    root.left.left = new Node(4);
    root.right.right = new Node(20);

    assert.equal(nextLargestValue(root, 5), 10);
  });

  it('should return the grandparent value if it\'s the next largest value', () => {
    //               10
    //       5              15
    //   3                      20
    // 2   4
    let root = new Node(10, new Node(5), new Node(15));
    root.left.left = new Node(3, new Node(2), new Node(4));
    root.right.right = new Node(20);

    assert.equal(nextLargestValue(root, 4), 5);
  });

  it('should find next largest value to the left of root', () => {
    //               10
    //       2               15
    //   0       7               20
    //-1      6     9
    //            8
    let root = new Node(10, new Node(2), new Node(15));
    root.left.left = new Node(0, new Node(-1));
    root.left.right = new Node(7, new Node(6), new Node(9, new Node(8)));
    root.right.right = new Node(20);

    assert.equal(nextLargestValue(root, 7), 8);
  });

  it('should find next largest value to the right of root', () => {
    //               10
    //       5              15
    //   4              14      20
    //                       19    25
    //                     17
    let root = new Node(10, new Node(5), new Node(15, new Node(14), new Node(20)));
    root.left.left = new Node(4);
    root.right.right.right = new Node(25);
    root.right.right.left = new Node(19, new Node(17));

    assert.equal(nextLargestValue(root, 15), 17);
  });

  it('should handle negative numbers', () => {
    //              -10
    //      -15              -1
    //  -20              -5      2
    //                      -2     3
    //                    -3
    let root = new Node(-10, new Node(-15, new Node(-20)), new Node(-1, new Node(-5), new Node(2)));
    root.right.right.right = new Node(3);
    root.right.left.right = new Node(-2, new Node(-3));

    assert.equal(nextLargestValue(root, -5), -3);
  });

  it('should handle duplicate values and find next largest value', () => {
    //               10
    //      10             10
    //  10     10     10        10
    //                              15
    //                           11
    let root = new Node(10, new Node(10, new Node(10), new Node(10)), new Node(10, new Node(10), new Node(10)));
    root.right.right.right = new Node(15, new Node(11));


    assert.equal(nextLargestValue(root, 10), 11);
  });
});
