// OBJECTS - WHAT ARE THEY EVEN???
// Reference datatype - they can hold more than one value

// Objects in JS are like objects in real life.
// They have characteristics and things they can do.

// Car
// Characteristics - make, model, color, number of doors, etc.
// Things it can do - beep, drive, accelerate

// Characteristics are called properties in JavaScript
// Things that it can do are called methods in JavaScript
// Methods are just functions that belong to objects

// Object literal notation to create an object
// Key - value pairs

var myCar = {
  "make": "Jeep",
  "model": "Wrangler",
  "color": "blue",
  "numberOfDoors": 2,
  "beep": function(){
    console.log("Beep beep!")
  },
  "showStats": function() {
    console.log("Make: " + this.make)
    console.log("Model: " + this.model)
  }
}

// Getting and setting values in an object

// Bracket notation getting value
// console.log(myCar["model"])

// Bracket notation setting value
// myCar["color"] = "red"

// Dot notation
console.log(myCar.model)
myCar.color = "red"

console.log(myCar)

myCar.beep()
myCar.showStats()