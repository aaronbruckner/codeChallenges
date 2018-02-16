/*
Note: Try to solve this task in O(n) time using O(1) additional space, where n is the number of elements in l, since this is what you'll be asked to do during an interview.

Given a singly linked list of integers, determine whether or not it's a palindrome.

Example

For l = [0, 1, 0], the output should be
isListPalindrome(l) = true;
For l = [1, 2, 2, 3], the output should be
isListPalindrome(l) = false.
Input/Output

[execution time limit] 4 seconds (js)

[input] linkedlist.integer l

A singly linked list of integers.

Guaranteed constraints:
0 ≤ list size ≤ 5 · 105,
-109 ≤ element value ≤ 109.

[output] boolean

Return true if l is a palindrome, otherwise return false.
*/
// Definition for singly-linked list:
// function ListNode(x) {
//   this.value = x;
//   this.next = null;
// }
//
function isListPalindrome(l) {
    if (!l || !l.next) {
        return true;
    }

    // Find total length
    let node = l;
    let totalNodes = 0;
    while(node) {
        totalNodes++;
        node = node.next;
    }

    // Find node that is half way through the linked list
    let halfwayIndex = Math.ceil(totalNodes/2);
    let halfwayNode = l;
    while(halfwayIndex--) {
        halfwayNode = halfwayNode.next;
    }

    // Flip all the next pointers on the second half of the linked list.
    let previous = halfwayNode;
    node = halfwayNode.next;
    while (node) {
        let nextNode = node.next;
        node.next = previous;
        previous = node;
        node = nextNode;
    }

    // Compare two sides (with second part reversed) in order to determine if palindrome.
    let leftNode = l;
    let rightNode = previous;
    halfwayIndex = Math.floor(totalNodes/2);
    while (halfwayIndex--) {
        if (leftNode.value !== rightNode.value) {
            return false;
        }
        leftNode = leftNode.next;
        rightNode = rightNode.next;
    }
    return true;
}
