/**
* Traverses tree inorder and returns values.
*/
function inorderTraversal(node, order = []) {
  if (!node) {
    return order;
  }
  inorderTraversal(node.left, order);
  order.push(node.value);
  inorderTraversal(node.right, order)

  return order;
}

module.exports = inorderTraversal;
