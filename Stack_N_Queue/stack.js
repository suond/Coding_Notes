//LIFO - last in first out 
//array implementation
//unshift to push to front of array
//shift to remove from front of array
class Stack {
    constructor() {
        this.stack = []
    }

    push(ele) {
        this.stack.push(ele)
    }

    pop() {
        return this.stack.pop();
    }

}

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class StackLinkedList{
    constructor() {
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    push(value){
        let newNode = new Node(value);
        if(this.size === 0){
            this.first = newNode
            this.last = newNode
        } else {
            let temp = this.first;
            this.first = newNode;
            this.first.next = temp;
        }
        return ++this.size
    }

    pop(){
        if (this.size === 0) return null
        
        let returnedNode = this.first;
        
        this.first = this.first.next;
        this.size--;
        if(this.size === 0){
            this.first = null;
            this.last = null;
        }
        return returnedNode.value;
    }
}

let stack = new StackLinkedList();

stack.push(10)
stack.push(12)

console.log(stack)
console.log("before pop")

stack.pop()
console.log("after pop")
console.log(stack)