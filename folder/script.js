document.addEventListener('DOMContentLoaded', function() {
    const slidesWrapper = document.querySelector('.slider .slides');
    const slides = document.querySelectorAll('.slider .slide');
    const prevBtn = document.querySelector('.slider button.prev');
    const nextBtn = document.querySelector('.slider button.next');
    let currentIndex = 0;
    const totalSlides = slides.length;
  
    function updateSlider() {
      slidesWrapper.style.transform = `translateX(-${currentIndex * 100}%)`;
    }
  
    prevBtn.addEventListener('click', function() {
      currentIndex = (currentIndex === 0) ? totalSlides - 1 : currentIndex - 1;
      updateSlider();
    });
  
    nextBtn.addEventListener('click', function() {
      currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
      updateSlider();
    });
  
    // Автопрокрутка слайдера каждые 5 секунд (5000 мс)
    setInterval(() => {
      currentIndex = (currentIndex === totalSlides - 1) ? 0 : currentIndex + 1;
      updateSlider();
    }, 5000);
  });
  document.addEventListener('DOMContentLoaded', function() {
    const aboutModal = document.getElementById('aboutModal');
    const aboutOverlay = document.getElementById('aboutOverlay');
    const aboutToggleButton = document.getElementById('aboutToggleButton');
    const sectionBtn = document.getElementById('sectionBtn');
    const aboutClose = document.querySelector('.aboutClose');

    function openModal() {
        aboutModal.style.display = 'block';
        aboutOverlay.style.display = 'block';
    }

    function closeModal() {
        aboutModal.style.display = 'none';
        aboutOverlay.style.display = 'none';
    }

    if (aboutToggleButton) aboutToggleButton.addEventListener('click', openModal);
    if (sectionBtn) sectionBtn.addEventListener('click', openModal);
    if (aboutClose) aboutClose.addEventListener('click', closeModal);
    if (aboutOverlay) aboutOverlay.addEventListener('click', function(event) {
        if (event.target === aboutOverlay) closeModal();
    });
});
