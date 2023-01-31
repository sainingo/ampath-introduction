const arrayValues = new Array(1, 2, 3, 4, 5);

// methods of array

// push
arrayValues.push(6);

// pop
arrayValues.pop(); // removes last element

// unshift
arrayValues.unshift(0); // adds element to the beginning of the array

// shift
arrayValues.shift(); // removes first element

// splice
arrayValues.splice(2, 0, 3.5); // adds element to the array at the specified index
// console.log(arrayValues); // [ 1, 2, 3.5, 3, 4, 5 ]

// slice
const slicedArray = arrayValues.slice(2, 4); // returns new array
// console.log(slicedArray); // [ 3.5, 3 ]

// concat
const arrayValues2 = new Array(6, 7, 8, 9, 10);
const concatArray = arrayValues.concat(arrayValues2); // returns new array
// console.log(concatArray); // [ 1, 2, 3.5, 3, 4, 5, 6, 7, 8, 9, 10 ]

// includes
const includes = arrayValues.includes(3.5); // returns boolean
// console.log(includes); // true

// indexOf
const indexOf = arrayValues.indexOf(3.5); // returns index of the element
// console.log(indexOf); // 2

// lastIndexOf
const lastIndexOf = arrayValues.lastIndexOf(3.5); // returns last index of the element
// console.log(lastIndexOf); // 2

// join
const join = arrayValues.join(" "); // returns string
// console.log(join); // 1 2 3.5 3 4 5

// reverse
const reverse = arrayValues.reverse(); // returns new array
// console.log(reverse); // [ 5, 4, 3, 3.5, 2, 1 ]

// sort
const sort = arrayValues.sort(); // returns new array
// console.log(sort); // [ 1, 2, 3, 3.5, 4, 5 ]

// forEach
arrayValues.forEach((el) => {
  console.log(el);
})
// 1
// 2
// 3
// 3.5
// 4
// 5
