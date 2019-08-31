function isUniqueChars(str){
    if (str.length > 128) return false;

    let char_set = new Array(128).fill(false)

    for (let i = 0; i < str.length; i++){
        let val = str[i].charCodeAt(0) - 'a'.charCodeAt(0);
        
        if(char_set[val]){
            return false
        }

        char_set[val] = true

    }
    return true;
}

console.log(isUniqueChars("aaaaa"))
console.log(isUniqueChars("abcde"))
console.log(isUniqueChars("abcDdeE"))
console.log(isUniqueChars("abcDdeEE"))