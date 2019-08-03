//sliding window creating a window which can either be an array or number from one position to another
// window increases or closes, useful for keeping track of a subset of data in an array/string

function longestUnique(str) {

}
//calculate the max sum of n consecutive number
function maxSubArraySum(arr, num){
    //naive approach
    // if (n > arr.length) return null

    // var max = -Infinity

    // for(let i = 0; i < arr.length - n + 1; i++){
    //     let temp = 0;
    //     for(let j = 0; j < n; j++){
    //         temp += arr[i+j]
    //     }
    //     if (temp > max){
    //         max = temp;
    //     }
    // }
    // return max;

    let maxSum = 0;
    let tempSum = 0;

    if (arr.length < num) return null;

    for (let i = 0; i < num; i++){
        maxSum += arr[i]
    }
    tempSum = maxSum;
    let indices = [0,num]
    //start at num since you've already added the first num digits
    for (let i = num; i< arr.length; i++){
        //this is substracting the first num and adding the next number in the array
        //kinda like sliding the window
        //[(1,2,3),4,5,5,8,1] num = 3, i = 3, arr[i] = 4, arr[i-num] = 1
        //[1,(2,3,4),5,5,8,1] num = 3, i = 4, arr[i] = 5, arr[i-num] = 2
        //[1,2,(3,4,5),5,8,1]
        tempSum = tempSum - arr[i - num] + arr[i]
        if(tempSum > maxSum){
            maxSum = tempSum;
            indices = [i-num + 1, i]
        }
        // maxSum = Math.max(tempSum, maxSum);
    }
    return [maxSum, indices];
}

console.log(maxSubArraySum([1,2,5,2,8,1,5], 4)) //17
console.log(maxSubArraySum([1,2,5,2,8,1,5], 3)) //17