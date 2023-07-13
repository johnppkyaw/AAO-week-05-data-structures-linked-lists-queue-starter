// Node class is implemented for you, no need to look for bugs here!
class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor() {
        this.head = null;
        this.length = 0;
    }

    addToHead(val) {
        // Add node of val to head of linked list
        this.length++;
        const newNode = new SinglyLinkedNode(val);
        newNode.next = this.head;
        this.head = newNode;
        return this;
        // Write your hypothesis on the time complexity of this method here
        //time complexity: 0(1)
    }

    addToTail(val) {
        // There are bugs in this method! Fix them!!!
        // Write your hypothesis on the time complexity of this method here
        //0(N) as each method call, you have to traverse the list

        // Add node of val to tail of linked list
        this.length++;
        const newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }
        curr.next = newNode;
        return this;
    }

    removeFromHead() {
        // Remove node at head
        if(this.head) {
            this.length--;
            const removed = this.head;
            this.head = this.head.next;
            return removed;
        }
        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    removeFromTail() {
        // Remove node at tail
        if(this.head) {
            this.length--;
            let curr = this.head;
            let removed;
            if (this.length === 0) {
                this.head = null;
                return curr;
            }
            while (curr.next.next) {
                curr = curr.next;
            }
            removed = curr.next;
            curr.next = null;
            return removed;
        }
        // Write your hypothesis on the time complexity of this method here
        //O(1)
    }

    peekAtHead() {
        // Return value of head node
        if(this.head) {
            return this.head.value;
        }
        // Write your hypothesis on the time complexity of this method here
    }

    print() {
        // Print out the linked list
        if(this.length > 0) {
            let currentNode = this.head;
            while(currentNode) {
                console.log(currentNode.value);
                currentNode = currentNode.next;
            }
        }


        // Write your hypothesis on the time complexity of this method here
        //O(N)
    }
}

module.exports = {
    SinglyLinkedList,
    SinglyLinkedNode
}
