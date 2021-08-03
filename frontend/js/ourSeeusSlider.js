import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'
let images = []

const pag = document.querySelector('.swiper-pagination-2')
if (pag !== null) {
  pag.classList.add('.swiper-pagination')
}

const nextButton = document.querySelector('.swiper-button-next-2')
if (nextButton !== null) {
  nextButton.classList.add('swiper-button-next')
}

const prevButton = document.querySelector('.swiper-button-prev-2')
if (prevButton !== null) {
  prevButton.classList.add('swiper-button-prev')
}

const swiper = new Swiper(document.querySelector('.mySwiper2'), {
  spaceBetween: 30,
  centeredSlides: true,
  autoplay: {
    delay: 2500,
    disableOnInteraction: false,
  },

  navigation: {
    nextEl: document.getElementsByClassName('swiper-button-next')[1],
    prevEl: document.getElementsByClassName('swiper-button-prev')[1],
  },
  pagination: {
    el: pag,
    clickable: true,
  },
})

const isLogin = () => {
  if (
    localStorage.getItem('login') === null &&
    window.location.href !== 'http://localhost:5000/index.html' &&
    window.location.href != 'http://localhost:5000/'
  ) {
    window.location.href = '/login.html'
  }
}
isLogin()

const reloadImages = async () => {
  const response = await fetch('/api/seeus', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  const resData = await response.json()
  images = resData
  setImagesUI()
}
window.addEventListener('load', reloadImages())

const setImagesUI = () => {
  const card = document.querySelector('.slider-seeus')
  let elements = ''
  images.forEach((image) => {
    elements += `<div class="card" style="width: 18rem;">
      <img src="${image.route}" class="card-img-top" alt="none">
      <div class="card-body">
  
          <p class="card-text">${image.route}</p>
          <button id="${image._id}"  class="btn btn-danger" onclick="deleteButton(event)">Delete</button>
      </div>
  </div>`
  })
  if (card !== null) {
    card.innerHTML = elements
  }
  if (swiper !== undefined) {
    images.forEach((image) => {
      swiper.prependSlide(`<div class="swiper-slide">
        <img class="slider-img-drag" src="${image.route}"
            style="width:100%">
    </div>`)
    })
  }
}

async function fileuploadSeeus(e) {
  const file = e.target.files[0]
  const formData = new FormData()
  formData.append('image', file)
  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  })
  const resData = await response.json()

  images.push(resData.route)

  setImageBd(resData)
}

const setImageBd = async (data) => {
  const res = await fetch('/api/seeus', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
  const image = await res.json()
  window.addEventListener('load', reloadImages())
}

const deleteButton = async (event) => {
  const res = await fetch(`/api/seeus/${event.target.id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
  reloadImages()
}
