let images = []

const isLogin = () => {
  if (localStorage.getItem('login') === null) {
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
          <a id="${image._id}" href="#" class="btn btn-danger" onclick="deleteButton(event)">Delete</a>
      </div>
  </div>`
  })
  if (card !== null) {
    card.innerHTML = elements
  }

  const sliderServices = document.querySelector('#mySwiper2')
  // const sliderServices = document.querySelector('.our-services-slider')

  // // console.log(sliderServices)
  let elementsSlider = ''

  images.forEach((image) => {
    elementsSlider += `<div class="swiper-slide">
      <img class="slider-img-drag" src="${image.route}"
          style="width:100%">
  </div>`
  })

  if (sliderServices !== null) {
    sliderServices.innerHTML = elementsSlider
  }
}

async function fileuploadSeeus(e) {
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
