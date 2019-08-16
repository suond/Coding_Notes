
const {tree} = require('./sampletree')


function DFSPreOrder(root){
    let data = [];
    function traverse(node){
        data.push(node.value)
        if (node.left)traverse(node.left)
        if (node.right)traverse(node.right)
    }
    traverse(root)
    return data;
}
console.log(DFSPreOrder(tree))

function DFSInOrder(root){
    let data = [];
    function traverse(node){
        if (node.left)traverse(node.left)
        data.push(node.value)
        if (node.right)traverse(node.right)
    }
    traverse(root)
    return data;
}
console.log(DFSInOrder(tree))

function DFSPostOrder(root){
    let data = [];
    function traverse(node){
        if (node.left)traverse(node.left)
        if (node.right)traverse(node.right)
        data.push(node.value)
    }
    traverse(root)
    return data;
}
console.log(DFSPostOrder(tree))
// console.log(tree)

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