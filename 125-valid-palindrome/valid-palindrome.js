/**
 * @param {string} s
 * @return {boolean}
 */
var isPalindrome = function(s) {
    let str = s.toLowerCase().split(" ").join("")
    .replace(/[^a-z0-9]/gi, "");
    let rev=str.split("").reverse().join("")
    return str===rev;
};