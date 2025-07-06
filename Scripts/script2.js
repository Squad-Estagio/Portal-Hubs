const imagemPrincipal = document.querySelector(".Carrossel_Social img");
const imagensSecundarias = document.querySelectorAll(".img_Social_carrossel:not(.maisImgs) img");

imagensSecundarias.forEach(img => {
  img.addEventListener("click", () => {
    imagemPrincipal.src = img.src;
  });
});


// Script completo para o Carrossel de Fotos

class CarrosselDeFotos {
  constructor() {
    this.slideAtual = 0;
    this.slides = document.querySelectorAll('.carrossel-slide');
    this.dots = document.querySelectorAll('.dot');
    this.btnAnterior = document.querySelector('.carrossel-prev');
    this.btnProximo = document.querySelector('.carrossel-next');
    this.intervaloAutoPlay = null;

    this.iniciar();
  }

  iniciar() {
    this.configurarEventos();
    this.mostrarSlide(0);
    this.iniciarAutoPlay();
  }

  configurarEventos() {
    this.btnAnterior.addEventListener('click', () => this.slideAnterior());
    this.btnProximo.addEventListener('click', () => this.proximoSlide());

    this.dots.forEach((dot, index) => {
      dot.addEventListener('click', () => this.irParaSlide(index));
    });

    const carrosselContainer = document.querySelector('.carrossel-container');
    carrosselContainer.addEventListener('mouseenter', () => this.pararAutoPlay());
    carrosselContainer.addEventListener('mouseleave', () => this.iniciarAutoPlay());
  }

  mostrarSlide(index) {
    this.slides.forEach(slide => slide.classList.remove('active'));
    this.dots.forEach(dot => dot.classList.remove('active'));

    this.slides[index].classList.add('active');
    this.dots[index].classList.add('active');

    this.slideAtual = index;
  }

  proximoSlide() {
    let proximoIndex = (this.slideAtual + 1) % this.slides.length;
    this.mostrarSlide(proximoIndex);
  }

  slideAnterior() {
    let anteriorIndex = (this.slideAtual - 1 + this.slides.length) % this.slides.length;
    this.mostrarSlide(anteriorIndex);
  }

  irParaSlide(index) {
    this.mostrarSlide(index);
  }

  iniciarAutoPlay() {
    if (this.intervaloAutoPlay) return; // evita múltiplos intervalos

    this.intervaloAutoPlay = setInterval(() => {
      this.proximoSlide();
    }, 5000);
  }

  pararAutoPlay() {
    if (this.intervaloAutoPlay) {
      clearInterval(this.intervaloAutoPlay);
      this.intervaloAutoPlay = null;
    }
  }
}

// Inicializa o carrossel quando o DOM estiver carregado
document.addEventListener('DOMContentLoaded', () => {
  new CarrosselDeFotos();
});


//linha do tempo
const items = document.querySelectorAll('.item-linha');

const observer = new IntersectionObserver(entries => {
  entries.forEach((entry, index) => {
    if (entry.isIntersecting) {
      entry.target.style.transitionDelay = `${index * 0.2}s`;
      entry.target.classList.add('show');
      observer.unobserve(entry.target);
    }
  });
}, {
  threshold: 0.5
});

items.forEach((item, index) => {
  observer.observe(item);
});


//ANIMAÇÃO DA LOGOTIPO
 document.addEventListener("DOMContentLoaded", function () {
    const elements = document.querySelectorAll('.fade-on-visible');

    const observer = new IntersectionObserver((entries) => {
      entries.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add('show');
        } else {
          entry.target.classList.remove('show'); // remove para repetir
        }
      });
    }, {
      threshold: 0.5
    });

    elements.forEach(el => observer.observe(el));
  });