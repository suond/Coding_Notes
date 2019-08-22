//B(O) = log(n) insert, removal
//B(O) = n search don't use this for search

class Node{
    constructor(value, priority){
        this.value = value
        this.priority = priority
    }
}

class PriorityQueue {
    constructor(){    
        this.values = []
        
    }

    enqueue(value, priority){
        let newNode = new Node(value, priority);
        this.values.push(newNode);
        //bubble up
        this.bubbleUp();
        return this.values;
    }

    bubbleUp(){
        let idx = this.values.length - 1
        let element = this.values[idx]
        while (idx > 0){
            let parentIdx = Math.floor( (idx - 1) / 2) 
            let parent = this.values[parentIdx]
            if (element.priority >= parent.priority) break
            this.values[parentIdx] = element
            this.values[idx] = parent;
            idx = parentIdx
        }
    }
    
    dequeue(){
        if(!this.values.length) return null;
        if(this.values.length === 1) return this.values.pop()
        
        const first = this.values[0]
        const end = this.values.pop();
        this.values[0] = end;
        this.bubbleDown()
        return first;
    }

    bubbleDown(idx){
        let index = idx || 0;

        const element = this.values[index];

        while(true){
            let leftChildIdx = 2 * index + 1
            let rightChildIdx = 2 * index + 2
            let leftChild;
            let rightChild;
            let swap = null; //tracks the swap index for the larger of the two child
            if(this.values[leftChildIdx]){
                leftChild = this.values[leftChildIdx]
                if (leftChild.priority < element.priority){
                    swap = leftChildIdx;
                }
            }
            if(this.values[rightChildIdx]){
                rightChild = this.values[rightChildIdx]
                if (  (swap === null && rightChild.priority < element.priority) || 
                      (swap !== null && rightChild.priority < leftChild.priority)   ) {
                    swap = rightChildIdx
                }
            }
            if(swap === null ) break;
            this.values[index] = this.values[swap]
            this.values[swap] = element;
            index = swap;
        }
    }
}

let ER = new PriorityQueue();

ER.enqueue("blood wound", 3)
ER.enqueue("cold", 6)
ER.enqueue("fever", 6)
ER.enqueue("stroke", 1)
ER.enqueue("poop", 10)

console.log(ER)
console.log(ER.dequeue())
