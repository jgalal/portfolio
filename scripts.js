// Smooth scroll for Reach Out button
document.querySelector('.hero-button').addEventListener('click', function (e) {
  e.preventDefault();
  document.getElementById('contact').scrollIntoView({ behavior: 'smooth' });
});
