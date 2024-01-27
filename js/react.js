class FORMULARIO extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: '', email: '', assunto: '', mensagem: '' };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }
    handleChange(event) {
      this.setState({ [event.target.id]: event.target.value });
    }
    
    handleSubmit(event) {
      localStorage.setItem('name', this.state.name);
      localStorage.setItem('email', this.state.email);
      localStorage.setItem('assunto', this.state.assunto);
      localStorage.setItem('mensagem', this.state.mensagem);
  
      alert('Formulario submitido e dados guardados!');
    event.preventDefault();
    }

  render() {
    return React.createElement('form', {
      style: {
        paddingTop: '10px', // Correção: use camelCase para propriedades do CSS
      }, 
      onSubmit: this.handleSubmit,
    },
      React.createElement('label', { htmlFor: 'name' }, 'Nome :'),
      React.createElement('input', {
        type: 'text',
        id: 'name',
        placeholder: 'Primeiro e Último nome',
        pattern: '[A-Za-zÀ-úçÇ\\s]*',
        autoComplete: 'name',
        required: true,
        className: 'largura-estendida',
        style : { width: '150px', padding: '5px' },
      }),
      React.createElement('label', { htmlFor: 'email'}, 'Email :'),
      React.createElement('input', {
        type: 'email',
        id: 'email',
        placeholder: 'email@exemplo.com',
        autoComplete: 'email',
        required: true,
        className: 'largura-estendida',
        style : { width: '300px', padding: '5px' },
      }),
      React.createElement('br', null), React.createElement('br', null),
      React.createElement('label', { htmlFor: 'assunto' }, 'Assunto:'), React.createElement('br', null),
      React.createElement('input', {
        type: 'text',
        id: 'assunto',
        placeholder: 'Assunto',
        pattern: '[^\\n]',
        required: true,
        style: { width: '90%', padding: '5px'},
        className: 'largura-estendida',
      }),
      React.createElement('br', null), React.createElement('br', null),
      React.createElement('label', { htmlFor: 'mensagem' }, 'Mensagem:'), React.createElement('br', null),
      React.createElement('textarea', {
        id: 'mensagem',
        placeholder: 'Mensagem',
        pattern: '[A-Za-zÀ-úçÇ\\s]*',
        autoComplete: '0000000',
        required: true,
        className: 'Mensagem',
        style: { width: '90%', padding: '5px', height: '150px' , resize:"none"},
      }),
      React.createElement('br', null), React.createElement('br', null),
      React.createElement('input', {
        type : 'button',
        value : "Clear",
        id : "clearbutton",
      },null),
      React.createElement('input', {
        type : 'submit',
        id : "submitbutton",
      }),
    );
  }
}
  
document.addEventListener('DOMContentLoaded', function () {
  ReactDOM.render(React.createElement(FORMULARIO), document.getElementById('TEST'));
});