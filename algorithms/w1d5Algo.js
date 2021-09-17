// Arrays - what are they even?

// Primitive Datatypes - holds only one value
// Number, Strings, Booleans, null, undefined

// Reference Dataypes - can hold more than one value
// Arrays and Objects

// Creation of an array
// Array literal notation
var favoriteColors = ["blue", "red", "orange"]

// Getting a value with bracket notation
// console.log(favoriteColors[1])

// Setting a value with bracket notation
favoriteColors[2] = 'green'


// Mix and match several datatypes in JavaScript arrays
// var seeso = ["Narciso Lobo", 50, true, [1, 2, 4]]
// console.log(seeso[3][1])

// favoriteColors[7] = 'purple'

// Built in JavaScript array methods and properties
// Push, Pop, length

// Push is a method that tacks on a value at the end of the array
favoriteColors.push("pink")
console.log("before pop: ", favoriteColors)

// Pop is method that removes a value from the end of the array and returns it
// favoriteColors.pop()
var lastVal = favoriteColors.pop()
console.log("after pop: ", favoriteColors)
console.log(lastVal)

console.log(favoriteColors.length)

for (var i = 0; i < favoriteColors.length; i++) {
  console.log(favoriteColors[i])
}

var myArray = [5, 2, 8, 1, 9] // -> [9, 1, 8, 2, 5]


// How to swap variables
// var fruit1 = "apples";
// var fruit2 = "oranges";

// fruit2 = fruit1;

// console.log(fruit2 + " and " + fruit1); // -> apples and apples

var fruit1 = "apples";
var fruit2 = "oranges";

var temp = fruit1; // temp is a common name for this (temp = apples)
fruit1 = fruit2; // fruit1 = oranges
fruit2 = temp; // fruit2 = apples

console.log(fruit2 + " and " + fruit1); // -> apples and oranges

// While loops
// Sentry, where it starts, where it ends, and how it changes


var start = 0;
var end = 12;
    
while(start < end) {
    console.log("start: " + start + ", end: " + end);
    start += 2;
    end -= 2;
}

// start: 0, end: 12
// start: 2, end: 10
// start: 4, end: 8

for (var i = 0; i < favoriteColors.length; i++) {
  console.log(favoriteColors[i])
}

var i = 0
while(i < favoriteColors.length) {
  console.log(favoriteColors[i])
  i++
}

// While loops are for when you don't know how long a loop must run, for loops are used when you do.

// Reversing an array
// Write a function reverse(arr) to reverse an array, if we were given...

// ["a", "b", "c", "d", "e"];
// we expect to get back...

// ["e", "d", "c", "b", "a"];

function reverse(arr) {
  for(var i = 0; i < Math.floor(arr.length/2); i++) {
    var temp = arr[i]
    arr[i] = arr[arr.length - 1 - i]
    arr[arr.length - 1 - i] = temp
  }
  return arr
}

console.log(reverse(["a", "b", "c", "d", "e"]))