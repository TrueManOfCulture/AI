class FORMULARIO extends React.Component {

  constructor(props) {
    super(props);
    this.state = { name: '', email: '', assunto: '', mensagem: '', contacto: ''};
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
    }

    handleChange(event) {
      console.log('handleChange called');
      console.log('ID:', event.target.id);
      console.log('Valor:', event.target.value);
      this.setState({ [event.target.id]: event.target.value });
    }

    clear(){
      this.state.name='';
      this.state.email='';
      this.state.assunto='';
      this.state.mensagem='';
      this.state.contacto='';
      document.getElementById("name").value = '';
      document.getElementById("email").value = '';
      document.getElementById("assunto").value = '';
      document.getElementById("mensagem").value = '';
      document.getElementById("contacto").value = '';
    }
    
    handleSubmit(event) {
      console.log("nome: " + this.state.name);
      localStorage.setItem('name', this.state.name);
      localStorage.setItem('email', this.state.email);
      localStorage.setItem('assunto', this.state.assunto);
      localStorage.setItem('mensagem', this.state.mensagem);
      localStorage.setItem('contacto', this.state.contacto);
  
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
        onChange: this.handleChange,
        className: 'largura-estendida',
        style : { width: '30%', padding: '5px' },
      }),
      React.createElement('label', { htmlFor: 'contacto' }, 'Contacto :'),
      React.createElement('input', {
        type: 'text',
        id: 'contacto',
        placeholder: 'Contacto(Ex:933432141)',
        pattern: '[0-9]*',
        autoComplete: '000000000',
        required: true,
        onChange: this.handleChange,
        className: 'contacto',
        style : { width: '30%', padding: '5px' },
      }),
      React.createElement('br', null), React.createElement('br', null),
      React.createElement('label', { htmlFor: 'email'}, 'Email :'),
      React.createElement('input', {
        type: 'email',
        id: 'email',
        onChange: this.handleChange,
        placeholder: 'email@exemplo.com',
        autoComplete: 'email',
        required: true,
        className: 'largura-estendida',
        style : { width: '60%', padding: '5px', right : '10px' },
      }),
      React.createElement('br', null), React.createElement('br', null),
      React.createElement('label', { htmlFor: 'assunto' }, 'Assunto:'), React.createElement('br', null),
      React.createElement('input', {
        type: 'text',
        id: 'assunto',
        onChange: this.handleChange,
        placeholder: 'Assunto',
        pattern: '[A-Za-zÀ-úçÇ\\s]*',
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
        required: true,
        onChange: this.handleChange,
        className: 'Mensagem',
        style: { width: '90%', padding: '5px', height: '150px' , resize:"none"},
      }),
      React.createElement('br', null), React.createElement('br', null),
      React.createElement('input', {
        type : 'button',
        value : "Clear",
        id : "clearbutton",
        onClick: () => this.clear(),
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