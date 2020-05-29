
import React from 'react';

export default class Tabela extends React.Component {
  render() {
    const sorted = this.props.lista;
    console.log({sorted})
    const nomes = sorted.map((pessoas, index) => 
            <div key={index}> {pessoas.nome} </div>
    );
    
    const listPessoas = nomes;

    return (
        <ol>
            { listPessoas.map((pessoa, indice) => <li key={indice}>{ pessoa }</li>)}
        </ol>
    )
  }
}
