// liskov substitution principle
// a subclass should be substitutable for its superclass

class Rectangle {
    constructor(width, height) {
      this._width = width;
      this._height = height;
    }
    set width(w) {
      this._width = w;
    }
    get width() {
      return this._width;
    }
    set height(h) {
      this._height = h;
    }
    get height() {
      return this._height;
    }
    get area() {
      return this._width * this._height;
    }
    toString() {
      return `${this._width}×${this._height}`;
    }
  }

  // Better approach is to separate them into two classes
class Square  {
    constructor(size) {
      this._size = size;
    }
    set size(value) {
      this._size  = value;
    }
    get size() {
      return this._size;
    }
    get area (){
        return this._size * this._size;
    }
    toString() {
      return `${this._size}×${this._size}`;
    }
  }
const rectangle = new Rectangle(5, 10);
const square = new Square(5);
console.log(rectangle.area); // 50
console.log(square.area); // 25



// Another explample
class Animal {
  move() {
    console.log('Animal moves');
  }
}

class Bird extends Animal {
  move() {
    console.log('Bird flies');
  }
}

//In this example, bird object can be substituted for an animal object in the makeAnimalMove function and still work correctly, adhering to the LSP.
function makeAnimalMove(animal) {
  animal.move();
}

const bird = new Bird();
makeAnimalMove(bird); // Output: Bird flies
