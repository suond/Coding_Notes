/**
 * array n
 *  index i -> left-child = 2n+1, right-child 2n+2
 * 
 * index i -> parent-node = (i-1) / 2 floor
 */

class MaxBinaryHeap {
    constructor(sort, arr){
        const sortASCENDING = () => a-b
        this.sort = sort || sortASCENDING
        this.values = arr || []
        // this.values = [41,39,33,18,27,12]
    }

    insert(value){
        this.values.push(value);
        //bubble up
        this.bubbleUp()
        return this.values;
    }

    bubbleUp(){
        let idx = this.values.length - 1
        let last = this.values[idx]
        while (idx > 0){
            let parentIdx = Math.floor( (idx - 1) / 2) 
            let parent = this.values[parentIdx]
            if (last <= parent) break
            this.values[parentIdx] = last
            this.values[idx] = parent;
            idx = parentIdx
        }
    }
    
    extractMax(){
        if(!this.values.length) return null;
        if(this.values.length === 1) return this.values.pop()
        const max = this.values[0]
        const end = this.values.pop();
        this.values[0] = end;
        this.bubbleDown()
        return max;
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
                if (leftChild > element){
                    swap = leftChildIdx;
                }
            }
            if(this.values[rightChildIdx]){
                rightChild = this.values[rightChildIdx]
                if (  (swap === null && rightChild > element) || 
                      (swap !== null && rightChild > leftChild)   ) {
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

let heap = new MaxBinaryHeap()
// heap.insert(55)
// heap.insert(30)
// heap.insert(130)
// heap.extractMax() //55
// heap.extractMax() //39
// heap.extractMax() //27
// heap.extractMax() //33
// heap.extractMax() //18
// heap.extractMax() //12
// console.log(heap.extractMax()) //undefinied

// console.log(heap.values)

exports.Heap = MaxBinaryHeap;