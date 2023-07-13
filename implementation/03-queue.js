const { SinglyLinkedNode } = require("./01-singly-linked-list");

class Queue {

    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    enqueue(val) {
        // Add node to end of queue (linked list)
        const newNode = new SinglyLinkedNode(val);
        if(this.tail) {
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        return ++this.length;

        // Write your hypothesis on the time complexity of this method here
        //O(1);
    }

    dequeue() {
        if (this.length > 0) {
            this.length--;
            const dequeued = this.head.value;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
                return dequeued;
            }
            this.head = this.head.next;
            return dequeued;
        } else {
            return null;
        }
        // Remove node from front of queue (linked list)

        // Write your hypothesis on the time complexity of this method here
        // O(1);
    }

}

module.exports = {
    Queue,
    SinglyLinkedNode
}
