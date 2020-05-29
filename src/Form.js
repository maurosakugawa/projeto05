
import React from 'react';

export default class Form extends React.Component {
  constructor(){
    super();
    this.state = {
      nome: '',
      pessoas: []
    }
  }

  changeNome = event => {
        
    this.setState ({
        nome: event.target.value.toLowerCase().replace(/(?:^|\s)\S/g, 
        function(a) { return a.toUpperCase(); })
     });
 };

  limpar = () => {
    this.setState({
      nome: ''
    });
  }

  submeter = event => {
    event.preventDefault();
    if (this.state.nome.trim() !== '') {
        this.state.pessoas.push({
            nome: this.state.nome,
        });
        this.props.add(this.state.pessoas);
        this.setState({
            errorMsg: ""
        });
        event.target.reset();            
        function compare(a,b) {
          if (a.nome < b.nome)
             return -1;
          if (a.nome > b.nome)
            return 1;
          return 0;
        }
        
        this.state.pessoas.sort(compare);
    } else{
        this.setState({ errorMsg: "O campo nome é obrigatório!"});
    }
    
}

  render() {
    return (
      <form onReset={this.limpar} onSubmit={this.submeter}>
        <div>
          <label>Nome</label> 
          <input 
            value={this.state.nome}
            onChange={ this.changeNome } />
        </div>
        <div>
          <button 
            type="submit"
            disabled={!this.state.nome}>
            Salvar
          </button>
          <button type="reset">Limpar</button>
        </div>
      </form>
    );
  }
}