
const BFS = (root) => {
    let data = []
    let queue = [];

    queue.push(root)

    while(queue.length){
        let current = queue.shift();
        data.push(current.value)
        if(current.left) queue.push(current.left)
        if(current.right) queue.push(current.right)
    }
    return data;
}

class TreeNode {
    constructor(val){
      this.value = val
      this.left = this.right = null
    }
  }
  
  function buildBST(array) {
    // let root = new TreeNode(array[ Math.floor(array.length / 2) ])
    if (!array.length) return null
    let midIdx = Math.floor(array.length / 2)
    let root = new TreeNode(array[midIdx])
    root.left = buildBST(array.slice(0, midIdx))
    root.right = buildBST(array.slice(midIdx + 1))
    
    return root
  }
  
  let tree = buildBST([1, 3, 5, 8, 19, 23, 24, 31])
  // Input: Array
// Example: [1, 3, 5, 8, 19, 23, 24, 31]
// Expected Output:
//         19
//        /   \
//      5      24
//    /  \    /  \
//   3    8  23   31
//  /
// 1

  console.log(BFS(tree))