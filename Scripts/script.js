const slides = document.querySelector('.carrossel-slides');
const totalSlides = document.querySelectorAll('.carrossel-item').length;
const indicators = document.querySelectorAll('.carrossel-indicadores input[type=radio]');
let index = 0;

function updateCarousel() {
  slides.style.transform = `translateX(-${index * 100}%)`;
  indicators[index].checked = true;
}

document.querySelector('.btn-left').addEventListener('click', () => {
  index = (index - 1 + totalSlides) % totalSlides;
  updateCarousel();
});

document.querySelector('.btn-right').addEventListener('click', () => {
  index = (index + 1) % totalSlides;
  updateCarousel();
});

indicators.forEach((input, i) => {
  input.addEventListener('click', () => {
    index = i;
    updateCarousel();
  });
});

setInterval(() => {
  index = (index + 1) % totalSlides;
  updateCarousel();
}, 4000); // tempo em milissegundos