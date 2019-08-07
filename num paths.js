function numOfPathsToDest(n) {
  // your code goes here
  let memo = new Array(n)
  for (let h = 0; h < n; h++) {
    memo[h] = new Array(n)
  }
  
  for (let i = 0; i < n ; i++){
    for (let j = 0; j < n ; j++){
      memo[i][j] = -1
    }
  }
  
  return numOfPathsToSquare(n-1, n-1, memo);
}

function numOfPathsToSquare(i,j,memo){
   if (i < 0 || j < 0){
     return 0
   } else if (i < j){
     memo[i][j] = 0
   } else if (memo[i][j] != -1) {
     return memo[i][j]
   } else if (i === 0 && j === 0) {
     memo[i][j] = 1
   } else {
     memo[i][j] = numOfPathsToSquare(i, j-1, memo) + numOfPathsToSquare(i-1, j, memo)
   }
  return memo[i][j]
}
