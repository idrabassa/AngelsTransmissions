import Swiper from 'https://unpkg.com/swiper/swiper-bundle.esm.browser.min.js'

let imagesService = []

const swiper = new Swiper(document.querySelector('.mySwiper'), {
  pagination: {
    el: document.querySelector('.swiper-pagination'),
    type: 'progressbar',
  },
  navigation: {
    nextEl: document.querySelector('.swiper-button-next'),
    prevEl: document.querySelector('.swiper-button-prev'),
  },
})

const isLoginService = () => {
  console.log(window.location.href)
  if (
    localStorage.getItem('login') === null &&
    window.location.href !== 'http://localhost:5000/index.html' &&
    window.location.href != 'http://localhost:5000/'
  ) {
    window.location.href = '/login.html'
  }
}
isLoginService()

const reloadImagesService = async () => {
  const response = await fetch('/api/services', {
    method: 'GET',
    headers: { 'Content-Type': 'application/json' },
  })
  const resData = await response.json()
  imagesService = resData
  setImagesUIServices()
}
window.addEventListener('load', reloadImagesService())

const setImagesUIServices = () => {
  const card = document.querySelector('.slider-services')
  let elements = ''
  imagesService.forEach((image) => {
    elements += `<div class="card" style="width: 18rem;">
      <img src="${image.route}" class="card-img-top" alt="none">
      <div class="card-body">
  
          <p class="card-text">${image.route}</p>
          <button id="${image._id}" class="btn btn-danger" onclick="deleteButtonService(event)">Delete</button>
      </div>
  </div>`
  })
  if (card !== null) {
    card.innerHTML = elements
  }

  if (swiper !== undefined) {
    imagesService.forEach((image) => {
      swiper.prependSlide(`<div class="swiper-slide">
        <img class="slider-img-drag" src="${image.route}"
            style="width:100%">
    </div>`)
    })
  }
}

async function fileuploadServices(e) {
  const file = e.target.files[0]
  const formData = new FormData()
  formData.append('image', file)

  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
  })
  const resData = await response.json()

  imagesService.push(resData.route)

  setImageBdService(resData)
  sliderServices.innerHTML = `<div class="swiper-slide"><img class="slider-img-drag"
  src="./img/transmission-cutaway-_19_2048x2048.jpeg" style="width:100%"></div>`
}

const setImageBdService = async (data) => {
  const res = await fetch('/api/services', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
  const image = await res.json()
  window.addEventListener('load', reloadImagesService())
}

const deleteButtonService = async (event) => {
  const res = await fetch(`/api/services/${event.target.id}`, {
    method: 'DELETE',
    headers: { 'Content-Type': 'application/json' },
  })
  reloadImagesService()
}
