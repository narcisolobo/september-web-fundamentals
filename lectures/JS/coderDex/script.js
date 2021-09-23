var currentUsername = ''
var cardsContainer = document.querySelector('#cards-container')

function getUsername(element) {
  // console.log(element.value)
  currentUsername = element.value
  // Template Literal Notation
  console.log(`Current username: ${currentUsername}`)
}

function makeCoderCard(data) {
  var card =
`<div class="card">
  <img class="card-image" src="${data.avatar_url}" alt="${data.login}">
  <div class="card-body">
      <h3>${data.name}</h3>
      <h4>${data.login}</h4>
      <p>Location: ${data.location}</p>
      <p>Repositories: ${data.public_repos}</p>
  </div>
</div>`
  return card
}

async function search(e) {
  e.preventDefault()
  var response = await fetch(`https://api.github.com/users/${currentUsername}`)
  var coderData = await response.json()
  console.log(coderData)
  cardsContainer.innerHTML = makeCoderCard(coderData) + cardsContainer.innerHTML
}