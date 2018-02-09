/**
* Specialized lowest common ancestor solution for BSTs. Trees must have unique values.
* Runs in O(h) where h is tree height. This is very similar to a modified binary search.
*/
function lowestCommonAncestor(nodeA, nodeB, root) {
  let node = root;
  let min = Math.min(nodeA.value, nodeB.value);
  let max = Math.max(nodeA.value, nodeB.value);
  while (!(node.value > min && node.value < max)) {
    node = node.value > max ? node.left : node.right;
    if (!node) {
      return null;
    }
  }
  return node;
}

module.exports = lowestCommonAncestor;
