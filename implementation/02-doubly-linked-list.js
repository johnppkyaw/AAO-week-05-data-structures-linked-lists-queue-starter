// Node class is implemented for you, no need to look for bugs here!
class DoublyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
        this.prev = null;
    }
}

class DoublyLinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
        this.length = 0;
    }

    addToHead(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        //O(1)

        // Add node of val to head of linked list
        const newNode = new DoublyLinkedNode(val);

        if (this.length > 0) {
            newNode.next = this.head;
            this.head.prev = newNode;
            this.head = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }

        this.length++;
    }

    addToTail(val) {
        // Add node of val to tail of linked list
        const newNode = new DoublyLinkedNode(val);
        if (this.length > 0) {
            newNode.prev = this.tail;
            this.tail.next = newNode;
            this.tail = newNode;
        } else {
            this.head = newNode;
            this.tail = newNode;
        }
        this.length++;

        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    removeFromHead() {
        // Remove node at head
        if (this.length > 0) {
            this.length--;
            const removed = this.head.value;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
                return removed;
            }
            this.head = this.head.next;
            this.head.prev = null;
            return removed;
        }

        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if (this.length > 0) {
            this.length--;
            const removed = this.tail.value;
            if (this.length === 0) {
                this.head = null;
                this.tail = null;
                return removed;
            }
            this.tail = this.tail.prev;
            this.tail.next = null;
            return removed;
        }

        // Write your hypothesis on the time complexity of this method here
    }

    peekAtHead() {
        // Return value of head node
        if (this.length > 0) {
            return this.head.value;
        }

        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    peekAtTail() {
        // Return value of tail node
        if (this.length > 0) {
            return this.tail.value;
        }
        // Write your hypothesis on the time complexity of this method here
        //0(1)
    }
}

module.exports = {
    DoublyLinkedList,
    DoublyLinkedNode
}
