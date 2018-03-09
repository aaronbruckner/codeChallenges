/*
Sudoku is a number-placement puzzle. The objective is to fill a 9 × 9 grid with numbers in such a way that each column, each row, and each of the nine 3 × 3 sub-grids that compose the grid all contain all of the numbers from 1 to 9 one time.

Implement an algorithm that will check whether the given grid of numbers represents a valid Sudoku puzzle according to the layout rules described above. Note that the puzzle represented by grid does not have to be solvable.

Example

For

grid = [['.', '.', '.', '1', '4', '.', '.', '2', '.'],
        ['.', '.', '6', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '1', '.', '.', '.', '.', '.', '.'],
        ['.', '6', '7', '.', '.', '.', '.', '.', '9'],
        ['.', '.', '.', '.', '.', '.', '8', '1', '.'],
        ['.', '3', '.', '.', '.', '.', '.', '.', '6'],
        ['.', '.', '.', '.', '.', '7', '.', '.', '.'],
        ['.', '.', '.', '5', '.', '.', '.', '7', '.']]
the output should be
sudoku2(grid) = true;

For

grid = [['.', '.', '.', '.', '2', '.', '.', '9', '.'],
        ['.', '.', '.', '.', '6', '.', '.', '.', '.'],
        ['7', '1', '.', '.', '7', '5', '.', '.', '.'],
        ['.', '7', '.', '.', '.', '.', '.', '.', '.'],
        ['.', '.', '.', '.', '8', '3', '.', '.', '.'],
        ['.', '.', '8', '.', '.', '7', '.', '6', '.'],
        ['.', '.', '.', '.', '.', '2', '.', '.', '.'],
        ['.', '1', '.', '2', '.', '.', '.', '.', '.'],
        ['.', '2', '.', '.', '3', '.', '.', '.', '.']]
the output should be
sudoku2(grid) = false.

The given grid is not correct because there are two 1s in the second column. Each column, each row, and each 3 × 3 subgrid can only contain the numbers 1 through 9 one time.

Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.char grid

A 9 × 9 array of characters, in which each character is either a digit from '1' to '9' or a period '.'.

[output] boolean

Return true if grid represents a valid Sudoku puzzle, otherwise return false.
*/
function sudoku2(grid) {
    let rowMarkers = [];
    for (let row = 0; row < grid.length; row++) {
        rowMarkers.push({});
    }
    let colMarkers = [];
    for (let col = 0; col < grid.length; col++) {
         colMarkers.push({});
    }
    let subGridMarkers = [];
    for (let row = 0; row < grid.length/3; row++) {
        subGridMarkers.push([]);
        for (let col = 0; col < grid.length/3; col++) {
            subGridMarkers[row].push({});
        }
    }

    for (let row = 0; row < grid.length; row++) {
        for (let col = 0; col < grid.length; col++) {
            let value = grid[row][col];
            if (value === '.') {
                continue;
            }
            // Check rows and cols
            if (rowMarkers[row][value] || colMarkers[col][value]) {
                return false;
            }
            // Check 3 by 3 boxes
            let subGrid = subGridMarkers[Math.floor(row/3)][Math.floor(col/3)];
            if (subGrid[value]) {
                return false;
            }
            // Mark character seen
            rowMarkers[row][value] = true;
            colMarkers[col][value] = true;
            subGrid[value] = true;
        }
    }
    return true;
}
