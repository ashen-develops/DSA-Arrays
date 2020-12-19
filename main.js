/* eslint-disable no-console */
const Array = require('./array');

function main() {

  Array.SIZE_RATIO = 3;

  // Create an instance of the Array class
  let arr = new Array();

  // Add an item to the array
  arr.push(3);
  arr.push(5);
  arr.push(15);
  arr.push(19);
  arr.push(45);
  arr.push(10);

  console.log(arr);

  arr.pop();
  arr.pop();
  arr.pop();
  arr.pop();

  console.log(arr.get(0));

  arr = [];

  arr.push('tauhida');

  console.log(arr);
}

main();

module.exports = main;


// QUESTIONS 

// What is the length, capacity and memory address of your array?

//Add the following in the main function and then print the array:
// ...
// arr.push(5);
// arr.push(15);
// arr.push(19);
// arr.push(45);
// arr.push(10);