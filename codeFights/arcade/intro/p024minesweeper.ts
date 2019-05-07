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
*/
function minesweeper(matrix: boolean[][]): number[][] {
    const mineCountMatrix: number[][] = [];
    
    const offsets = [-1, 0, 1];
    
    for (let row = 0; row < matrix.length; row++) {
        const countRow: number[] = [];
        mineCountMatrix.push(countRow);
        for (let col = 0; col < matrix[row].length; col++) {
            countRow.push(findAdjacentMines(matrix, row, col));
        }
    }
    
    return mineCountMatrix;
}

function findAdjacentMines(matrix: boolean[][], row: number, col: number): number {
    const maxHeight = matrix.length;
    const maxWidth = matrix[0].length;
    const offsets: number[][] = [
        [-1, -1],   [-1, 0],    [-1, 1],
        [0, -1],    /*NA*/      [0, 1],
        [1, -1],    [1, 0],     [1, 1]
    ];
    
    let totalMines = 0;
    
    offsets.forEach(([rowOffset, colOffset]) => {
        const modRow = row + rowOffset;
        const modCol = col + colOffset;
        const isRowValid = modRow >= 0 && modRow < maxHeight;
        const isColValid = modCol >= 0 && modCol < maxWidth;
        
        if (isRowValid && isColValid && matrix[modRow][modCol]) {
            totalMines++;
        }
    });
    
    return totalMines;
}
