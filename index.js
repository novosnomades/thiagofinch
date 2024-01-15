/* Modal */
document.querySelector('#js-open-checkout1').addEventListener('click', function () {
  return document.querySelector('#js-modal-checkout').classList.add('open-modal'), !1;
})

document.querySelector('#js-open-checkout2').addEventListener('click', function () {
  return document.querySelector('#js-modal-checkout').classList.add('open-modal'), !1;
})

document.querySelector('#js-open-checkout3').addEventListener('click', function () {
  return document.querySelector('#js-modal-checkout').classList.add('open-modal'), !1;
})

document.querySelector('#js-open-checkout4').addEventListener('click', function () {
  return document.querySelector('#js-modal-checkout').classList.add('open-modal'), !1;
})

document.querySelector('#js-open-checkout5').addEventListener('click', function () {
  return document.querySelector('#js-modal-checkout').classList.add('open-modal'), !1;
})

document.querySelector('#js-open-checkout6').addEventListener('click', function () {
  return document.querySelector('#js-modal-checkout').classList.add('open-modal'), !1;
})

document.querySelector('#js-open-checkout7').addEventListener('click', function () {
  return document.querySelector('#js-modal-checkout').classList.add('open-modal'), !1;
})

document.querySelector('#js-open-checkout8').addEventListener('click', function () {
  return document.querySelector('#js-modal-checkout').classList.add('open-modal'), !1;
})

document.querySelector('#js-open-checkout9').addEventListener('click', function () {
  return document.querySelector('#js-modal-checkout').classList.add('open-modal'), !1;
})

document.querySelector('.js-close').addEventListener('click', function () {
  return document.querySelector('#js-modal-checkout').classList.remove('open-modal'), !1;
})


// document.querySelector("#js-open-checkout1, #js-open-checkout2, #js-open-checkout3, #js-open-checkout4, #js-open-checkout5, #js-open-checkout6, #js-open-checkout7, #js-open-checkout8, #js-open-checkout9").addEventListener('click', function () {
//   return document.querySelector('#js-modal-checkout').classList.add('open-modal'), !1;
// })


const modal = document.querySelector('[data-js=modal]')
const modalIframe = modal.querySelector('iframe')

const openModal = (video) => {
  modalIframe.src = `https://www.youtube.com/embed/${video}?autoplay=1`
  document.body.classList.add('modal-video-open')
  document.body.classList.add('overflow-y-hidden')
}

const closeModal = () => {
  document.body.classList.remove('modal-video-open')
  document.body.classList.remove('overflow-y-hidden')
  modalIframe.src = ``
}

[...document.querySelectorAll('[data-youtube]')].forEach(item => {
  item.addEventListener('click', (e) => {
    e.preventDefault()
    openModal(youtubeID(item.dataset.youtube))
  })
})

document.querySelector('[data-js=btn-close-modal]').addEventListener('click', closeModal)

window.addEventListener("keydown", (e) => {
  // Close Modal with esc
  if (e.key === 'Escape' && document.body.classList.contains('modal-video-open')) {
    closeModal()
  }
})

window.addEventListener("click", (e) => {
  // Close Modal when click outside
  if (e.target === modal) closeModal()
})

new PureCounter();

const youtubeID = (url) => {
  var regExp = /^.*((youtu.be\/)|(v\/)|(\/u\/\w\/)|(embed\/)|(watch\?))\??v?=?([^#&?]*).*/;
  var match = url.match(regExp);
  return (match&&match[7].length==11)? match[7] : false;
}

// FAQ
const firstFaq = document.querySelector('.faq .faq__item.active .faq__item__collapse')

Array.from(document.querySelectorAll('[data-js=faq]')).forEach(faq => {
  faq.addEventListener('click', (e) => {
    e.preventDefault()

    const currentFaqLink = e.currentTarget

    if (!currentFaqLink.parentElement.classList.contains('active')) {
      const activeFaq = document.querySelector('.faq .faq__item.active')
      if (activeFaq) {
        activeFaq.classList.remove('active')
        activeFaq.querySelector('[data-js=faq]').setAttribute('aria-expanded', false)
        closeFaq(activeFaq.querySelector('.faq__item__collapse'))
      }
    }

    // Add active to faq
    currentFaqLink.parentElement.classList.add('active')

    // Toggle Aria Expanded
    currentFaqLink.setAttribute('aria-expanded', true)
    openFaq(e.currentTarget.nextElementSibling)
  })
})

const openFaq = (element) => {
  slideAnim.slideStop(element);
  slideAnim.slideDown(element);
}

const closeFaq = (element) => {
  slideAnim.slideStop(element);
  slideAnim.slideUp(element);
}

openFaq(firstFaq)



// Modules
var swiper = new Swiper("[data-js=modules-thumbs]", {
  spaceBetween: 16,
  slidesPerView: 1,
  // loop: true,
  // loopedSlides: 5,
  // autoplay: {
  //   delay: 5000,
  //   // pauseOnMouseEnter: true,
  // },
  pagination: {
    el: ".swiper-pagination",
    clickable: true
  },
  breakpoints: {
    500: {
      slidesPerView: 2,
    },
    968: {
      slidesPerView: 3,
    },
  },
})

var swiper2 = new Swiper("[data-js=modules-slides]", {
  spaceBetween: 10,
  effect: "fade",
  // loop: true,
  // loopedSlides: 5,
  // autoplay: {
  //   delay: 5000,
  //   // pauseOnMouseEnter: true,
  // },
  thumbs: {
    swiper: swiper,
  },
})

var slideTestemunho = new Swiper(".testemunhos", {
  spaceBetween: 10,
  slidesPerView: 1,
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
  },
})

var slidePresentation = new Swiper(".apresentacao", {
  spaceBetween: 18,
  slidesPerView: 1,
  breakpoints: {
    600: {
      slidesPerView: 2,
    },
  },
})

// Depoimentos
let mobile = window.matchMedia('(min-width: 0px) and (max-width: 992px)')
if(!mobile.matches) {
  slideTestemunho.destroy()
  document.querySelector('.testemunhos .swiper-wrapper').classList.remove('swiper-wrapper')
  
  slidePresentation.destroy()
  document.querySelector('.apresentacao .swiper-wrapper').classList.remove('swiper-wrapper')
}

// Menu btn
document.querySelector('.header__btn').addEventListener('click', () => {
  document.documentElement.classList.toggle('menu-active')
  document.documentElement.classList.toggle('overflow-y-hidden')
})

Array.from(document.querySelectorAll('.header__menu a')).forEach(menuLink => {
  menuLink.addEventListener('click', () => {
    document.documentElement.classList.remove('menu-active')
    document.documentElement.classList.remove('overflow-y-hidden')
  })
})

// Lottie mobile
Array.from(document.querySelectorAll('lottie-player')).forEach(player => {
  // if(!mobile.matches) {
  //   player.load(player.dataset.src)
  // } else if(mobile.matches && player.dataset.srcMobile){
  //   player.load(player.dataset.srcMobile)
  // }
  if(!mobile.matches) {
    player.load(player.dataset.src)
  } else if(mobile.matches && player.dataset.loadMobile === 'true' && !player.dataset.srcMobile){
    player.load(player.dataset.src)
  } else if(mobile.matches && player.dataset.loadMobile === 'true' && player.dataset.srcMobile){
    player.load(player.dataset.srcMobile)
  }
})

