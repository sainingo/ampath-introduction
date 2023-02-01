// implementation of class in js

class Cars {
    constructor(name, model, color) {
        this.name = name;
        this.model = model;
        this.color = color;
    }
    getCar() {
        return `The car is ${this.name} ${this.model} ${this.color}`;
    }
}

const car1 = new Cars('BMW', 'X5', 'Black');
const car2 = new Cars('Mercedes', 'C200', 'White');

console.log(car1.getCar());