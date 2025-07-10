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
      entry.target.classList.add('show');  // animação entra
    } else {
      entry.target.classList.remove('show');  // animação some quando sai da área visível
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

  //Animação do scroll do mouse - direita
const myObserver = new IntersectionObserver((entries) => {
    entries.forEach ( (entry) =>{
        if(entry.isIntersecting){
            entry.target.classList.add('show')
        }
        else{
            entry.target.classList.remove('show')
        }
    })
})
let cards = document.querySelectorAll('.hidden')
cards.forEach((element) => myObserver.observe(element) )

//Animação do scroll do mouse - esquerda
const myObserver2 = new IntersectionObserver((ent) => {
    ent.forEach ( (en) =>{
        if(en.isIntersecting){
            en.target.classList.add('show2')
        }
        else{
            en.target.classList.remove('show2')
        }
    })
})
let cards2 = document.querySelectorAll('.hidden2')
cards2.forEach((element) => myObserver2.observe(element) )

//Animação do scroll do mouse - opacidade
const myObserver3 = new IntersectionObserver((entt) => {
    entt.forEach ( (enn) =>{
        if(enn.isIntersecting){
            enn.target.classList.add('show3')
        }
        else{
            enn.target.classList.remove('show3')
        }
    })
})
let cards3 = document.querySelectorAll('.hidden3')
cards3.forEach((element) => myObserver3.observe(element) )


//Animação mouse - baixo 
const myObserver4 = new IntersectionObserver((enter) => {
    enter.forEach ( (ente) =>{
        if(ente.isIntersecting){
            ente.target.classList.add('show4')
        }
        else{
            ente.target.classList.remove('show4')
        }
    })
})
let cards4 = document.querySelectorAll('.hidden4')
cards4.forEach((element) => myObserver4.observe(element) )


// Função para animar contagem
  function animateCount(el, target) {
    let current = 0;
    const duration = 2000; // duração total da animação em ms
    const increment = target / (duration / 16); // aproximação com base em 60fps

    function update() {
      current += increment;
      if (current < target) {
        el.textContent = Math.floor(current);
        requestAnimationFrame(update);
      } else {
        el.textContent = target;
      }
    }

    update();
  }
    // Intersection Observer para detectar quando o elemento entra na tela
  const observer4 = new IntersectionObserver((entries, obs) => {
    entries.forEach(entry => {
      if (entry.isIntersecting) {
        const counter = entry.target;
        const target = +counter.getAttribute('data-target');
        animateCount(counter, target);
        obs.unobserve(counter); // para não contar de novo
      }
    });
  }, { threshold: 0.6 }); // 60% visível na tela

  // Aplica o observer em todos os elementos com classe "counter"
  document.querySelectorAll('.counter').forEach(counter => {
    observer4.observe(counter);
  });