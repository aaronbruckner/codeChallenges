/*
Given a sorted array of integers arr and an integer num, find all possible unique subsets of arr that add up to num. Both the array of subsets and the subsets themselves should be sorted in lexicographical order.

Example

For arr = [1, 2, 3, 4, 5] and num = 5, the output should be
sumSubsets(arr, num) = [[1, 4], [2, 3], [5]].

Input/Output

[execution time limit] 4 seconds (js)

[input] array.integer arr

A sorted array of integers.

Guaranteed constraints:
0 ≤ arr.length ≤ 50,
1 ≤ arr[i] ≤ num.

[input] integer num

A non-negative integer.

Guaranteed constraints:
0 ≤ num ≤ 1000.

[output] array.array.integer

A sorted array containing sorted subsets composed of elements from arr that have a sum of num. It is guaranteed that there are no more than 1000 subsets in the answer.
*/
function sumSubsets(arr, num, sum = 0, candidate = [], solutions = [], solutionMap = {}) {
    if (sum === num) {
        let solutionKey = candidate.join(',');
        if (!solutionMap[solutionKey]) {
            solutions.push(candidate.slice());
            solutionMap[solutionKey] = true;
        }
        return solutions;
    }

    if (sum < num) {
        for (let i = 0; i < arr.length; i++) {
            let nextOption = arr[i];
            let nextArray = arr.slice(i + 1);
            candidate.push(nextOption);
            sumSubsets(nextArray, num, sum + nextOption, candidate, solutions, solutionMap);
            candidate.pop();
        }
    }


    return solutions;
}
