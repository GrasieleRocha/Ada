document.addEventListener('DOMContentLoaded', function() {
  let currentSlide = 0;
  const slider = document.getElementById('carousel-slider');
  const totalSlides = document.querySelectorAll('.carousel-slide').length;

  function showSlide(index) {
      const offset = -index * 100;
      slider.style.transform = `translateX(${offset}%)`;
  }

  function nextSlide() {
      currentSlide = (currentSlide + 1) % totalSlides;
      showSlide(currentSlide);
  }

  function autoSlide() {
      nextSlide();
  }

  // Adiciona um intervalo para a transição automática dos slides a cada 3 segundos
  setInterval(autoSlide, 3000);

  // Mostra o primeiro slide quando a página carrega
  showSlide(currentSlide);
});
