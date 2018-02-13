'use strict';

/**
* Checks to see if the binary tree is balanced (every node has a subtree depth that differs by no
* more than 1 between left and right).
*
* @param {Node} root - the root node of the tree to check.
* @return {boolean} - true if the tree is balanced, false otherwise.
*/
function isBalancedWrapper(root) {
  // Wrap final return to return a boolean instead of a depth.
  return isBalanced(root) !== false;
}

function isBalanced(node) {
  if (!node) {
    return 0;
  }

  let leftDepth = isBalanced(node.left);
  let rightDepth = isBalanced(node.right);

  if (leftDepth === false || rightDepth === false || Math.abs(leftDepth - rightDepth) > 1) {
    return false;
  }

  return Math.max(leftDepth, rightDepth) + 1;
}

module.exports = isBalancedWrapper;
