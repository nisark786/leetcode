/**
 * @param {string} columnTitle
 * @return {number}
 */
var titleToNumber = function(columnTitle) {
   let res = 0;
    for (let i = 0; i < columnTitle.length; i++) {
        let val = columnTitle.charCodeAt(i) - 64;
        res = res * 26 + val;
    }
    return res;
};