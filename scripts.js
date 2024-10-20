window.addEventListener('scroll', () => {
  const slides = document.querySelectorAll('.slide');
  const viewportHeight = window.innerHeight;
  
  slides.forEach((slide, index) => {
      const offset = viewportHeight * index;
      const scrolledPastSlide = window.scrollY > offset - viewportHeight / 2;

      if (scrolledPastSlide) {
          slide.style.opacity = 1;
          slide.style.transform = 'translateY(0)';
      } else {
          slide.style.opacity = 0.3;
          slide.style.transform = 'translateY(30%)';
      }
  });
});
