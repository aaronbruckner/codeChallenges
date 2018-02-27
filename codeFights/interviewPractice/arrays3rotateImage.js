/*
Note: Try to solve this task in-place (with O(1) additional memory), since this is what you'll be asked to do during an interview.

You are given an n x n 2D matrix that represents an image. Rotate the image by 90 degrees (clockwise).

Example

For

a = [[1, 2, 3],
     [4, 5, 6],
     [7, 8, 9]]
the output should be

rotateImage(a) =
    [[7, 4, 1],
     [8, 5, 2],
     [9, 6, 3]]
Input/Output

[execution time limit] 4 seconds (js)

[input] array.array.integer a

Guaranteed constraints:
1 ≤ a.length ≤ 100,
a[i].length = a.length,
1 ≤ a[i][j] ≤ 104.

[output] array.array.integer
*/
function rotateImage(a) {
    let depth = 0;
    // Start at outer most ring (edge) of matrix.
    // Rotate 4 squares at a time until an entire ring is rotated, then go one ring deeper.
    while (depth < Math.floor(a.length/2)) {
        for (let offset = 0; offset < a.length - 1 - (depth * 2); offset++) {
            pivotFour(a, offset, depth);
        }
        depth++;
    }
    return a;
}

function pivotFour(a, offset, depth) {
    let max = a.length - 1 - depth;
    let tmp = a[depth][offset + depth];
    a[depth][offset + depth] = a[max - offset][depth];
    a[max - offset][depth] = a[max][max-offset];
    a[max][max-offset] = a[offset + depth][max];
    a[offset + depth][max] = tmp;
}
