// interface segregation principle
// a client should never be forced to implement an interface that it doesn't use

// Bad approach
class Animal {
    constructor(name) {
        this.name = name;
    }
    walk() {
        console.log(`${this.name} is walking`);
    }
    swim() {
        console.log(`${this.name} is swimming`);
    }
    fly() {
        console.log(`${this.name} is flying`);
    }
}

const dog = new Animal("dog");
dog.walk(); // dog is walking
dog.swim(); // dog is swimming which is a problem
dog.fly(); // dog is flying which is a problem

// Better approach is to separate them into two classes
class Bird {
    constructor(name) {
        this.name = name;
    }
    fly() {
        console.log(`${this.name} is flying`);
    }
}

class Fish {
    constructor(name) {
        this.name = name;
    }
    swim() {
        console.log(`${this.name} is swimming`);
    }
}

const bird = new Bird("bird");
bird.fly(); // bird is flying
