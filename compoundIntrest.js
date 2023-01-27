
let principal = 5000;
let rate = 0.05;
let years = 5;
let n = 2;
let amount = principal * Math.pow(1 + rate / n, n * years);
let ci = amount - principal;
console.log(ci);
