function Midias({ videos }) {
  return React.createElement(
    "div",
    { className: "MidiasWrapper" },
    React.createElement(
      "div",
      { className: "MidiasSecundarias" },
      ...videos.map((video, index) =>
        React.createElement(
          "a",
          {
            href: video.href,
            target: "_blank",
            key: `video-${index}`,
          },
          React.createElement(
            "div",
            { className: "boxMidia" },
            React.createElement("img", {
              src: "./IMG/Play-Button.png",
              alt: "",
              className: "PlayButton",
            }),
            React.createElement("img", {
              src: video.thumbnail,
              alt: "",
              className: "thumbImg ",
            })
          )
        )
      )
    )
  );
}


const midiasData = {
  videos: [
    {
      href: "https://www.youtube.com/watch?v=L2vefuMJJKQ",
      thumbnail: "https://img.youtube.com/vi/L2vefuMJJKQ/maxresdefault.jpg",
    },
    {
      href: "https://www.youtube.com/watch?v=eU92r0Y5YzA",
      thumbnail:
        "https://i.ytimg.com/vi/eU92r0Y5YzA/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLD661jV15zgG5x0vnckF6ldhuFRPQ",
    },
    {
      href: "https://www.youtube.com/watch?v=_6qbMugl2UQ",
      thumbnail:
        "https://i.ytimg.com/vi/_6qbMugl2UQ/hq720.jpg?sqp=-oaymwEnCNAFEJQDSFryq4qpAxkIARUAAIhCGAHYAQHiAQoIGBACGAY4AUAB&rs=AOn4CLB8afiV29pDwxC8CnkEv0XG2PPI-Q",
    },
    // Adicione mais objetos aqui se quiser expandir
  ],
};


// Usar um nome único para o container do midias
const midiasContainer = document.getElementById("midias-root");
const midiasRoot = ReactDOM.createRoot(midiasContainer);
midiasRoot.render(React.createElement(Midias, midiasData));

