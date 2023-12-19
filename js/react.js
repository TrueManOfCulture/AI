class FORMULARIO extends React.Component {
  render() {
    return React.createElement('form', null,
      React.createElement('label', { htmlFor: 'name' }, 'Nome'),
      React.createElement('br', null),
      React.createElement('input', {
        type: 'text',
        id: 'name',
        placeholder: 'Primeiro e Último nome',
        pattern: '[A-Za-zÀ-úçÇ\\s]*',
        autoComplete: 'name',
        required: true,
        className: 'largura-estendida',
      }),
      React.createElement('br', null), React.createElement('br', null),
      React.createElement('label', { htmlFor: 'email' }, 'Email'), React.createElement('br', null),
      React.createElement('input', {
        type: 'email',
        id: 'email',
        placeholder: 'email@exemplo.com',
        autoComplete: 'email',
        required: true,
        className: 'largura-estendida',
      }),
      React.createElement('br', null), React.createElement('br', null),
      React.createElement('label', { htmlFor: 'assunto' }, 'Assunto'), React.createElement('br', null),
      React.createElement('input', {
        type: 'text',
        id: 'assunto',
        placeholder: 'Assunto',
        pattern: '[^\\n]',
        required: true,
        className: 'largura-estendida',
      }),
      React.createElement('br', null), React.createElement('br', null),
      React.createElement('label', { htmlFor: 'mensagem' }, 'Mensagem'), React.createElement('br', null),
      React.createElement('textarea', {
        cols: '100',
        rows: '10',
        placeholder: 'Escreva aqui...',
        required: true,
      })
    );
  }
}
  
document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(React.createElement(FORMULARIO), document.getElementById('TEST'));
});
  