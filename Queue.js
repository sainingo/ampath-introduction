// fifo principle
class NodeList {
    constructor(value, next) {
        this.value = value;
        this.next = null;
    }
}


class LinkedList {
    constructor(head, tail) {
        this.head = null;
        this.tail = null;
    }

    // add to the linkedlist
    add(value) {
        const newNode = new NodeList(value);

        if (this.head === null){
            this.head = newNode;
            this.tail = newNode;
        }
        else {
            this.tail.next = newNode;
            this.tail = newNode;
        }

    }

    // remove from the linkedlist
    remove() {
        if (this.head === null) {
            return null;
        }

        const value = this.head.value;
        this.head = this.head.next;
        return value;
    }

    // peek at the linkedlist
    peek() {
        if (this.head === null) {
            return null;
        }

        return this.head.value;
    }

    //check if the linkedlist is empty
    isEmpty() {
        return this.head === null;
    }
}


const queue = new LinkedList();
queue.add(1);
queue.add(2);
// queue.add(3);

console.log(queue.remove());
console.log(queue.remove());

console.log(queue.peek());

queue.add(3);
queue.add(4);

console.log(queue.peek())
console.log(queue.isEmpty());
