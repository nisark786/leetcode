/**
 * @param {number[]} nums1
 * @param {number[]} nums2
 * @return {number[]}
 */
var intersection = function(nums1, nums2) {
    let result = [];
    let iter = nums1.length>=nums2.length ? nums1 : nums2;
    let not = nums1.length>=nums2.length ? nums2 : nums1;
    for(let i of iter){
        if(not.includes(i) && !result.includes(i)){
            result.push(i);
        }
    }
    return result;
};