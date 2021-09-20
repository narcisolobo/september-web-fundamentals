var result4 = document.querySelector('#result4')
var result5 = document.querySelector('#result5')
var result6 = document.querySelector('#result6')

// console.log(result4)
// console.log(result5)

function logger(){
  console.log("you clicked me!")
}

function changeButton(element) {
  element.innerText = "You clicked me."
}

function messager(element) {
  if (element == result4) {
    element.innerText = "You clicked button 4."
  }
  else if (element == result5) {
    element.innerText = "You clicked button 5."
  } else {
    element.innerText = "You clicked button 6."
  }
}

function messagePrint(element) {
  console.log(element.value)
}