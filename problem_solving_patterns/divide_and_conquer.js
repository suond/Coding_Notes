//divide and conquer divide a data set into smaller chunks and then
//repeating a process with a subset of data

//decrease time complexity

function binarySearch(array, val) {
    if (array.length == 0) return -1;

    let middle = Math.floor(array.length / 2)
    let leftHalf = array.slice(0, middle)
    let rightHalf = array.slice(middle + 1)

    if (array[middle] === val) {
        return middle
    } else if(array[middle] > val) {
        return binarySearch(leftHalf, val)
    } else {
        let result = binarySearch(rightHalf, val);
        return result != -1 ? result + middle + 1 : -1
    }
}

function search(array, target) {
    let min = 0
    let max = array.length -1

    while (min <= max){
        let middle = Math.floor( (min + max) / 2)
        let currentEle = array[middle]

        if (currentEle < target) {
            min = middle + 1
        } else if (currentEle > target) {
            max = middle - 1
        } else {
            return middle;
        }
    }
    return -1
}

console.log(binarySearch( [1,2,4,6,10,20,35,40,46,60,99], 4 )  ) //8