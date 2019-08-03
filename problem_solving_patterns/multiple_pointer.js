//multiple pointers - creating pointers or values that correspond to an index/position and move towards
//the beginning, end , or middle based on a certain condition

//used for minimal space complexity

//find the 1st pair where the sum is zero in a sorted array
function sumZero(arr) { 
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

// console.log(sumZero([-4,-3,-2,0,1,2,3,10]))
// console.log(sumZero([-4,0,1,10]))

function countUniqueValues(arr) {
    // let freq = {}

    // for (let ele of arr) {
    //     freq[ele] = (freq[ele] || 0) + 1
    // }

    // let uniq = 0;

    // for (let key in freq){
    //     if (freq[key] === 1){
    //         uniq++
    //     }
    // }
    // return Object.keys(freq).length;
    if (arr.length === 0) return 0
    
    
    let i = 0;
    let j = 1;

    for (j; j< arr.length; j++) {
        if(arr[i] !== arr[j]) {
            i++;
            arr[i] = arr[j]      
        }
    }
    return i+1;
}

console.log(countUniqueValues( [1,1,1,2,3,3,4,4,5,6] ))
console.log(countUniqueValues( [0,1,1,1,1,1,1,1,1,1,4] ))