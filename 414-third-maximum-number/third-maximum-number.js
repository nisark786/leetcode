/**
 * @param {number[]} nums
 * @return {number}
 */
var thirdMax = function(nums) {
    let a= Array.from(new Set(nums));
    a.sort((a,b)=>b-a);
    if(a.length<3){
        return a[0];
    }else{
        return a[2]
    }
    
};