'use strict';

/**
* Determines if the binary tree is symmetric.
* @param {Node} root - the root node of the tree to check.
* @return {boolean} - true if the tree is symmetric, false otherwise.
*/
function isSymmetricWrapper(root) {
  return isSymmetric(root.left, root.right);
}

function isSymmetric(a, b) {
  if (!a && !b) {
    return true;
  }
  if (!a || !b || a.value !== b.value) {
    return false;
  }

  return isSymmetric(a.left, b.right) && isSymmetric(a.right, b.left);
}

module.exports = isSymmetricWrapper;
