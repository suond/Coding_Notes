//FIFO First in first out

class Node{
    constructor(value){
        this.value = value;
        this.next = null;
    }
}

class Queue{
    constructor(){
        this.first = null;
        this.last = null;
        this.size = 0;
    }

    enqueue(value){
        let newNode = new Node(value)
        if (this.size === 0 ) {
            this.first = newNode;
            this.last = newNode;
        } else {
            this.last.next = newNode;
            this.last = newNode;
        }
        return ++this.size;
    }

    dequeue(){
        if(this.size === 0) return null;

        let returned = this.first;
        this.first = this.first.next;
        this.size--;

        if (this.size === 0){
            this.first = null;
            this.last = null;
        }

        return returned.value;
    }
}