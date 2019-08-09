class Node{
    constructor(value){
        this.value = value;
        this.left = null;
        this.right = null;
    }
}

class BST{
    constructor(){
        this.root = null;
    }

    insert(value) {
        let newNode = new Node(value);
        if (!this.root){
            this.root = newNode
            return this.root;
        } else {
            let current = this.root;
            while (current != null) {
                if (value < current.value){
                    if(current.left === null){
                        current.left = newNode
                        return this;
                    } else {
                        current = current.left
                    }
                    //value > current.value
                } else if(value > current.value){
                    if(current.right === null) {
                        current.right = newNode
                        return this;
                    } else {
                        current = current.right;
                    }
                } else {
                    return undefined;
                }
            }
        }
    }

    find(value){
        if (this.root === null) return false

        let current = this.root
        let found = false;

        while (current && !found) {
            if(value < current.value){
                current = current.left
            } else if (value > current.value) {
                current = current.right;
            } else {
                found = true;
            }
        }
        return found ? current : undefined;
    }
}

let bst = new BST();

bst.insert(10)
bst.insert(5)
bst.insert(2)
bst.insert(7)
bst.insert(13)
bst.insert(11)
bst.insert(16)
// console.log(bst.insert(16))
/**
 *         10
 *       5   13
       2  7 11 16
 */     
// console.log(bst)

console.log(bst.find(16))
console.log(bst.find(1600))