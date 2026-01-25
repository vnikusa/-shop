const track = document.querySelector('.slider-track');
    const slides = document.querySelectorAll('.slide');
    const next = document.getElementById('next');
    const prev = document.getElementById('prev');

    let index = 0;

    function showSlide(i) {
      track.style.transform = `translateX(${-i * 912}px)`;
    }

    next.addEventListener('click', () => {
      index = (index + 1) % slides.length;
      showSlide(index);
    });

    prev.addEventListener('click', () => {
      index = (index - 1 + slides.length) % slides.length;
      showSlide(index);
    });