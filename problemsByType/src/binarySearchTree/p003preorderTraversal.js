/**
* Traverses tree preorder and returns values.
*/
function preorderTraversal(node, order = []) {
  if (!node) {
    return order;
  }

  order.push(node.value);
  preorderTraversal(node.left, order);
  preorderTraversal(node.right, order);
  return order;
}

module.exports = preorderTraversal;
