/*
Given a string, find out if its characters can be rearranged to form a palindrome.

Example

For inputString = "aabb", the output should be
palindromeRearranging(inputString) = true.

We can rearrange "aabb" to make "abba", which is a palindrome.

Input/Output

[execution time limit] 5 seconds (ts)

[input] string inputString

A string consisting of lowercase English letters.

Guaranteed constraints:
1 ≤ inputString.length ≤ 50.

[output] boolean

true if the characters of the inputString can be rearranged to form a palindrome, false otherwise.
*/
function palindromeRearranging(inputString: string): boolean {
    // Find all character counts. After doing so, we can determine if a palindrome can be formed.
    const charCountMap: {[key: string]: number} = {};
    for (let char of inputString) {
        if (!charCountMap[char]) {
            charCountMap[char] = 1;
        } else {
            charCountMap[char]++;
        }
    }
    
    // Odd strings can have one odd character count, evens can have none.
    let allowedOdds = inputString.length % 2;
    for (let count of Object.values(charCountMap)) {
        if (count % 2 !== 0) {
            // Odd character counts can make this impossible to form a palindrome.
            allowedOdds--;
            if (allowedOdds < 0) {
                return false;
            }
        }
    }
    
    return true;
}
