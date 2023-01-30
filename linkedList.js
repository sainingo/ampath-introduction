// linear data structure that is non-contiguous

class Node {
    constructor(value) {
        this.value = value;
        this.next = null;
    }
}

class LinkedList {
    constructor() {
        this.head = null;
        this.tail = null;
    }

    // add item to the node
    add(value) {
        const newNode = new Node(value)

        if(this.head === null) {
            this.head = newNode;
            this.tail = newNode;
        } else {
            this.tail.next = newNode;
            this.tail = newNode;
        }



    }

    // remove items
    remove() {
        if(this.head === null) {
            return null;
        }

        if(this.head === this.tail) {
            this.tail = null;
        }

        this.head = this.head.next;
    }

    //search
    search(value) {
        let currentNode = this.head;

        while(currentNode) {
            if(currentNode.value === value) {
                return currentNode;
            }

            currentNode = currentNode.next;
        }

        return null;
    }
}

const list = new LinkedList();

list.add(1);
list.add(2);
list.add(3);

console.log(list);

console.log('search:', list.search(1));

list.remove();

console.log(list);