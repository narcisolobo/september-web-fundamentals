function proof() {
  console.log("this is proof that this message is coming from script.js")
}

function surprise(button) {
  button.innerHTML = "SURPRISE!"
  button.style.backgroundColor = "green"
}

var puppy = document.querySelector('#dave')

function disappear(element) {
  element.remove()
}

var numBoops = 10
var boops = document.querySelector('#boops')

boops.innerText = numBoops

function increaseBoop() {
  numBoops++
  boops.innerText = numBoops
}