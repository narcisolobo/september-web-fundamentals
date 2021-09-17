console.dir(this);

var heading = document.querySelector('h1');
var subtitle = document.querySelector('#subtitle');

console.log(heading.innerText);
console.log(subtitle.innerText);

heading.innerText = "This has been changed in script.js";
heading.style.backgroundColor = "blue";

// Manipulate the DOM
