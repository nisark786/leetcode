/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = [];
    for(let i of nums1){
        if(nums2.includes(i) && !result.includes(i)){
            result.push(i);
        }
    }
    return result;
};