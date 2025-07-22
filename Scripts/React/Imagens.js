function Imagens({ imagens, onImagemClick }) {
  return React.createElement(
    "div",
    { className: "ImagensWrapper" },
    React.createElement(
      "div",
      { className: "ImagensSecundarias" },
      ...imagens.map((imagem, index) =>
        React.createElement(
          "div",
          { className: "boxImagem", key: `image-${index}` },
          React.createElement("img", {
            src: imagem.src,
            alt: imagem.alt || "",
            onClick: () => onImagemClick(imagem),  // Passando a imagem clicada para a função
            className: "thumbImg",
          })
        )
      )
    )
  );
}


function ClickImagem(imagem) {
  // Selecionar o modal
  const modal = document.querySelector('.ModalImagens');
  const modalImg = modal.querySelector('img');
  const modalTitulo = modal.querySelector('.ModalTxt h3');
  const modalDescricao = modal.querySelector('.ModalTxt p');
  
  // Atualiza a imagem, o título e a descrição no modal
  modalImg.src = imagem.src;
  modalTitulo.textContent = imagem.alt; // Título será o "alt" da imagem
  modalDescricao.textContent = imagem.descricao; // Aqui a descrição é pega diretamente do objeto imagem

  // Exibir o modal
  modal.style.display = 'flex';
}


// Dados das imagens
const imagensData = {
  imagens: [
    {
      src: "https://raw.githubusercontent.com/igordev-men/Eniac-comunidades/refs/heads/main/Eniac_nas_comunidades-1/projetoAcademy/assets/imgs/eniac-favala.jpg",
      alt: "Título",
      descricao: "Aqui será adicionado o texto explicando a ação social apresentada na imagem."
    },
    {
      src: "https://raw.githubusercontent.com/igordev-men/Eniac-comunidades/refs/heads/main/Eniac_nas_comunidades-1/projetoAcademy/assets/imgs/jornada.jpg",
      alt: "Título 2",
      descricao: "Aqui será adicionado o texto explicando a ação social apresentada na imagem."
    },
    {
      src: "https://raw.githubusercontent.com/igordev-men/Eniac-comunidades/refs/heads/main/Eniac_nas_comunidades-1/projetoAcademy/assets/imgs/gravida.jpg",
      alt: "Título 3",
      descricao: "Aqui será adicionado o texto explicando a ação social apresentada na imagem."
    },
    {
      src: "https://raw.githubusercontent.com/igordev-men/Eniac-comunidades/refs/heads/main/Eniac_nas_comunidades-1/projetoAcademy/assets/imgs/educa%C3%A7ao-1.jpg",
      alt: "Título 4",
      descricao: "Aqui será adicionado o texto explicando a ação social apresentada na imagem."
    },
  ],
};

// Usar um nome único para o container das imagens
const imagensContainer = document.getElementById("imagens-root");
const imagensRoot = ReactDOM.createRoot(imagensContainer);

// Passando a função ClickImagem como prop para o componente Imagens
imagensRoot.render(React.createElement(Imagens, { imagens: imagensData.imagens, onImagemClick: ClickImagem }));