document.addEventListener("DOMContentLoaded", function () {
  const sections = document.querySelectorAll('.block');
  const options = {
      threshold: 0.3
  };

  const observer = new IntersectionObserver(function (entries) {
      entries.forEach(entry => {
          if (entry.isIntersecting) {
              entry.target.classList.add('visible');
          } else {
              entry.target.classList.remove('visible');
          }
      });
  }, options);

  sections.forEach(section => {
      observer.observe(section);
  });
});

// Smooth scrolling for navigation links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
  anchor.addEventListener('click', function (e) {
      e.preventDefault();
      document.querySelector(this.getAttribute('href')).scrollIntoView({
          behavior: 'smooth'
      });
  });
});
