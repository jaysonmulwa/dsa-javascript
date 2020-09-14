/**
 * @param {number[]} nums
 * @param {number} target
 * @return {number}
 */
var search = function(nums, target) {
    
    var position = -1;
    
    for (i in nums){
        
        if(nums[i] == target){
            
            position = i;
            
            break;
           
         }
    }
    
    return position;
};
