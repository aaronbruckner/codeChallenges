'use strict';

/**
* Given the root node, this function determines if the resulting tree upholds the BST property
* (all nodes to the left are less than or equal to, all nodes to right are greater than or equal to).
*
* @param {Node} root - 
*/
function isBST(root) {
  if (!root) {
    return false;
  }
  return validateBST(root)
}

function validateBST(node) {
  if (!node) {
    return true;
  }
  if ((node.left && node.value < node.left.value) || (node.right && node.value > node.right.value)) {
    return false;
  }

  return validateBST(node.left) && validateBST(node.right);
}

module.exports = isBST;
