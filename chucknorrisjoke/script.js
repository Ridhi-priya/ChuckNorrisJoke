const jokeEl = document.getElementById('joke')
const jokeBtn = document.getElementById('jokeBtn')
jokeBtn.addEventListener('click', generateJoke)
let a = 1
let tokenAmount

function categories(clickedValue) {
  tokenAmount = clickedValue.id
  document.getElementById('categoryName').innerHTML = tokenAmount
}

async function generateJoke() {
  console.log(tokenAmount)
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  const res = await fetch(
    `https://api.chucknorris.io/jokes/random?category=${tokenAmount}`,
    config
  )

  const data = await res.json()

  jokeEl.innerHTML = data.value
}

generateRendomJoke()

async function generateRendomJoke() {
  const config = {
    headers: {
      Accept: 'application/json',
    },
  }
  const res = await fetch('https://api.chucknorris.io/jokes/random', config)

  const data = await res.json()

  jokeEl.innerHTML = data.value
}
