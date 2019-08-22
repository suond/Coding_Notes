var twoSum = function(nums, target) {
    let values = {}
    
    for(let i = 0; i< nums.length; i++){
        values[nums[i]] = i;
    }
    //a+b = t  a = t - b
    for (let i = 0; i< nums.length; i++){
        if ( target - nums[i] in values && values[target - nums[i]] !== i  ) {
            return [i, values[target-nums[i]]  ]
        }
    }
    return null;
};

console.log(twoSum( []))