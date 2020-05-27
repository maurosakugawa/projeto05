import React from 'react';
import Tabela from './Tabela';

export default class Form extends React.Component {
    constructor() {
        super();
        this.changeNome = this.changeNome.bind(this);
        this.add = this.add.bind(this);
        this.state = {
            nome: '',
            pessoas: []
        };
    }

    add() {
        this.props.onButtonClick(this.state.nome);
        this.setState({ nome: '' });
    }

    changeNome = event => {
        
       this.setState ({
           nome: event.target.value.toLowerCase().replace(/(?:^|\s)\S/g, 
           function(a) { return a.toUpperCase(); })
        });
    };
    
    reset = event => {
        event.preventDefault();
        this.setState({
            nome: ''
        });
    }

    submit = event => {
        event.preventDefault();
        if (this.state.nome.trim() !== '') {
            this.state.pessoas.push({
                nome: this.state.nome
            });
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
            <div className = 'container'> 
                <form onSubmit = {this.submit} onReset = {this.reset}>
                    <div>
                        <label className = 'nome'> Nome </label>
                        <input type = 'text' name = 'nome' value = {this.state.nome}
                            id = 'input' onChange = {this.changeNome} />
                    </div>

                    <div className = 'botoes'>
                        <button type = 'submit' id = 'botao' disabled={!this.state.nome} > Salvar </button>
                        <button id='limpar' type = 'reset'> Limpar </button>
                    </div>

                    <div>
                        {this.state.errorMsg}
                    </div>
                </form>
                <Tabela lista = {this.state.pessoas} />
            </div>
        );
    }
}