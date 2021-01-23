/**
 * 1. Fat-arrow functions
The most important difference between the normal functions and the fat-arrow functions is that 
the fat-arrow functions do not have their own 'this', and always the 'this' value of the enclosing
lexical scope is used.
 */

// Example 1
let o = {
  t: this, // wrong usage
  normalFunction: function () {
    return this;
  },
  arrowFunction: () => {
    return this;
  },
};

//console.log(o.normalFunction(this)); // -->  o object

//console.log(o.arrowFunction(this)); // --> global object

// Example 2
window.prop = "global lexical scope";

class Ob {
  constructor() {
    this.prop = "local lexical scope";
  }

  normalFunction = function () {
    return this.prop;
  };

  arrowFunction = () => {
    return this.prop;
  };
}

let ob = new Ob();

console.log(ob.normalFunction());
console.log(ob.arrowFunction());
console.log(ob.normalFunction.call(this));
console.log(ob.arrowFunction.call(this));

/**
 * 2. Object and Array destructuring
 */

// Example 1 -- object destructuring
let obj = {
  a: 1,
  b: 2,
  c: 3,
};

let { a, b } = obj;

// Example 2 -- array destructuring
let arr = [1, 2, 3];

let [one, two] = arr;

// console.log(one, two);

/**
 * 3. Rest and Spred operator
 * This is in fact one operator that acts differently and according to the context it was called
 * The thing to remeber is, this oprator acts like a spread operator in the function expressions and
 * and like rest operator in function declaration statements, object assignment statement and array
 * assignment statement.
 */

// Example 1 -- rest operator
let addNumber = function (a, ...args) {
  // do something with args
  return args.map((el) => {
    return a + el;
  });
};

let arr2 = addNumber(2, 3, 4);

//console.log(arr2); // --> [5, 6]

// Example 2 -- spread operator
let arr3 = [1, 2, 3];

Math.max(...arr3);

/**
 * 4. String literals and padded string literals
 */

// Example 1 -- string literal
let number = 100;

let message = `The number is ${number}`;

// let message = "<div>The number is </div>" + "<p>" + number + "</p>";

//console.log(message);

// Example 2 -- string literal padded
let tag = "div";
function tagging(strings, tag) {
  if (tag === "div") {
    return `<div>${strings[0]} ${tag} ${strings[1]}</div>`;
  } else {
    return `<span>${strings[0]} ${tag} ${strings[1]}</span>`;
  }
}

let message = tagging`This is a ${tag} template expression`;

console.log(message);
