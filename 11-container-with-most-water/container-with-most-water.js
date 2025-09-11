/**
 * @param {number[]} height
 * @return {number}
 */
var maxArea = function(height) {
   let left = 0;
   let right = height.length-1;
   let res = 0;
   while(left<right){
    let high = Math.min(height[left],height[right]);
    let water = high*(right-left);
    res = Math.max(res,water);
    if(height[left]<height[right]){
        left++
    }else{
        right--;
    }
   }
   return res
};