const counter = document.getElementById('counter')
const qr = document.getElementById('qr')
const button = document.getElementById('button')
let daysLeft = 365

counter.textContent = daysLeft

window.setInterval(function() {
  fetch('https://api.khlebniy.com.ua/promo/365')
    .then(response => response.json())
    .then(json => (daysLeft = json.data))
    .then((counter.textContent = daysLeft))
  // counter.textContent = Math.round(Math.random(365) * 1000)
}, 1000)

qr.onclick = () => {
  qr.classList.toggle('hide')
  button.classList.toggle('hide')
}

button.onclick = () => {
  fetch('https://api.khlebniy.com.ua/promo/365', {
    method: 'PATCH',
    headers: {
      Accept: 'application/json',
      'Content-Type': 'application/json'
    },
    body: JSON.stringify({ data: daysLeft - 1 })
  })
    .then(response => response.json())
    .then(json => (daysLeft = json.data))
    .then((counter.textContent = daysLeft))

  qr.classList.toggle('hide')
  button.classList.toggle('hide')
}
