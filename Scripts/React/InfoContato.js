function ContactSection() {
  return React.createElement(
    'div',
    { className: 'contact-info' },

    // Cartão: Localização
    React.createElement(
      'a',
      { href: 'https://www.google.com/maps?sca_esv=4bb3ee777edb1788&rlz=1C1VIQF_enBR1086BR1086&output=search&q=eniac&source=lnms&fbs=AIIjpHxX5k-tONtMCu8aDeA7E5WMdDwGSuc8eBkl8hX51y2q6-r6qOmgvFs8yhx59bJgnXSSHSaXi7uLtgKX7K-NBAamPaKV_c2ydKnKOOsbtKahUT8XMJCMHdo0EFjlNifRMN-rjGhnR5uw_9WLwfXMxds8gLriIS9BmYwmNj838oGfSuAPVsGjJTAP9fk_8yvVP45wGYXO2vqN6OxsN51peb_WTHaUsg&entry=mc&ved=1t:200715&ictx=111',target: '_blank', className: 'link-cartao' },
      React.createElement(
        'div',
        { className: 'cartao-contato hidden4' },
        React.createElement(
          'div',
          { className: 'icone-contato' },
          React.createElement('img', { src: './Assets/local01.png', alt: '' })
        ),
        React.createElement('div', { className: 'titulo-cartao' }, 'Localização'),
        React.createElement(
          'div',
          { className: 'texto-cartao' },
          'Rua Força Pública, 89',
          React.createElement('br'),
          'Centro - Guarulhos - SP'
        )
      )
    ),

    // Cartão: Número de Telefone
    React.createElement(
      'a',
      { href: '#', className: 'link-cartao' },
      React.createElement(
        'div',
        { className: 'cartao-contato hidden4' },
        React.createElement(
          'div',
          { className: 'icone-contato' },
          React.createElement('img', { src: './Assets/telefone01.png', alt: '' })
        ),
        React.createElement('div', { className: 'titulo-cartao' }, 'Número de Telefone'),
        React.createElement(
          'div',
          { className: 'texto-cartao' },
          '(11) 2472-5500',
          React.createElement('br'),
          '(11) 94132-1584'
        )
      )
    ),

    // Cartão: Suporte Online
    React.createElement(
      'a',
      { href: '#', className: 'link-cartao' },
      React.createElement(
        'div',
        { className: 'cartao-contato hidden4' },
        React.createElement(
          'div',
          { className: 'icone-contato' },
          React.createElement('img', { src: './Assets/SuporteTec.png', alt: '' })
        ),
        React.createElement('div', { className: 'titulo-cartao' }, 'Suporte Online'),
        React.createElement('div', { className: 'texto-cartao' }, 'Seg a Sex, 9h às 18h')
      )
    ),

    // Cartão: Email
    React.createElement(
      'a',
      { href: 'mailto:informacoes@eniac.edu.br', className: 'link-cartao' },
      React.createElement(
        'div',
        { className: 'cartao-contato hidden4' },
        React.createElement(
          'div',
          { className: 'icone-contato' },
          React.createElement('img', { src: './Assets/email01.png', alt: '' })
        ),
        React.createElement('div', { className: 'titulo-cartao' }, 'Email'),
        React.createElement(
          'div',
          { className: 'texto-cartao' },
          'informacoes@eniac.edu.br'
        )
      )
    )
  );
}

const contactContainer = document.getElementById('contact-root');
const contactRoot = ReactDOM.createRoot(contactContainer);
contactRoot.render(React.createElement(ContactSection));
