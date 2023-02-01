// inherintance in javascript

// Parent Class
class Person {
    constructor(name, age) {
        this.name = name;
        this.age = age;
    }

    // Method
    showInfo() {
        console.log(`Name: ${this.name} and Age: ${this.age}`);
    }
}

// Child Class
class Student extends Person {
    constructor(name, age, studentId) {
        super(name, age);
        this.studentId = studentId;
    }
}

// Child Class
class Teacher extends Person {
    constructor(name, age, subject) {
        super(name, age);
        this.subject = subject;
    }
}

const student1 = new Student('John', 20, 101);
const teacher1 = new Teacher('Mary', 30, 'Math');

console.log(student1);
console.log(teacher1);