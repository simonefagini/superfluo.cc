document.addEventListener('DOMContentLoaded', function() {
  const slider = document.querySelector('.comparison-slider');
  const overlay = document.querySelector('.overlay');
  const handle = document.querySelector('.slider-handle');
  const sliderLine = document.querySelector('.slider-line');
  let isSliding = false;

  function updateSliderPosition(x) {
    const rect = slider.getBoundingClientRect();
    const position = Math.max(0, Math.min(1, (x - rect.left) / rect.width));
    const percentage = position * 100;
    
    requestAnimationFrame(() => {
      overlay.style.clipPath = `polygon(0 0, ${percentage}% 0, ${percentage}% 100%, 0 100%)`;
      handle.style.left = `${percentage}%`;
      sliderLine.style.left = `${percentage}%`;
    });
  }

  function startSliding(e) {
    isSliding = true;
    slider.style.cursor = 'grabbing';
    updateSliderPosition(e.type.includes('touch') ? e.touches[0].clientX : e.clientX);
  }

  function stopSliding() {
    isSliding = false;
    slider.style.cursor = 'grab';
  }

  function slide(e) {
    if (!isSliding) return;
    e.preventDefault();
    const x = e.type.includes('touch') ? e.touches[0].clientX : e.clientX;
    updateSliderPosition(x);
  }

  // Mouse events
  slider.addEventListener('mousedown', startSliding);
  document.addEventListener('mousemove', slide, { passive: false });
  document.addEventListener('mouseup', stopSliding);

  // Touch events
  slider.addEventListener('touchstart', startSliding, { passive: true });
  document.addEventListener('touchmove', slide, { passive: false });
  document.addEventListener('touchend', stopSliding);
});
