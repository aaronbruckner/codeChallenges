const mocha = require('mocha');
const describe = mocha.describe;
const it = mocha.it;
const assert = require('chai').assert;

const Node = require('../../src/Node.js');
const nLargestValues = require('../../src/binarySearchTree/p008nLargestValues.js');

describe('nLargestValues', () => {

  it('should return array containing root if root has no children', () => {
    let root = new Node(10);

    assert.deepEqual(nLargestValues(root, 5), [10]);
  });

  it('should include all the nodes if the number of requested values is greater than the nodes in the BST', () => {
    //               10
    //       5              15
    //   4                      20
    let root = new Node(10, new Node(5), new Node(15));
    root.left.left = new Node(4);
    root.right.right = new Node(20);

    assert.deepEqual(nLargestValues(root, 10), [20, 15, 10, 5, 4]);
  });

  it('should find the n greatest values if there are more nodes than needed values', () => {
    //               10
    //       5              15
    //   4             14        25
    //                       17     30
    //                    17   18      35
    let root = new Node(10, new Node(5, new Node(4)), new Node(15, new Node(14), new Node(25)));
    root.right.right.right = new Node(30, null, new Node(35));
    root.right.right.left = new Node(17, new Node(17), new Node(18));

    assert.deepEqual(nLargestValues(root, 6), [35, 30, 25, 18, 17, 17]);
  });

});
