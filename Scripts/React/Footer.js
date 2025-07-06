function Footer() {
  return React.createElement(
    "footer",
    { className: "footer" },
    React.createElement(
      "div",
      { className: "container" },
      // Conteúdo principal
      React.createElement(
        "div",
        { className: "footer-content" },
        // Seção 1: Logo + texto + redes sociais
        React.createElement(
          "div",
          { className: "footer-section" },
          React.createElement(
            "div",
            { className: "footer-logo-icon" },
            React.createElement("img", { src: "./IMG/logo eniac branca.png", alt: "" })
          ),
          React.createElement(
            "p",
            null,
            "Trabalhamos todos os dias para criar um impacto positivo e duradouro nas comunidades que atendemos, promovendo transformação social através de ações concretas."
          ),
          React.createElement(
            "div",
            { className: "social-links" },
            React.createElement(
              "a",
              { href: "https://www.facebook.com/eniac.oficial/?locale=pt_BR", target: "_blank" },
              React.createElement("img", { src: "./Assets/logo-do-facebook.png", alt: "facebook logotipo" })
            ),
            React.createElement(
              "a",
              { href: "https://www.instagram.com/eniac.oficial/", target: "_blank" },
              React.createElement("img", { src: "./Assets/instagram.png", alt: "instagram logotipo" })
            ),
            React.createElement(
              "a",
              { href: "https://www.linkedin.com/school/eniacoficial/posts/?feedView=all", target: "_blank" },
              React.createElement("img", { src: "./Assets/linkedin.png", alt: "linkedin logotipo" })
            ),
            React.createElement(
              "a",
              { href: "https://www.youtube.com/@eniac.oficial", target: "_blank" },
              React.createElement("img", { src: "./Assets/youtube.png", alt: "youtube logotipo" })
            )
          )
        ),

        // Seção 2: Explore
        React.createElement(
          "div",
          { className: "footer-section" },
          React.createElement("h4", null, "Explore"),
          React.createElement(
            "ul",
            null,
            React.createElement("li", null, React.createElement("a", { href: "index.html" }, "Home")),
            React.createElement("li", null, React.createElement("a", { href: "#projects" }, "Hub de Carreiras")),
            React.createElement("li", null, React.createElement("a", { href: "HubSocial.html" }, "Hub Social")),
            React.createElement("li", null, React.createElement("a", { href: "#contact" }, "Hub de Inovação")),
            React.createElement("li", null, React.createElement("a", { href: "#" }, "Hub de Projetos"))
          )
        ),

        // Seção 3: Contato
        React.createElement(
          "div",
          { className: "footer-section" },
          React.createElement("h4", null, "Contato"),
          React.createElement(
            "div",
            { className: "footer-contact" },
            React.createElement(
              "div",
              { className: "footer-contact-item" },
              React.createElement("img", { src: "./Assets/email.png", alt: "" }),
              React.createElement("span", null, "informacoes@eniac.edu.br")
            ),
            React.createElement(
              "div",
              { className: "footer-contact-item" },
              React.createElement("img", { src: "./Assets/telefone.png", alt: "" }),
              React.createElement("span", null, "(11) 94132-1584")
            ),
            React.createElement(
              "div",
              { className: "footer-contact-item" },
              React.createElement("img", { src: "./Assets/local.png", alt: "" }),
              React.createElement("span", null, "Rua Força Pública, 89", React.createElement("br"), "Centro - Guarulhos - SP")
            )
          )
        )
      ),

      // Rodapé inferior
      React.createElement(
        "div",
        { className: "footer-bottom" },
        React.createElement(
          "p",
          null,
          "© 2025 ENIAC. Todos os direitos reservados. Desenvolvido com ❤️ pelo Squad de Alunos ENIAC."
        )
      )
    )
  );
}

// Renderização
const footerContainer = document.getElementById("footer-root");
const footerRoot = ReactDOM.createRoot(footerContainer);
footerRoot.render(React.createElement(Footer));
