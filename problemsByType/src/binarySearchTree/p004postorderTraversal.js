/**
* Traverses tree postorder and returns values.
*/
function postorderTraversal(node, order = []) {
  if (!node) {
    return order;
  }

  postorderTraversal(node.left, order);
  postorderTraversal(node.right, order);
  order.push(node.value);
  return order;
}

module.exports = postorderTraversal;
