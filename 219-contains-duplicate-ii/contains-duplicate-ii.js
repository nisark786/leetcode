/**
 * @param {number[]} nums
 * @param {number} k
 * @return {boolean}
 */
var containsNearbyDuplicate = function(nums, k) {
   let check = new Map();
   for(let i=0;i<nums.length;i++){
    if(check.has(nums[i])){
        if(i-check.get(nums[i])<=k){
            return true
        }
    }
    check.set(nums[i],i)
   }
   return false;
};