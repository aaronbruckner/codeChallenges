/*
Note: Your solution should have only one BST traversal and O(1) extra space complexity, since this is what you will be asked to accomplish in an interview.

A tree is considered a binary search tree (BST) if for each of its nodes the following is true:

The left subtree of a node contains only nodes with keys less than the node's key.
The right subtree of a node contains only nodes with keys greater than the node's key.
Both the left and the right subtrees must also be binary search trees.
Given a binary search tree t, find the kth smallest element in it.

Note that kth smallest element means kth element in increasing order. See examples for better understanding.

Example

For

t = {
    "value": 3,
    "left": {
        "value": 1,
        "left": null,
        "right": null
    },
    "right": {
        "value": 5,
        "left": {
            "value": 4,
            "left": null,
            "right": null
        },
        "right": {
            "value": 6,
            "left": null,
            "right": null
        }
    }
}
and k = 4, the output should be
kthSmallestInBST(t, k) = 5.

Here is what t looks like:

   3
 /   \
1     5
     / \
    4   6
The values of t are [1, 3, 4, 5, 6], and the 4th smallest is 5.

For

t = {
    "value": 1,
    "left": {
        "value": -1,
        "left": {
            "value": -2,
            "left": null,
            "right": null
        },
        "right": {
            "value": 0,
            "left": null,
            "right": null
        }
    },
    "right": null
}

and k = 1, the output should be
kthSmallestInBST(t, k) = -2.

Here is what t looks like:

     1
    /
  -1
  / \
-2   0
The values of t are [-2, -1, 0, 1], and the 1st smallest is -2.

Input/Output

[execution time limit] 4 seconds (js)

[input] tree.integer t

A tree of integers. It is guaranteed that t is a BST.

Guaranteed constraints:
1 ≤ tree size ≤ 104,
-105 ≤ node value ≤ 105.

[input] integer k

An integer.

Guaranteed constraints:
1 ≤ k ≤ tree size.

[output] integer

The kth smallest value in t.
*/
//
// Definition for binary tree:
// function Tree(x) {
//   this.value = x;
//   this.left = null;
//   this.right = null;
// }
function kthSmallestInBST(t, k) {
    let result = null;
    function inorderTraversalWithLimit(node) {
        if (!node || k <= 0) {
            return;
        }

        inorderTraversalWithLimit(node.left);
        if (--k === 0) {
            result = node.value;
        }
        inorderTraversalWithLimit(node.right);
    }

    inorderTraversalWithLimit(t);
    return result;
}
