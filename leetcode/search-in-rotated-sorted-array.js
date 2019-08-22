const search = (nums, target) => {
    if(nums.length === 0 ) return -1
    let left = 0;
    let middle = Math.floor(nums.length / 2)
    if(nums[middle] === target) return middle;

    if (
        nums[left] < nums[middle]  && (target <= nums[middle] && target >= nums[left])
        ) {
            return search(nums.slice(0, middle), target)
        } else if(
            nums[left] > nums[middle] && (target >= nums[left] || target <= nums[middle])
        ) {
            return search(nums.slice(0, middle), target)
        } else {
            let res = search(nums.slice(middle + 1))
            return res !== -1 ? res + middle + 1 : res
        }
}

// var search = function(nums, target) {
//     let leftIndex = 0;
//     let rightIndex = nums.length - 1;

//     while (leftIndex < rightIndex) {
//       let middle = Math.floor(leftIndex + (rightIndex - leftIndex) / 2);

//       if (nums[middle] === target) return middle;

//       if (
//         nums[leftIndex] < nums[middle] &&
//         (target <= nums[middle] &&
//         target >= nums[leftIndex])
//       ) {
//         rightIndex = middle;
//       } else if (
//         nums[leftIndex] > nums[middle] &&
//         (target >= nums[leftIndex] ||
//         target <= nums[middle])
//       ) {
//         rightIndex = middle;
//       } else {
//         leftIndex = middle + 1;
//       }
//     }

//     if (nums[leftIndex] === target) {
//       return leftIndex;
//     } else {
//       return -1;
//     }
// };


//target > mid and end look left
// target < mid and start look right

//[4,5,6,7,1,2,3] , 2 // target < mid && target < start >> look right
//[4,5,6,7,1,2,3] , 5 // target < mid && target > start >> look left
//[3,4,5,6,7,1,2] , 7 // target > mid && target > start >> look right
//[3,4,5,6,7,1,2] , 5 // target > mid && target < start >> look left

//start <= mid && start < target && target < mid look left
//start <= mid && !(start< target && target < mid look right

console.log(search([4,5,6,7,0,1,2], 0))
// console.log(search([4,5,6,7,8,9,10,0,1,2,3], 5))
// console.log(search([8,9,10,0,1,2,3,4,5,6,7], 5))
// console.log(search([8,9,10,0,1,2,3,4,5,6,7], 9)) 