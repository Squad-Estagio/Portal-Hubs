// header.js

function Header({ logo, links }) {
  return React.createElement(
    "header",
    null,
    React.createElement(
      "div",
      { className: "head" },

      // Logo
      React.createElement(
        "div",
        { className: "logotipo" },
        React.createElement(
          "a",
          { href: logo.href },
          React.createElement("img", { src: logo.src, alt: logo.alt })
        )
      ),

      // Checkbox + label
      React.createElement("input", {
        type: "checkbox",
        "aria-label": "Close menu",
        role: "button",
        id: "close-menu",
        className: "close-menu",
      }),
      React.createElement("label", {
        htmlFor: "close-menu",
        title: "close-menu",
        className: "close-menu-label",
      }),

      // Navbar
      React.createElement(
        "div",
        { className: "navbar" },
        React.createElement(
          "ul",
          null,
          ...links.flatMap((link, index) => {
            const items = [];

            // Com submenu
            if (link.submenu) {
              items.push(
                React.createElement(
                  "li",
                  { key: `main-${index}`, className: "hub-container" },
                  React.createElement("a", { href: "#hubs" }, link.label),
                  React.createElement(
                    "div",
                    { className: "option-Hubs" },
                    React.createElement(
                      "ul",
                      null,
                      ...link.submenu.map((sublink, i) =>
                        React.createElement(
                          "li",
                          { key: `sub-${i}`, className: sublink.className || undefined },
                          React.createElement("a", { href: sublink.href }, sublink.label)
                        )
                      )
                    )
                  )
                )
              );
            } else {
              // Simples
              items.push(
                React.createElement(
                  "li",
                  { key: `item-${index}` },
                  React.createElement("a", { href: link.href }, link.label)
                )
              );
            }

            // Separador visual (exceto último)
            if (index < links.length - 1) {
              items.push(React.createElement("div", { className: "division-Header", key: `divider-${index}` }));
            }

            return items;
          })
        )
      )
    )
  );
}

// Dados
const headerData = {
  logo: {
    src: "./IMG/logo eniac.png",
    alt: "logotipo da instituição",
    href: "index.html",
  },
  links: [
    { label: "HOME", href: "./index.html" },
    {
      label: "HUBS",
      submenu: [
        { label: "Hub de Carreiras", href: "HubCarreiras.html", className: "HubCarreirasNav" },
        { label: "Hub Social", href: "HubSocial.html", className: "HubSocialNav" },
        { label: "Hub de Inovação", href: "HubInovacao.html", className: "HubInovNav" },
        { label: "Hub de Projetos", href: "HubProjetos.html", className: "HubProjetosNav" },
      ],
    },
    { label: "SOBRE", href: "sobre.html" },
    { label: "CEGRU", href: "CEGRU.html" },
  ],
};

// Montagem
const container = document.getElementById("header-root");
const root = ReactDOM.createRoot(container);
root.render(React.createElement(Header, headerData));
