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
const qnum7 = document.getElementsByClassName('qnum7')
const anum7 = document.getElementsByClassName('card-body7')

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
addEventButton(qnum7, anum7)

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

function openModal() {
  const modal = document.getElementById('modal')
  modal.classList.add('show-modal')
  const modalContainer = document.querySelector('.image-modal-container')

  modalContainer.innerHTML = `<div class="all-services-modal">
    <ul>
        <li>
            <p> Checking the level and condition of the transmission oil</p>
        </li>
        <li>
            <p>Checking, where applicable, the level and condition of the transfer case fluids and the
                differential</p>
        </li>
        <li>
            <ul>
                <p>Road test, in order not only to detect the reported fault, but also to evaluate the
                    operation of the transmission, which includes:</p>
                <li>
                    <p>
                        initial coupling
                    </p>
                </li>
                <li>
                    <p>
                        forward speeds
                    </p>
                </li>
                <li>
                    <p>
                        upshift timing and quality
                    </p>
                </li>
                <li>
                    <p>
                        downshift timing and quality
                    </p>
                </li>
                <li>
                    <p>passing speed</p>
                </li>
                <li>
                    <p>torque converter clutch coupling (TCC)</p>
                </li>
                <li>
                    <p>neutral speed</p>
                </li>
                <li>
                    <p>reverse</p>
                </li>
                <li>
                    <p>4 × 4 drive</p>
                </li>
                <li>
                    <p>noises</p>
                </li>
                <li>
                    <p>
                        vibrations</p>
                </li>
            </ul>
        </li>
    </ul>
  </div>`
}
function closeModal() {
  const modal = document.getElementById('modal')
  modal.classList.remove('show-modal')
}

function openMenu() {
  const offsetwindow = document.querySelector('.wrap-window')
  offsetwindow.style.width = '100%'
  const closeWindow = document.createElement('a').classList.add('closeW')
}

function closeMenu() {
  const offsetwindow = document.querySelector('.wrap-window')
  offsetwindow.style.width = '0%'
}
