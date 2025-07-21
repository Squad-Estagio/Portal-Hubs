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
      href: "https://www.exemplo.com/imagem1",
      src: "https://i.ytimg.com/vi/xLyfexO4JIA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLA1td3am4vV8RG5B9SF01FNWSV8Tg",
      alt: "Hub Carreiras",
      descricao: "Foi um dia de prova cheio de emoção e oportunidades para garantir uma das 150 bolsas de estudo nos cursos de pedagogia, enfermagem e psicologia."
    },
    {
      href: "https://www.exemplo.com/imagem2",
      src: "https://i.ytimg.com/vi/cFnGz4lNUFI/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLDjng7i4tbdI8J3T0juF9C176GW5A",
      alt: "Hub de Projetos",
      descricao: "Descrição detalhada sobre Hub de Projetos."
    },
    {
      href: "https://www.exemplo.com/imagem3",
      src: "https://i.ytimg.com/vi/8uwvo7gekLM/hqdefault.jpg?sqp=-oaymwFBCNACELwBSFryq4qpAzMIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB8AEB-AHOBoAC4AOKAgwIABABGBogSih_MA8=&rs=AOn4CLCTvxGL73vvbVNlzg_vWc3Dge6GWg",
      alt: "Hub de inovação",
      descricao: "Descrição detalhada sobre o Hub de Inovação."
    },
  ],
};

// Usar um nome único para o container das imagens
const imagensContainer = document.getElementById("imagens-root");
const imagensRoot = ReactDOM.createRoot(imagensContainer);

// Passando a função ClickImagem como prop para o componente Imagens
imagensRoot.render(React.createElement(Imagens, { imagens: imagensData.imagens, onImagemClick: ClickImagem }));