/**
 * 1. Object API
 */

let ob = { a: 1, b: 2 };

let o = { ...ob };

/**
 * 2. Async-await, and basics of generators
 * First takeaway is that the async labeled function always returns a promise.
 * Second takeaway is that when you declare the function to be a async function, it is then
 * possible to use the await expressions inside the function.
 */

function* f(i) {
  i++;

  yield i++;

  yield i++;

  yield i++;
}

let g = f(10);

console.log(g.next().value); // --> 11
console.log(g.next().value); // --> 12
console.log(g.next().value); // --> 13
