// Always isSunny

var isSunny = true;
var temperature = 45; // let's assume degrees Fahrenheit
var isRaining = false;
var whatToBring = "I should bring: ";

if (isSunny) {
  // whatToBring = whatToBring + "sunglasses, ";
  whatToBring += "sunglasses, "; // -> "I should bring: sunglasses, "
}
if (temperature < 50) {
  whatToBring += "a coat, "; // -> "I should bring: sunglasses, a coat, "
}
if (isRaining) {
  whatToBring += "an umbrella, ";
}
whatToBring += "and a smile!";

console.log(whatToBring);

// I should bring: sunglasses, a coat, and a smile!

// Prepare for downcount
for (var i = 10; i > 0; i--) {
  if (i != 2) {
    console.log(i);
  } else {
    console.log("ignition!");
  }
}

console.log("liftoff!");

// 10, 9, 8, 7, 6, 5, 4, 3, ignition, 1, liftoff!

// Count positives
var countPositives = 0;
var numbers = [3, 4, -2, 7, 16, -8, 0];

// your code here!

console.log("there are " + countPositives + " positive values");

/*

Conditional statements (If statements)

Start with the if keyword, followed by a conditional statement within parentheses.
The if statement may or may also contain one or more else if's
But may contain only one else if needed

*/

// FIZZBUZZ
// For the integers 1 - 100, print the integer.
// If the integer is a multiple of 3, print "Fizz" instead of the integer
// If the integer is a multiple of 5, print "Buzz" instead of the integer
// If the integer is a multiple of both 3 AND 5, print "FizzBuzz" instead of the integer

// NEW OPERATOR - MODULUS/MODULO %
// 10 % 2 -- returns a 0
// 9 % 2 -- returns a 1


for (var i = 1; i < 101; i++) {
  if (i % 3 == 0 && i % 5 == 0) {
    console.log("FizzBuzz");
  }
  else if (i % 5 == 0) {
    console.log("Buzz");
  }
  else if (i % 3 == 0) {
    console.log("Fizz");
  } else {
    console.log(i)
  }
}