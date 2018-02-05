/*
###########
# Problem #
###########

Given an array of string numbers (i.e. strings that contain only digits), return the greatest possible number of appending these numbers to each other as a string.

Example

For nums = [ "20", "3005", "2" ], the output should be
greatestNumber(nums) = "3005220".
Input/Output

[execution time limit] 4 seconds (js)

[input] array.string nums

An array of string numbers (i.e. strings that contain only digits).
String numbers are valid integer non-negative numbers.

Guaranteed constraints:
0 < nums.length ≤ 50,
0 < nums[i].length ≤ 6.

[output] string

The greatest possible number of appending given array's numbers to each other as a string.
*/

function hugeNumber(numbers) {
    let largestCombo = [];

    numbers.forEach((number) => {
        let i = 0;
        while (i < largestCombo.length) {
            if (isGreaterThan(number, largestCombo[i])) {
                break;
            }
            i++;
        }
        largestCombo.splice(i, 0, number);
    });

    return largestCombo.join('').replace(/^0+/, '') || '0';
}

function isGreaterThan(a, b) {
    return (a + b) > (b + a);
}
