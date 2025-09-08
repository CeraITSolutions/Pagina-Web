/*document.addEventListener('DOMContentLoaded', function () {
createCarrusel();
});

const info = [
    rock = {
        Image: 'i',
        name: 'RicardoRam',
        info: "lorem ipsum dolor sit amet"
    },

    qualy= {
        Image: 'i',
        name: 'Qualy',
        info: "lorem ipsum dolor sit amet"
    },

    dan = {
        Image: 'i',
        name: 'Barney',
        info: "lorem ipsum dolor sit amet"
    },

    miguel= {
        Image: 'i',
        name: 'Gorda',
        info: "lorem ipsum dolor sit amet"
    }
]

function createCarrusel(){
    info.forEach(participantes => {
        const nombre = document.querySelector('h2 .name');
        nombre.appendChild = participantes.name[0];
        console.log(participantes.name);
    });
}*/



const swiper = new Swiper('.mySwiper', {
    // Configuración básica
    slidesPerView: 3,
    spaceBetween: 40,
    loop: true,
    loopFillGroupWithBlank: true,
    navigation: {
      nextEl: '.swiper-button-next',
      prevEl: '.swiper-button-prev',
    },

    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },

    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 3,
        spaceBetween: 40,
      },
    },

    autoplay: {
      delay: 3000,
      disableOnInteraction: false,
    },

    effect: 'slide',
    speed: 600,

    touchRatio: 1,
    touchAngle: 45,
    grabCursor: true,

    on: {
      init: function() {
        console.log('Swiper inicializado');
      },
      slideChange: function() {
        console.log('Slide cambiado a:', this.activeIndex);
      }
    }
  });

  window.teamSwiper = swiper;

function goToSlide(index) {
  if (window.teamSwiper) {
    window.teamSwiper.slideTo(index);
  }
}

function nextSlide() {
  if (window.teamSwiper) {
    window.teamSwiper.slideNext();
  }
}

function prevSlide() {
  if (window.teamSwiper) {
    window.teamSwiper.slidePrev();
  }
}