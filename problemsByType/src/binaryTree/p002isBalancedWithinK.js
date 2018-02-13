'use strict';

/**
* Searches for node X where X's right and left subtrees differ by more than k nodes. All decendent nodes of
* X must be within k balanced for each of their respective subtrees. Otherwise null is returned if no nodes
* are more than k unbalanced.
*
* @param {Node} root - the root node of the tree to check.
* @param {number} k - the maximum allowable difference between left and right subtree node count.
* @return {Node} - the node unbalanced by more than k, otherwise null.
*/
function isBalancedWithinKWrapper(root, k) {
  // Returns final answer in proper format.
  return isBalancedWithinK(root, k).answer || null;
}

function isBalancedWithinK(node, k) {
  if (!node) {
    return {totalChildren: 0};
  }

  let leftSubtree = isBalancedWithinK(node.left, k);
  if (leftSubtree.answer) {
    return leftSubtree;
  }

  let rightSubtree = isBalancedWithinK(node.right, k);
  if (rightSubtree.answer) {
    return rightSubtree;
  }

  if (Math.abs(leftSubtree.totalChildren - rightSubtree.totalChildren) > k) {
    return {answer: node};
  }
  return {totalChildren: leftSubtree.totalChildren + rightSubtree.totalChildren + 1};
}

module.exports = isBalancedWithinKWrapper;
