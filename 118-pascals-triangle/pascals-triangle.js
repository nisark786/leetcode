/**
 * @param {number} numRows
 * @return {number[][]}
 */
var generate = function(numRows) {
    let triangle = [];

    for (let row = 0; row < numRows; row++) {
        triangle[row] = [];
        triangle[row][0] = 1; // first element
        triangle[row][row] = 1; // last element

        for (let col = 1; col < row; col++) {
            triangle[row][col] = triangle[row-1][col-1] + triangle[row-1][col];
        }
    }

    return triangle;
};