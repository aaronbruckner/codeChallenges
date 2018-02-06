/*
Below we will define an n-interesting polygon. Your task is to find the area of a polygon for a given n.

A 1-interesting polygon is just a square with a side of length 1. An n-interesting polygon is obtained by
taking the n - 1-interesting polygon and appending 1-interesting polygons to its rim, side by side.
You can see the 1-, 2-, 3- and 4-interesting polygons in the picture below.

https://codefightsuserpics.s3.amazonaws.com/tasks/shapeArea/img/area.png?_tm=1491302317375

Example

For n = 2, the output should be
shapeArea(n) = 5;
For n = 3, the output should be
shapeArea(n) = 13.
Input/Output

[execution time limit] 4 seconds (js)

[input] integer n

Guaranteed constraints:
1 ≤ n < 104.

[output] integer

The area of the n-interesting polygon.
*/

function shapeArea(n) {
    let area = 0;
    for (let i = n - 1; i > 0; i--) {
        area += ((i * 2) - 1);
    }

    return (area * 2) + ((n * 2) - 1);
}
