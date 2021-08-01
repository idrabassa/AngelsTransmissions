// var swiper = new Swiper('.mySwiper', {
//   pagination: {
//     el: '.swiper-pagination',
//     type: 'progressbar',
//   },
//   navigation: {
//     nextEl: '.swiper-button-next',
//     prevEl: '.swiper-button-prev',
//   },
// })
let imagesService = []
let divServicesSlider = []

const isLoginService = () => {
  if (localStorage.getItem('login') === null) {
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
          <a id="${image._id}" href="#" class="btn btn-danger" onclick="deleteButtonService(event)">Delete</a>
      </div>
  </div>`
  })
  if (card !== null) {
    card.innerHTML = elements
  }
  const sliderServices = document.querySelector('#mySwiper1')
  // const sliderServices = document.querySelector('.our-services-slider')

  // // console.log(sliderServices)
  let elementsSlider = ''

  imagesService.forEach((image) => {
    elementsSlider += `<div class="swiper-slide">
      <img class="slider-img-drag" src="${image.route}"
          style="width:100%">
  </div>`
  })

  // elementsSlider = `<div class="swiper-container mySwiper">
  //   <div class="swiper-wrapper" id="mySwiper1">  ${elementsSlider}
  //   </div>
  //   <div class="swiper-button-next"></div>
  //   <div class="swiper-button-prev"></div>
  //   <div class="swiper-pagination"></div>
  // </div>`
  if (sliderServices !== null) {
    sliderServices.innerHTML = elementsSlider
  }
  // if (swiper !== null) {
  //   swiper.innerHTML = elementsSlider
  // }

  // imagesService.forEach((image) => {
  //   divServicesSlider.push(image.route)
  // })
}

async function fileuploadServices(e) {
  const file = e.target.files[0]
  const formData = new FormData()
  formData.append('image', file)

  //   setUploading(true)
  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
    // headers: {
    //   'Content-Type': 'multipart/form-data',
    // },
    // headers: { 'Content-Type': 'application/json' },
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

const setElementsIndexUI = () => {}
