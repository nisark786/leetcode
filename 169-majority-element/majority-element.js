/**
 * @param {number[]} nums
 * @return {number}
 */
var majorityElement = function(nums) {
    let counts = nums.reduce((acc,num)=>{
        acc[num]=(acc[num] || 0)+1;
        return acc;
    },{});

    let max=0;
    let majority=null;

    for(let key in counts){
        if(counts[key]>max){
            max=counts[key];
            majority=key;
        }
    }
    return Number(majority);
};