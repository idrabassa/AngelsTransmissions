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

const setImagesUI = () => {
  const card = document.querySelector('.slider-services')
  let elements = ''
  images.forEach((image) => {
    elements += `<div class="card" style="width: 18rem;">
      <img src="${image.route}" class="card-img-top" alt="none">
      <div class="card-body">
  
          <p class="card-text">Route</p>
          <a href="#" class="btn btn-danger">Delete</a>
      </div>
  </div>`
  })
  card.innerHTML = elements
}

window.addEventListener('load', reloadImages())

async function fileupload(e) {
  const file = e.target.files[0]
  const formData = new FormData()

  formData.append('image', file)
  //   setUploading(true)
  const response = await fetch('/api/upload', {
    method: 'POST',
    body: formData,
    headers: { 'Content-Type': 'multipart/form-data' },
    // headers: { 'Content-Type': 'application/json' },
  })
  const resData = await response.json()
  console.log(resData)
  // image.push(data)
}
