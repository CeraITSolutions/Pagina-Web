const swiper = new Swiper('.mySwiper', {
      loop: true,
      grabCursor: true,
      centeredSlides: false,
      slidesPerView: 1.06,
      spaceBetween: 18,
      lazy: {
        loadPrevNext: true,
        loadPrevNextAmount: 2,
      },
      autoplay: {
        delay: 4500,
        disableOnInteraction: false,
      },
      keyboard: {
        enabled: true,
        onlyInViewport: true,
      },
      pagination: {
        el: '.swiper-pagination',
        clickable: true,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
      breakpoints: {
        480: { slidesPerView: 1.12, spaceBetween: 18 },
        640: { slidesPerView: 1.25, spaceBetween: 18 },
        768: { slidesPerView: 2,   spaceBetween: 20 },
        1024:{ slidesPerView: 2.25, spaceBetween: 22 },
        1280:{ slidesPerView: 3,   spaceBetween: 26 }
      }
    });

    // Accessibility: ensure buttons focus visible
    document.querySelectorAll('.swiper-button-next, .swiper-button-prev').forEach(btn=>{
      btn.addEventListener('keyup', e=>{
        if(e.key === 'Enter' || e.key === ' ') btn.click();
      });
    });