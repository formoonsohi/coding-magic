const slides = document.querySelectorAll('.team-slider__slide');
const dots = document.querySelectorAll('.team-slider__dot');
const btnPrev = document.querySelector('.team-slider__arrow--left');
const btnNext = document.querySelector('.team-slider__arrow--right');

let currentIndex = 0;
let previousIndex = 0;

function updateSlider() {
  slides.forEach((slide, index) => {
    slide.classList.remove('active', 'exit-left', 'exit-right');

    if (index === currentIndex) {
      slide.classList.add('active');
    } else if (index === previousIndex) {
      slide.classList.add(
        currentIndex > previousIndex ? 'exit-left' : 'exit-right'
      );
    }
  });

  dots.forEach((dot, index) => {
    dot.classList.toggle('active', index === currentIndex);
  });

  btnPrev.disabled = currentIndex === 0;
  btnNext.disabled = currentIndex === slides.length - 1;
}

btnPrev.addEventListener('click', () => {
  if (currentIndex > 0) {
    previousIndex = currentIndex;
    currentIndex--;
    updateSlider();
  }
});

btnNext.addEventListener('click', () => {
  if (currentIndex < slides.length - 1) {
    previousIndex = currentIndex;
    currentIndex++;
    updateSlider();
  }
});

updateSlider();
