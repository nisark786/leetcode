/**
 * @param {number} num
 * @return {boolean}
 */
var isPerfectSquare = function(num) {
    let left = 1, right = num;
    while (left <= right) {
        let mid = Math.floor((left + right) / 2);
        let sqr = mid * mid;

        if (sqr === num) return true;
        if (sqr < num) left = mid + 1;
        else right = mid - 1;
    }
    return false;
};
