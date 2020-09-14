/**
 * @param {number[]} nums
 * @return {number}
 */
var findMin = function(nums) {
    
    var first;
    
    var least;
    
    var prev;
    
    var curr;
    
    var arr = [];
    
    for (i in nums) {
        
       
        curr = nums[i];
        
        if (i == 0){
            
            first = nums[i];
            least = nums[i];
            
        }else {
            
            if(curr < prev){
                
                least = curr;
               
               }
               
        }
        
        prev = nums[i];
        
    }
    
    return least;
    
};
