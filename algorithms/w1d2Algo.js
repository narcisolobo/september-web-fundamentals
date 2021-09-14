/*

JavaScript Variables and Datatypes
To create a javascript variable, first use the KEYWORD var.
Following the var keyword, name the variable.
- Names cannot begin with a number
- Names cannot have dashes in them or hyphens
- Names cannot have spaces

Guideline
- Use camel case for names of variables and functions.
- First word begins with a lowercase character, and every word thereafter begins with a capital character.

Datatypes
Primitive datatypes
- Strings (strings of characters signified by quotation marks at the bookends)
- You can use single or double quotes, but both bookends must match
- You can have spaces in strings - it's just another character

- Numbers (in JavaScript, both integers and floating points are both numbers)

- Operators
+ plus
- minus
* multiply
** square
/ division
++ increments by one
-- decrements by one

Booleans (can only hold one of two values - true or false)

*/

// Lesson 1
var myName = 'Narciso Lobo';
var isSleeping = false;

var a = 25;
var b = 35.7;
a = a - 13; // a -> 12
console.log(a/2); // -> 6

a = "hello"; // a -> "hello"
console.log(a + " hello"); // -> "hello hello"

// Lesson 2
for(var i = 0; i < 10; i++) {
  console.log(i);
  i = i + 3; 
}

console.log("outside of the loop " + i);

/*

JavaScript Loops
Four things you need for a JavaScript for loop:
1. Sentry (for example, i)
2. Where that sentry starts
3. Where that sentry ends - with a boolean expression
4. How that sentry changes

Creation of a for loop
Start with the for keyword, followed by parentheses, then satisfy the four requirements and don't forget your semicolons.
After the closing parenthesis, we have curly braces at the beginning and end of the for loop's CODE BLOCK.

Boolean operators:
< less than
> greater than
<= less than or equal to
>= greater than or equal to
== is equal to
=== is strictly equal to

*/

var thing1 = 10;
var thing2 = '10';

console.log(thing1 === thing2);

// Lesson 3
// Predict what the code does

function getTotal(arrayOfNumbers) {
    
  var sum = arrayOfNumbers[0];
    
  for(var i=0; i<arrayOfNumbers.length; i++) {
    sum += arrayOfNumbers[i];
    // sum = sum + arrayOfNumbers[i]
    console.log("the current sum is: " + sum); 
  }
    
  console.log("the total is: " + sum);
    
}

getTotal([1, 3, 5]); // arrays are zero-indexed