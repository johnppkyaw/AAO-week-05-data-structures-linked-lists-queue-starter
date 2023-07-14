// Basic implementation of Nodes and Linked List for you to use

class SinglyLinkedNode {
    constructor(val) {
        this.value = val;
        this.next = null;
    }
}

class SinglyLinkedList {
    constructor(head = null) {
        this.head = head;
    }

    addToTail(val) {
        let newNode = new SinglyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            return this.head;
        }

        let curr = this.head;
        while (curr.next) {
            curr = curr.next;
        }

        curr.next = newNode;
        return this.head;
    }

    listLength() {
        if (!this.head) {
            return 0;
        }
        let count = 1;
        let currNode = this.head;
        while(currNode.next) {
            currNode = currNode.next;
            count++;
        }
        return count;
        // Returns the length of the list
        // Implement in O(n) and in O(1) time complexity
    }

    sumOfNodes() {
        if (this.listLength() === 0) {
            return 0;
        }
        let sum = this.head.value;
        let currNode = this.head;
        while(currNode.next) {
            currNode = currNode.next;
            sum += currNode.value;
        }
        return sum;

        // Returns the sum of the values of all the nodes

        // Write your hypothesis on the time complexity of this method here
        //O(N)
    }

    averageValue() {
        return this.sumOfNodes()/this.listLength();
        // Returns the average value of all the nodes

        // Write your hypothesis on the time complexity of this method here
        //O(N)
    }

    findNthNode(n) {
        let currNode = this.head;
        while (n > 0) {
            if(!currNode.value) {
                return null;
            }
            currNode = currNode.next;
            n--;
        }
        return currNode;
        // Returns the node at the nth index from the head

        // Write your hypothesis on the time complexity of this method here
        //O(N)
    }

    findMid() {
        const length = this.listLength();
        let mid;
        if (length % 2 === 0) {
            mid = length / 2;
        } else {
            mid = Math.ceil(length / 2);
        }
        return this.findNthNode(mid - 1);
        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
        //O(N);
    }

    reverse() {
        const newLinkedList = new SinglyLinkedList();
        let curr = this.head;
        let prev = null;
        while (curr) {
            const newNode = new SinglyLinkedNode(curr.value);
            newNode.next = prev;
            prev = newNode;
            curr = curr.next;
        }
        newLinkedList.head = prev;
        return newLinkedList;

        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
        //O(N);
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let curr = this.head;
        let prev = null;
        while (curr) {
            const next = curr.next;
            curr.next = prev;
            prev = curr;
            curr = next;
        }
        this.head = prev;
        return this;
        // Write your hypothesis on the time complexity of this method here
        //O(N)
    }
}

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
    }

    addToTail(val) {
        let newNode = new DoublyLinkedNode(val);

        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
            return this.head;
        }

        this.tail.next = newNode;
        newNode.prev = this.tail;
        this.tail = newNode;

        return this.head;
    }

    findMid() {
        let head = this.head;
        let tail = this.tail;
        while(head !== tail) {
            if (head.next === tail) {
                return head;
            }
            head = head.next;
            tail = tail.prev;
        }
        return head;

        // Returns the middle node
        // Implement this as a singly linked list then as a doubly linked list
            // How do the implementation for singly and doubly vary if at all?

        // Write your hypothesis on the time complexity of this method here
    }

    reverse() {
        const newDoubleLinkedList = new DoublyLinkedList();
        let tailEnd = this.tail;
        while(tailEnd) {
            newDoubleLinkedList.addToTail(tailEnd.value);
            tailEnd = tailEnd.prev;
        }
        return newDoubleLinkedList;
        // Returns a new reversed version of the linked list

        // Write your hypothesis on the time complexity of this method here
        //O(N)
    }

    reverseInPlace() {
        // Reverses the linked list in-place
        let curr = this.head;
        let temp = null;
        while(curr) {
            temp = curr.prev;
            curr.prev = curr.next;
            curr.next = temp;
            curr = curr.prev;
        }
        this.head = temp.prev;
        return this;
        // Write your hypothesis on the time complexity of this method here
    }
}

module.exports = {
    SinglyLinkedNode,
    SinglyLinkedList,
    DoublyLinkedNode,
    DoublyLinkedList
}
