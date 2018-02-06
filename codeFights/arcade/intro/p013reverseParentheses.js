/*
You have a string s that consists of English letters, punctuation marks, whitespace characters, and brackets. It is guaranteed that the parentheses in s form a regular bracket sequence.

Your task is to reverse the strings contained in each pair of matching parentheses, starting from the innermost pair. The results string should not contain any parentheses.

Example

For string s = "a(bc)de", the output should be
reverseParentheses(s) = "acbde".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s

A string consisting of English letters, punctuation marks, whitespace characters and brackets. It is guaranteed that parentheses form a regular bracket sequence.

Constraints:
5 ≤ s.length ≤ 55.

[output] string
*/
function reverseParentheses(s) {
    let reversedS = s;
    let previousOpen = reversedS.length;
    while (true) {
        let lastOpen = reversedS.lastIndexOf('(', previousOpen);
        if (lastOpen === -1) {
            return reversedS;
        }
        previousOpen = lastOpen;
        let nextClose = reversedS.indexOf(')', lastOpen);
        reversedS = reversedS.substring(0, lastOpen) + reverseString(reversedS.substring(lastOpen + 1, nextClose)) + reversedS.substring(nextClose + 1);
    }
}

function reverseString(str) {
    let reversed = '';
    for (let i = str.length - 1; i >= 0; i--) {
        reversed += str.charAt(i);
    }
    return reversed;
}
