class Animal {
    constructor(name) {
        this.name = name;
    }

    makeSound() {
        console.log(`${this.name} makes a sound.`);
    }
}

class Dog extends Animal {
    makeSound() {
        console.log(`${this.name} barks.`);
    }
}

class Cat extends Animal {
    makeSound() {
        console.log(`${this.name} meows.`);
    }
}

// objects of different types can be treated as objects of a common type and still produce unique output.

const animals = [new Dog('Buddy'), new Cat('Mittens')];

animals.forEach(animal => animal.makeSound());
