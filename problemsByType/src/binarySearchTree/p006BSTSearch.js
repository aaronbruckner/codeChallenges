/**
* BST search using an interative method.
*
* @param root - the root of the BST.
* @param value - the value searched for.
* @returns {Node} - the inorder node that contains the value in the BST, otherwise null.
*/
function iterative(root, value) {
  let node = root;
  while (node) {
    if (node.value === value && !(node.left && node.left.value === value)) {
      return node;
    }
    node = value <= node.value ? node.left : node.right;
  }
  return null;
}

/**
* BST search using a recursive method.
*
* @param root - the root of the BST.
* @param value - the value searched for.
* @returns {Node} - the inorder node that contains the value in the BST, otherwise null.
*/
function recursive(root, value) {

}

module.exports.iterative = iterative;
module.exports.recursive = recursive;
