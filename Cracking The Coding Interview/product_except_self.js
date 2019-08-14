/*
Given an array nums of n integers where n > 1,  return an array output such that output[i] is equal to the product of all the elements of nums except nums[i].

Example:

Input:  [1,2,3,4]
Output: [24,12,8,6]
Note: Please solve it without division and in O(n).

*/

// var productExceptSelf = function(nums) {
//     if (!nums.length) return 0
//     if (nums.length == 1) return nums[0]
//     let results = new Array(nums.length);
    
//     // let leftpointer = 0
//     // let rightpointer = 1

//     for (let i = 0; i < nums.length; i++){
        
//         results[i] = arrayProduct(nums,0, i) * arrayProduct(nums, i+1, nums.length)
//     }
//     return results;
// };

// function arrayProduct(arr, start, stop ){
    
//     let product = 1;

//     for (let i = start; i < stop; i++){
//         product *= arr[i]
//     }

//     return product  
// }

/**
 * // input: [1, 2, 3, 4]
// **if empty, default to: 1
// LEFT SIDE
//    2  3  4  => [1,
// 1     3  4  =>  1,
// 1  2     4  =>  2,
// 1  2  3     =>  6]
// RIGHT SIDE
//    2  3  4  => [24,
// 1     3  4  =>  12,
// 1  2     4  =>  4,
// 1  2  3     =>  1]
 */

var productExceptSelf = function(nums) {
    let length = nums.length;
    
    let left = new Array(length)
    let right = new Array(length)
    
    let results = new Array(length)
    
    left[0] = 1
    for (let i = 1; i < length; i++){
        left[i] = nums[i - 1] * left[i - 1]
    }
    
    console.log(left)
    right[length - 1] = 1
    for(let i = length - 2; i >= 0; i-- ) {
        right[i] = nums[i + 1] * right[i + 1 ];
    }
    console.log(right)
    
    for(let i = 0; i < length; i++){
        results[i] = left[i] * right[i]
    }
    
    return results
    
};

console.log(productExceptSelf( [1,2,3,4] ))
// console.log(productExceptSelf( [1,2,3,4,5] ))