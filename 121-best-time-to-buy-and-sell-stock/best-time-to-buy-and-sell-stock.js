/**
 * @param {number[]} prices
 * @return {number}
 */
var maxProfit = function(prices) {
    let min=Infinity;
    let maxpro=0;
    for(let day of prices){
        if(day<min){
            min=day;
        }
        let profit=day-min;
        if(maxpro<profit){
            maxpro=profit;
        }
    }
    return maxpro;
};