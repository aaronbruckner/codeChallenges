/*
Given a sequence of integers as an array, determine whether it is possible to obtain a strictly increasing sequence by removing no more than one element from the array.

Example

For sequence = [1, 3, 2, 1], the output should be
almostIncreasingSequence(sequence) = false;

There is no one element in this array that can be removed in order to get a strictly increasing sequence.

For sequence = [1, 3, 2], the output should be
almostIncreasingSequence(sequence) = true.

You can remove 3 from the array to get the strictly increasing sequence [1, 2]. Alternately, you can remove 2 to get the strictly increasing sequence [1, 3].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer sequence

Guaranteed constraints:
2 ≤ sequence.length ≤ 105,
-105 ≤ sequence[i] ≤ 105.

[output] boolean

Return true if it is possible to remove one element from the array in order to get a strictly increasing sequence, otherwise return false.
*/
function almostIncreasingSequence(sequence) {
    if (sequence.length === 2) {
        return true;
    }

    let i = 0, totalUnordered = 0;
    if (sequence[0] >= sequence[2]) {
        // Edge case where first item must be removed for array to be almost increasing.
        totalUnordered++;
        sequence.splice(0, 1);
    }
    while (i < sequence.length - 1) {
        if (sequence[i] >= sequence[i+1]) {
            totalUnordered++;
            if (totalUnordered > 1) {
                return false;
            }
            // Decide which element to remove. Always pick smallest element when possible.
            sequence.splice((sequence[i + 1] > sequence[i - 1]) ? i : (i + 1), 1);
        } else {
          i++;
        }
    }

    return true;
}
