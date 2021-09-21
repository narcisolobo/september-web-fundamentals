var tartLikes = document.querySelector('#tart-likes')
var tartLikesNum = 68
tartLikes.innerText = tartLikesNum

var macaroonLikes = document.querySelector('#macaroon-likes')
var macaroonLikesNum = 212
macaroonLikes.innerText = macaroonLikesNum

var bruleeLikes = document.querySelector('#brulee-likes')
var bruleeLikesNum = 33
bruleeLikes.innerText = bruleeLikesNum

var search = document.querySelector('#search')

console.log(tartLikes)

function remove(element) {
  element.remove()
}

function increaseLikes(element) {
  if(element == tartLikes) {
    tartLikesNum++
    tartLikes.innerText = tartLikesNum
  }
  else if (element == macaroonLikes) {
    macaroonLikesNum++
    macaroonLikes.innerText = macaroonLikesNum
  } else {
    bruleeLikesNum++
    bruleeLikes.innerText = bruleeLikesNum
  }
}

function searchText() {
  alert("You are searching for " + search.value)
}