/*
In the popular Minesweeper game you have a board with some mines and those cells that don't contain a mine have a number in it that indicates the total number of mines in the neighboring cells. Starting off with some arrangement of mines we want to create a Minesweeper game setup.

Example

For

matrix = [[true, false, false],
          [false, true, false],
          [false, false, false]]
the output should be

minesweeper(matrix) = [[1, 2, 1],
                       [2, 1, 1],
                       [1, 1, 1]]
Check out the image below for better understanding:

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.boolean matrix

A non-empty rectangular matrix consisting of boolean values - true if the corresponding cell contains a mine, false otherwise.

Guaranteed constraints:
2 ≤ matrix.length ≤ 5,
2 ≤ matrix[0].length ≤ 5.

[output] array.array.integer

Rectangular matrix of the same size as matrix each cell of which contains an integer equal to the number of mines in the neighboring cells. Two cells are called neighboring if they share at least one corner.
*/
function minesweeper(matrix) {
    let mineCountArray = [];
    for (let row = 0; row < matrix.length; row++) {
        mineCountArray.push([]);
        for (let col = 0; col < matrix[row].length; col++) {
            let count = 0;
            // Up/Left
            if ((row - 1) >= 0 && (col - 1) >= 0 && matrix[row - 1][col - 1]) {
                count++;
            }
            // Up
            if ((row - 1) >= 0 && matrix[row - 1][col]) {
                count++;
            }
            // Up/Right
            if ((row - 1) >= 0 && (col + 1) < matrix[row].length && matrix[row - 1][col + 1]) {
                count++;
            }
            // Right
            if ((col + 1) < matrix[row].length && matrix[row][col + 1]) {
                count++;
            }
            // Down/Right
            if ((row + 1) < matrix.length && (col + 1) < matrix[row].length && matrix[row + 1][col + 1]) {
                count++;
            }
            // Down
            if ((row + 1) < matrix.length && matrix[row + 1][col]) {
                count++;
            }
            // Down/Left
            if ((row + 1) < matrix.length && (col - 1) >= 0 && matrix[row + 1][col - 1]) {
                count++;
            }
            // Left
            if ((col - 1) >= 0 && matrix[row][col - 1]) {
                count++;
            }
            mineCountArray[row].push(count);
        }
    }
    return mineCountArray;
}
