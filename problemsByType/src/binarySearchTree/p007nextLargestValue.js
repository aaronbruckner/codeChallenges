/**
* Finds the next largest value within the BST given a starting value.
*
* @param node - the root of the BST.
* @param value - the value in the BST to find the next largest value for.
* @returns {object} - the next largest value greater than the provided value or null if the provided
*                     value is not within the BST or there is no larger value.
*/
function nextLargestValue(node, value) {
  let nextLargestValue = null;
  let valueFound = false;
  while (node) {
    if (node.value  > value && (nextLargestValue === null || node.value < nextLargestValue)) {
      nextLargestValue = node.value;
    }
    valueFound = valueFound || node.value === value;
    node = node.value > value ? node.left : node.right;
  }
  return valueFound ? nextLargestValue : null;
}

module.exports = nextLargestValue;
