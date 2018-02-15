'use strict';

/**
* Determines if the binary tree is symmetric.
* @param {Node} root - the root node of the tree to check.
* @return {boolean} - true if the tree is symmetric, false otherwise.
*/
function isSymmetricWrapper(root) {
  return isSymmetric(root.left, root.right);
}

function isSymmetric(leftNode, rightNode) {
  if (!leftNode && !rightNode) {
    return true;
  }
  if ((!leftNode && rightNode) || (!rightNode && leftNode)) {
    return false;
  }
  if (leftNode.value !== rightNode.value) {
    return false;
  }

  return isSymmetric(leftNode.left, rightNode.left) && isSymmetric(leftNode.right, rightNode.right);
}

module.exports = isSymmetricWrapper;
