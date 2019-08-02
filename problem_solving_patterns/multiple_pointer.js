//multiple pointers - creating pointers or values that correspond to an index/position and move towards
//the beginning, end , or middle based on a certain condition

//used for minimal space complexity

//find the 1st pair where the sum is zero in a sorted array
function sumZero(arr1) { 
    let left = 0
    let right = arr.length -1

    while (left < right){
        let sum = arr[left] + arr[right]

        if (sum === 0 ){
            return [arr[left], arr[right]]
        } else if (sum >  0) {
            right--
        } else {
            left++;
        }
    }
    return undefined;
}

console.log(sumZero())