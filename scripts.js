// Smooth scrolling effect for navigation links
$(document).ready(function() {
  $('a.nav-link').on('click', function(event) {
      if (this.hash !== "") {
          event.preventDefault();
          const hash = this.hash;
          $('html, body').animate({
              scrollTop: $(hash).offset().top
          }, 800);
      }
  });

  // Fade-in effect for sections
  $(window).on('scroll', function() {
      $('.fade-in').each(function() {
          const elementPos = $(this).offset().top;
          const windowTop = $(window).scrollTop();
          if (elementPos < windowTop + $(window).height() - 100) {
              $(this).addClass('visible');
          }
      });
  });
});
