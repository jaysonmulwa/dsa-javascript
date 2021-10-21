/**
 * @param {number[]} nums
 * @return {number}
 */
var firstMissingPositive = function(nums) {
    let i = 1;
    while(nums.includes(i)) {i++};
    return i;

    
};
