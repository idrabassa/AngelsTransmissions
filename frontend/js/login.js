let email = ''
let password = ''

// const inputemail = document
//   .querySelector('#exampleInputEmail1')
//   .addEventListener('change', (e) => {
//     email = e.target.value
//   })
// console.log(email)

function setEmail(e) {
  email = e.target.value
}
function setPassrword(e) {
  password = e.target.value
}

function submitLogin(e) {
  console.log(email, password)
  if (email && password) {
    login(email, password)
      .then((res) => {
        console.log(res)
        if (!res.message) {
          window.location.href = '/carousels.html'
          let items
          if (localStorage.getItem('login') === null) {
            items = []
            items.push(res)
            localStorage.setItem('login', JSON.stringify(items))
          } else {
            items = JSON.parse(localStorage.getItem('login'))
            items.push(res)
            localStorage.setItem('login', JSON.stringify(items))
          }
        }
      })
      .catch((error) => console.log(error))
  } else {
  }
  e.preventDefault()
}

async function login(email, password) {
  const data = {
    email,
    password,
  }

  const response = await fetch('/api/users/login', {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  })
  const resData = await response.json()
  return resData
}
