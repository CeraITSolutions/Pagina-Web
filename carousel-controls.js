document.addEventListener('DOMContentLoaded', function() {

  document.addEventListener('keydown', function(e) {
    if (window.teamSwiper) {
      switch(e.key) {
        case 'ArrowLeft':
          window.teamSwiper.slidePrev();
          break;
        case 'ArrowRight':
          window.teamSwiper.slideNext();
          break;
        case ' ':
          e.preventDefault();
          toggleAutoplay();
          break;
      }
    }
  });

  const swiperContainer = document.querySelector('.mySwiper');
  if (swiperContainer) {
    swiperContainer.addEventListener('mouseenter', function() {
      if (window.teamSwiper && window.teamSwiper.autoplay) {
        window.teamSwiper.autoplay.stop();
      }
    });
    
    swiperContainer.addEventListener('mouseleave', function() {
      if (window.teamSwiper && window.teamSwiper.autoplay) {
        window.teamSwiper.autoplay.start();
      }
    });
  }

  function updateProgress() {
    if (window.teamSwiper) {
      const progress = (window.teamSwiper.activeIndex + 1) / window.teamSwiper.slides.length * 100;
      console.log(`Progreso: ${progress.toFixed(1)}%`);
    }
  }

  function toggleAutoplay() {
    if (window.teamSwiper) {
      if (window.teamSwiper.autoplay.running) {
        window.teamSwiper.autoplay.stop();
        console.log('Autoplay pausado');
      } else {
        window.teamSwiper.autoplay.start();
        console.log('Autoplay iniciado');
      }
    }
  }

  window.toggleAutoplay = toggleAutoplay;
  window.updateProgress = updateProgress;

  addCustomControls();
});

function addCustomControls() {
  const swiperContainer = document.querySelector('.mySwiper');
  if (!swiperContainer) return;

  const controlsContainer = document.createElement('div');
  controlsContainer.className = 'custom-swiper-controls';
  controlsContainer.style.cssText = `
    position: absolute;
    top: 10px;
    right: 10px;
    z-index: 100;
    display: flex;
    gap: 10px;
  `;

  const playPauseBtn = document.createElement('button');
  playPauseBtn.innerHTML = '⏸️';
  playPauseBtn.title = 'Pausar/Reanudar autoplay';
  playPauseBtn.style.cssText = `
    background: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
  `;
  
  playPauseBtn.addEventListener('click', function() {
    window.toggleAutoplay();
    this.innerHTML = window.teamSwiper.autoplay.running ? '⏸️' : '▶️';
  });

  const infoBtn = document.createElement('button');
  infoBtn.innerHTML = 'ℹ️';
  infoBtn.title = 'Información del carrusel';
  infoBtn.style.cssText = `
    background: rgba(255, 255, 255, 0.9);
    border: none;
    border-radius: 50%;
    width: 40px;
    height: 40px;
    cursor: pointer;
    font-size: 16px;
    transition: all 0.3s ease;
  `;
  
  infoBtn.addEventListener('click', function() {
    if (window.teamSwiper) {
      const info = `
        Slides totales: ${window.teamSwiper.slides.length}
        Slide actual: ${window.teamSwiper.activeIndex + 1}
        Autoplay: ${window.teamSwiper.autoplay.running ? 'Activo' : 'Pausado'}
        Loop: ${window.teamSwiper.params.loop ? 'Sí' : 'No'}
      `;
      alert(info);
    }
  });

  controlsContainer.appendChild(playPauseBtn);
  controlsContainer.appendChild(infoBtn);

  swiperContainer.style.position = 'relative';
  swiperContainer.appendChild(controlsContainer);
}

function getSwiperStats() {
  if (window.teamSwiper) {
    return {
      totalSlides: window.teamSwiper.slides.length,
      currentSlide: window.teamSwiper.activeIndex + 1,
      isAutoplayRunning: window.teamSwiper.autoplay.running,
      isLoopEnabled: window.teamSwiper.params.loop,
      slidesPerView: window.teamSwiper.params.slidesPerView
    };
  }
  return null;
}

// Exportar función para uso global
window.getSwiperStats = getSwiperStats;
