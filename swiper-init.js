<<<<<<< Updated upstream
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
=======
const swiper=new Swiper(".mySwiper",{loop:!0,grabCursor:!0,centeredSlides:!1,slidesPerView:1.06,spaceBetween:18,lazy:{loadPrevNext:!0,loadPrevNextAmount:2},autoplay:{delay:4500,disableOnInteraction:!1},keyboard:{enabled:!0,onlyInViewport:!0},pagination:{el:".swiper-pagination",clickable:!0},navigation:{nextEl:".swiper-button-next",prevEl:".swiper-button-prev"},breakpoints:{480:{slidesPerView:1.12,spaceBetween:18},640:{slidesPerView:1.25,spaceBetween:18},768:{slidesPerView:2,spaceBetween:20},1024:{slidesPerView:2.25,spaceBetween:22},1280:{slidesPerView:3,spaceBetween:26}}});document.querySelectorAll(".swiper-button-next, .swiper-button-prev").forEach(e=>{e.addEventListener("keyup",t=>{("Enter"===t.key||" "===t.key)&&e.click()})});
>>>>>>> Stashed changes
