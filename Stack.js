//last in first out 

class Stack {
    constructor(stack) {
        this.stack = [];
    }

    // add item
    add(value) {
        this.stack.push(value);
    }

    // remove
    remove() {
        return this.stack.pop();
    }

    // peek 
    peek() {
        return this.stack[this.stack.length -1];
    }
}

const newStack = new Stack();

newStack.add(1);
newStack.add(2);
newStack.add(3);

console.log(newStack);
console.log(newStack.remove()); 

console.log(newStack);
console.log(newStack.peek());
