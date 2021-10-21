//1. Two Sum

//Hashmap solution
let twoSum = (nums, target) => {
    let diffMap = new Map();
    for(let i=0;i<nums.length; i++){
        if(diffMap.has(target-nums[i])){
            return [diffMap.get(target-nums[i]), i];
        } 
        diffMap.set(nums[i], i);
    }
    return [];
};

//Object Solution
const twoSum = (nums, target) => {
  const map = {};

  for (let i = 0; i < nums.length; i++) {
    const another = target - nums[i];

    if (another in map) {
      return [map[another], i];
    }
    
    map[nums[i]] = i;
  }

  return null;
};
