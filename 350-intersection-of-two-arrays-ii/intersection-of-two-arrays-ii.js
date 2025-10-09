/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersect = function (nums1, nums2) {
    let result = [];
    let catched = {};
    for (let i of nums1) {
        catched[i] = (catched[i] || 0) + 1;
    }
    for(let i of nums2){
        if(catched[i]>0){
        result.push(i);
        catched[i]--;
    }}
    return result;
};