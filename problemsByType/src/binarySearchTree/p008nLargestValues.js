/**
* Finds the next largest value within the BST given a starting value.
*
* @param node - the root of the BST.
* @param n - the number of largest elements to find in the BST. For example, if n equals 3, the largest
             3 elements in the BST will be found.
* @returns {array} - returns an array of length n containing the largest values within the BST.
                     Array can be less than n if the BST has less than n nodes.
*/
function nLargestValues(node, n, largestValues = []) {
  if (!node || largestValues.length >= n) {
    return largestValues;
  }
  nLargestValues(node.right, n, largestValues);
  if (largestValues.length < n) {
    largestValues.push(node.value);
  }
  return nLargestValues(node.left, n, largestValues);
}

module.exports = nLargestValues;
