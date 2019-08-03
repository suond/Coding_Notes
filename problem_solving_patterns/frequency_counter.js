//Frequency counter: use objects/sets to collect values/frequencies of values

//function returns true if every value in the 1st array is in the 2nd array squared

function same(arr1, arr2) {
    if (arr1.length !== arr2.length) return false;
    let frequencyArr1 = {}
    for (ele of arr1) {
        frequencyArr1[ele] = frequencyArr1[ele] + 1 || 1
    }
    let frequencyArr2 = {}
    for (ele of arr2) {
        frequencyArr2[ele] = frequencyArr2[ele] + 1 || 1
    }
    
    for (let key in frequencyArr1) {
        if(!(key ** 2 in frequencyArr2)){
            return false;
        }
        if(frequencyArr2[key **2] !== frequencyArr1[key]){
            return false;
        }
    }
    return true;
}

// console.log(same([1,2,3], [4,1,9])) //true
// console.log(same([1,2,3], [4,9])) //false
// console.log(same([1,2,3], [4,4,9])) //false

function sameFrequency(num1, num2){
    let strNum1 = num1.toString();
    let strNum2 = num2.toString();
    if(strNum1.length !== strNum2.length) return false;
    
    let countNum1 = {};
    let countNum2 = {};
    
    for(let i = 0; i < strNum1.length; i++){
      countNum1[strNum1[i]] = (countNum1[strNum1[i]] || 0) + 1
    }
    
    for(let j = 0; j < strNum1.length; j++){
      countNum2[strNum2[j]] = (countNum2[strNum2[j]] || 0) + 1
    }
    
    for(let key in countNum1){
      if(countNum1[key] !== countNum2[key]) return false;
    }
   
    return true;
  }

  console.log(sameFrequency(182, 281))