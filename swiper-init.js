document.addEventListener('DOMContentLoaded', function() {
  const swiper = new Swiper('.mySwiper', {
    // Configuración básica
    slidesPerView: 1,
    spaceBetween: 40,
    loop: true,

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
});

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

function startAutoplay() {
  if (window.teamSwiper) {
    window.teamSwiper.autoplay.start();
  }
}

function stopAutoplay() {
  if (window.teamSwiper) {
    window.teamSwiper.autoplay.stop();
  }
}
