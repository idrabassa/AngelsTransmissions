// let slideIndex = 1
// showSlides(slideIndex)

// function plusSlides(n) {
//   showSlides((slideIndex += n))
// }

// function currentSlide(n) {
//   showSlides((slideIndex = n))
// }

// function showSlides(n) {
//   let i
//   let slides = document.getElementsByClassName('mySlides')
//   let dots = document.getElementsByClassName('dot')
//   if (n > slides.length) {
//     slideIndex = 1
//   }
//   if (n < 1) {
//     slideIndex = slides.length
//   }
//   for (i = 0; i < slides.length; i++) {
//     slides[i].style.display = 'none'
//   }
//   for (i = 0; i < dots.length; i++) {
//     dots[i].className = dots[i].className.replace(' active', '')
//   }
//   slides[slideIndex - 1].style.display = 'block'
//   dots[slideIndex - 1].className += ' active'
// }

const qnum1 = document.getElementsByClassName('qnum1')
const anum1 = document.getElementsByClassName('card-body1')
const qnum2 = document.getElementsByClassName('qnum2')
const anum2 = document.getElementsByClassName('card-body2')
const qnum3 = document.getElementsByClassName('qnum3')
const anum3 = document.getElementsByClassName('card-body3')
const qnum4 = document.getElementsByClassName('qnum4')
const anum4 = document.getElementsByClassName('card-body4')
const qnum5 = document.getElementsByClassName('qnum5')
const anum5 = document.getElementsByClassName('card-body5')
const qnum6 = document.getElementsByClassName('qnum6')
const anum6 = document.getElementsByClassName('card-body6')

const addEventButton = (button, body) => {
  button[0].addEventListener('click', (e) => {
    if (body[0].classList.contains('opened')) {
      body[0].classList.remove('opened')
    } else {
      body[0].classList.add('opened')
    }

    e.preventDefault()
  })
}
addEventButton(qnum1, anum1)
addEventButton(qnum2, anum2)
addEventButton(qnum3, anum3)
addEventButton(qnum4, anum4)
addEventButton(qnum5, anum5)
addEventButton(qnum6, anum6)

// qnum1[0].addEventListener('click', (e) => {
//   if (anum1[0].classList.contains('opened')) {
//     anum1[0].classList.remove('opened')
//   } else {
//     anum1[0].classList.add('opened')
//   }

//   e.preventDefault()
// })

function initMap() {
  // Your location
  const loc = { lat: 28.01988, lng: -82.1741149 }
  // Centered map on location
  const map = new google.maps.Map(document.querySelector('.map'), {
    zoom: 14,
    center: loc,
  })
  // The marker, positioned at location
  const marker = new google.maps.Marker({ position: loc, map: map })
}

// Smooth Scrolling
$('#navbar a').on('click', function (event) {
  if (this.hash !== '') {
    event.preventDefault()

    const hash = this.hash

    $('html, body').animate(
      {
        scrollTop: $(hash).offset().top - 100,
      },
      600
    )
  }
})

// effectButton.for((button) => {
//   console.log(button.classList)
//   button.classList.remove('view')
//   setTimeout(() => animatedNext.current.classList.add('view'), 100)
// })

const buttons = document.querySelectorAll('.primary-button')

buttons.forEach((btn) => {
  btn.addEventListener('click', (e) => {
    let x = e.clientX - e.target.offsetLeft
    let y = e.clientY - e.target.offsetTop

    let ripples = document.createElement('span')
    ripples.style.left = x + 'px'
    ripples.style.top = y + 'px'
    btn.appendChild(ripples)
    setTimeout(() => {
      ripples.remove()
    }, 1000)
  })
})

// const buttonAllservices = document.getElementById('allservices')
// buttonAllservices.addEventListener('click', openModal())

function openModal() {
  const modal = document.getElementById('modal')
  console.log(modal)
  modal.classList.add('show-modal')
}
function closeModal() {
  const modal = document.getElementById('modal')
  modal.classList.remove('show-modal')
}

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
