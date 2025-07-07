const slides = document.querySelector('.carrossel-slides');
const totalSlides = document.querySelectorAll('.carrossel-item').length;
const indicators = document.querySelectorAll('.carrossel-indicadores input[type=radio]');
let index = 0;

function updateCarousel() {
  // Aplica a transformação para mover os slides e ativa o indicador
  slides.style.transition = "transform 0.5s ease-in-out";  // Adiciona a transição suave
  slides.style.transform = `translateX(-${index * 100}%)`;
  
  // Atualiza o indicador ativo
  indicators.forEach(indicator => indicator.checked = false); // Desmarca todos
  indicators[index].checked = true;  // Marca o indicador do slide atual
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


// Função de autoplay para mudar o slide automaticamente a cada 4 segundos
let autoSlide = setInterval(() => {
  index = (index + 1) % totalSlides;
  updateCarousel();
}, 4000); // Tempo em milissegundos (4 segundos)

// Para limpar o intervalo de autoplay se o carrossel for manualmente controlado (opcional)
document.querySelector('.btn-left').addEventListener('click', () => {
  clearInterval(autoSlide);  // Para o autoplay ao clicar no botão
  autoSlide = setInterval(() => {
    index = (index + 1) % totalSlides;
    updateCarousel();
  }, 4000);  // Reinicia o intervalo
});

document.querySelector('.btn-right').addEventListener('click', () => {
  clearInterval(autoSlide);  // Para o autoplay ao clicar no botão
  autoSlide = setInterval(() => {
    index = (index + 1) % totalSlides;
    updateCarousel();
  }, 4000);  // Reinicia o intervalo
});

//HEADER ANIMAÇÃO DE TRANSPARENCIA
const header = document.querySelector('header');

window.addEventListener('scroll', () => {
  if (window.scrollY > 20) {
    header.classList.add('header-transparente');
  } else {
    header.classList.remove('header-transparente');
  }
});


