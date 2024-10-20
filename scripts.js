document.addEventListener('DOMContentLoaded', () => {
  const blocks = document.querySelectorAll('.block');

  const showBlocks = () => {
      blocks.forEach(block => {
          const rect = block.getBoundingClientRect();
          if (rect.top < window.innerHeight) {
              block.classList.add('visible');
          }
      });
  };

  window.addEventListener('scroll', showBlocks);
  showBlocks(); // Initial call
});
