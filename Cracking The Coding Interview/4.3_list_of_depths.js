// Given a binary tree, design an algorithm which creates a linked list of all the nodes
// at each depth (e.g., if you have a tree with depth D, you'll have D linked lists).

// input: BinaryTree
//         19
//        /   \
//      5      24
//    /  \    /  \
//   3    8  23   31
//  /
// 1

// output: 4 linked lists:
// [
// { 19 },
// { 5 } => { 5, 24 },
// { 3, 8, 23, 31 },
// { 1 }
// ]

const { Node, LinkedList } = require('./LinkList')
const {tree} = require('./4.2_minimal_tree');


class TreeNode {
  constructor(val){
    this.value = val
    this.left = this.right = null
  }
}

console.log(tree)

function buildBST(array) {
  // let root = new TreeNode(array[ Math.floor(array.length / 2) ])
  if (!array.length) return null
  let midIdx = Math.floor(array.length / 2)
  let root = new TreeNode(array[midIdx])
  root.left = buildBST(array.slice(0, midIdx))
  root.right = buildBST(array.slice(midIdx + 1))
  
  return root
}

let bst = buildBST([1, 3, 5, 8, 19, 23, 24, 31])

function listOfDepths(root) {
  // built a queue with root in it
  // track levels
  let lists = []
  let queue = []
  queue.push([root, 0])
  // while queue is not empty
  while (queue.length) {
    // if linked list does not exist at level, create one, else add to tail
    [currNode, level] = queue.shift()
    lists[level] = lists[level] || new LinkedList()
    lists[level].addToTail(currNode.value)
    
    if (currNode.left) queue.push([currNode.left, level + 1])
    if (currNode.right) queue.push([currNode.right, level + 1])
  }
  return lists
}

// console.log(bst)
// console.log(listOfDepths(bst))

function listOfDepthsRecursive(root, list=[], level = 0){
    if (!root) return list
    
    let currNode = root;
    listOfDepthsRecursive(currNode.left, list, level +1);
    listOfDepthsRecursive(currNode.right, list, level +1);
    if(!list[level]){
      list[level] = new LinkedList()
    }
    list[level].addToTail(currNode.value);
    

   return list;
}
// console.log(listOfDepthsRecursive(bst))

//depth searchs
// input: BinaryTree
//         19
//        /   \
//      5      24
//    /  \    /  \
//   3    8  23   31
//  /
// 1
/**
 * Preorder - 19, 5, 3, 1, 8, 24, 23, 31  root, left all, right all
 * Inorder -  1, 3, 5, 8, 19, 23, 24, 31  left all, root, right all
 * PostOrder - 1, 3, 8, 5, 23, 31, 24, 19  left all, right all, root
 */