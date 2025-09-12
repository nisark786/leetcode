/**
 * @param {number[]} nums
 * @return {number}
 */
var maxSubArray = function(nums) {
    let now = 0;
    let max = nums[0];
    for(let num of nums){
        if(now<0) now=0;
        now += num;
        max=Math.max(now,max);
    }
    return max;
};