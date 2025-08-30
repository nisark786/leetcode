/**
 * @param {number[]} nums
 * @return {boolean}
 */
var containsDuplicate = function(nums) {
    let set = [...new Set(nums)];
    if(set.length===nums.length)return false;
    return true;
};