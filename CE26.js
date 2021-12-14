class Node {
    constructor(val) {
        this.val = val;
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

    push(val) {
        let newNode = new Node(val)
        if (!this.head) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            newNode.prev = this.tail;
            this.tail = newNode;
        }
        this.length++;
        return this;
    }
}

let doubleLinkedList = new DoublyLinkedList()

console.log(doubleLinkedList.push(5), 'push');
console.log(doubleLinkedList.length, 'length');
console.log(doubleLinkedList.head.val, 'head.val');
console.log(doubleLinkedList.head.prev, 'head.prev');
console.log(doubleLinkedList.push(10), 'push(10)');
console.log(doubleLinkedList.length, 'push(10)');