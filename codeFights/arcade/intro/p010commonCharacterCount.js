/*
Given two strings, find the number of common characters between them.

Example

For s1 = "aabcc" and s2 = "adcaa", the output should be
commonCharacterCount(s1, s2) = 3.

Strings have 3 common characters - 2 "a"s and 1 "c".

Input/Output

[execution time limit] 4 seconds (js)

[input] string s1

A string consisting of lowercase latin letters a-z.

Guaranteed constraints:
1 ≤ s1.length ≤ 15.

[input] string s2

A string consisting of lowercase latin letters a-z.

Guaranteed constraints:
1 ≤ s2.length ≤ 15.

[output] integer
*/
function commonCharacterCount(s1, s2) {
    let s1Freq = findLetterFrequency(s1);
    let s2Freq = findLetterFrequency(s2);
    let totalCommonChars = 0;

    for (let char in s1Freq) {
        if (s2Freq[char]) {
            totalCommonChars += Math.min(s1Freq[char], s2Freq[char]);
        }
    }

    return totalCommonChars;
}

function findLetterFrequency(str) {
    let frequency = {};
    for (let i = 0; i < str.length; i++) {
        let char = str.charAt(i);
        frequency[char] = frequency[char] ? frequency[char] + 1 : 1;
    }

    return frequency;
}
