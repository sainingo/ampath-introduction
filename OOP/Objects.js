// objects can be created in two ways

// 1. using object literal

let person = {
    name: 'John',
    age: 30,

    // method
    greet: function() {
        console.log('Hello');
    }
};

console.log(firstName); // John
console.log(person.age); // 30
person.greet(); // Hello

// 2. using new keyword

function Person(name, age) {
    this.name = name;
    this.age = age;
}

let person1 = new Person('John', 30);
let person2 = new Person('Mary', 25);

console.log(person1.name); // John