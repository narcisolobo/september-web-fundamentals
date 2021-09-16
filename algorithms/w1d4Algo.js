// FUNCTIONS - WHAT ARE THEY EVEN?
// A function is a series of steps designed to accomplish a task.

// Like a recipe.

// To create a function, use the keyword function
// Following the keyword, name the function
// As a guideline, name functions using camelcase
// Cannot begin with a number
// Cannot have spaces
// Cannot have hyphens or dashes

// Following the name of the function, we have parentheses
// Inside the parentheses, we have the parameters of the function - or the recipe's necessary ingredients
// Following the closing parenthesis, we have our code block with curly brackets at the bookends

// FUNCTION DECLARATION

var x = 5;

function setX(newValue) {
  var x = newValue;
}

console.log(x); // -> 5
setX(15); // -> arguments
console.log(x); // -> 15

// When you create a variable using the keyword var, that variable has scope! The scope depends on where that variable was created.

// Global Scope or Function Scope
// 5, 15, 5

// The Return of Return

var x = 5;

function addToX(amount) {
  console.log("hello there");
  return x + amount;
}

// The value of a function is whatever that function RETURNS

console.log(x); // -> 5
var result = addToX(-10); // -> nothing will be printed
console.log(result); // -> -5
console.log(x); // -> 5

// Code Flow - Is the Array a Palindrome
// A palindrome is a word that is spelled the same if read forwards or backwards. Some excellent palindrome examples are:

// racecar
// tacocat
// But in our case we'll be looking at some arrays, can the values in the array be read the same forwards as backwards

function isPal(arr) {
  for (var left = 0; left < arr.length / 2; left++) {
    var right = arr.length - 1 - left;
    if (arr[left] != arr[right]) {
      return "Not a pal-indrome!";
    }
  }
  return "Pal-indrome!";
}

var result1 = isPal([1, 1, 2, 2, 1]);
console.log(result1);

var result2 = isPal([3, 2, 1, 1, 2, 3]);
console.log(result2);

// Challenge - Rewrite the algo for strings instead of arrays.