/**
 * @param {number[]} nums
 * @return {number}
 */
var missingNumber = function(nums) {
    let n = nums.length;
    let sumexp = (n*(n+1)/2);
    let sum = nums.reduce((acc,num)=>acc+num,0);
    return sumexp-sum;
};